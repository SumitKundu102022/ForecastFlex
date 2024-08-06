import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

import TopButtons from "./components/TopButtons";
import Inputs from "./components/Inputs";
import TimeAndLocation from "./components/TimeAndLocation";
import TempAndDetails from "./components/TempAndDetails";
import ForeCast from "./components/ForeCast";
import Footer from "./components/Footer";
import getFormattedWeatherData from "./services/weatherService";

// Import videos
import clearWeatherVideo from "./assets/videos/clear_weather.mp4.mp4";
import rainyWeatherVideo from "./assets/videos/rainy_weather.mp4";
import snowyWeatherVideo from "./assets/videos/snowy_weather.mp4";
import mistyWeatherVideo from "./assets/videos/misty_weather.mp4";
import hazyWeatherVideo from "./assets/videos/hazy_weather.mp4";
import defaultWeatherVideo from "./assets/videos/default_weather.mp4";
import cloudyWeatherVideo from "./assets/videos/cloudy_weather.mp4.mp4";
import thunderstormVideo from "./assets/videos/Thunderstorm_weather.mp4";
import drizzleVideo from "./assets/videos/drizzle_weather.mp4";
import smokyWeatherVideo from "./assets/videos/smoky_weather.mp4";

// Import Spinner
import Spinner from "./components/Spinner";

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

const App = () => {
  const [query, setQuery] = useState({});
  const [units, setUnits] = useState("metric");
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);

  const getWeather = async () => {
    const cityName = query.q ? query.q : "current location";
    toast.info(`Fetching weather data for ${capitalizeFirstLetter(cityName)}`);

    await getFormattedWeatherData({ ...query, units })
      .then((data) => {
        setWeather(data);
        toast.success(
          `Successfully fetched weather data for ${capitalizeFirstLetter(
            cityName
          )}`
        );
      })
      .catch(() => {
        toast.error(
          `Failed to fetch weather data for ${capitalizeFirstLetter(cityName)}`
        );
      });
    setLoading(false);
  };

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setQuery({
            lat: position.coords.latitude,
            lon: position.coords.longitude,
          });
        },
        () => {
          setQuery({ q: "Haldia" });
        }
      );
    } else {
      setQuery({ q: "Haldia" });
    }
  }, []);

  useEffect(() => {
    if ((query.lat && query.lon) || query.q) {
      setLoading(true);
      getWeather();
    }
  }, [query, units]);

  const formatBackground = () => {
    if (!weather) return "from-cyan-600 to-blue-700";

    const { details } = weather;

    switch (details) {
      case "Clear":
        return "from-yellow-400 to-orange-700";
      case "Clouds":
        return "from-gray-400 to-gray-800";
      case "Rain":
        return "from-blue-400";
      case "Snow":
        return "from-blue-400 to-blue-200";
      case "Mist":
        return "from-yellow-100 to-orange-700";
      case "Haze":
        return "from-purple-400 to-purple-700";
      case "Thunderstorm":
        return "from-yellow-300 to-gray-700";
      case "Drizzle":
        return "from-green-400 to-blue-700";
      case "Smoke":
        return "from-gray-300 to-gray-500";
      default:
        return "from-cyan-600 to-blue-700";
    }
  };

  const formatBackgroundVideo = () => {
    if (!weather) return defaultWeatherVideo;

    const { details } = weather;

    switch (details) {
      case "Clear":
        return clearWeatherVideo;
      case "Clouds":
        return cloudyWeatherVideo;
      case "Rain":
        return rainyWeatherVideo;
      case "Snow":
        return snowyWeatherVideo;
      case "Mist":
        return mistyWeatherVideo;
      case "Haze":
        return hazyWeatherVideo;
      case "Thunderstorm":
        return thunderstormVideo;
      case "Drizzle":
        return drizzleVideo;
      case "Smoke":
        return smokyWeatherVideo;
      default:
        return defaultWeatherVideo;
    }
  };

  return (
    <>
      <div className={`outer-div`}>
        <video
          className="background-video"
          autoPlay
          loop
          muted
          src={formatBackgroundVideo()}
        />

        <div className="content">
          <div
            className={`mx-auto max-w-screen-lg mt-4 py-5 px-32 bg-gradient-to-br shadow-xl shadow-gray-400 ${formatBackground()}`}
          >
            {loading ? (
              <Spinner />
            ) : (
              <>
                <TopButtons setQuery={setQuery} />
                <Inputs setQuery={setQuery} setUnits={setUnits} />
                {weather && (
                  <>
                    <TimeAndLocation weather={weather} />
                    <TempAndDetails weather={weather} units={units} />
                    <ForeCast
                      title="3 hour step forecast"
                      data={weather.hourly}
                    />
                    <ForeCast title="daily forecast" data={weather.daily} />
                  </>
                )}
              </>
            )}
            <ToastContainer
              autoClose={1500}
              hideProgressBar={true}
              theme="colored"
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default App;
