# ForecastFlex


A simple and intuitive weather application that provides real-time weather information for any location using the OpenWeatherMap API. Features include current temperature, humidity, wind speed, and weather conditions, with a responsive design optimized for desktop. Additionally, the app shows a 3-hour step forecast and a daily forecast.

## Features

- **Current Weather Information:** Real-time data including temperature, humidity, wind speed, and weather conditions.
- **3-Hour Step Forecast:** Detailed forecast updates every 3 hours.
- **Daily Forecast:** Weather predictions for the upcoming days.
- **Responsive Design:** Optimized for desktop use.
- **Error Handling:** Graceful handling of invalid city names and network issues.

## Tech Stack

- **Frontend:**
  - React.js
  - Tailwind CSS
  - React Hooks
  - Luxon
  - React Toastify

- **Backend:**
  - Express.js
  - Node.js
  - dotenv

- **API:**
  - OpenWeatherMap API

## Getting Started

### Prerequisites

- Node.js and npm installed on your local machine.

### Installation

1. Clone the repository:

    ```sh
    git clone https://github.com/your-username/weather-app.git
    ```

2. Navigate to the project directory:

    ```sh
    cd ForecastFlex
    ```

3. Install dependencies:

    ```sh
    npm install
    ```

4. Create a `.env` file in the root of the project and add your OpenWeatherMap API key and URL:

    ```plaintext
    VITE_OPEN_WEATHER_API_KEY=your_api_key_here
    VITE_OPEN_WEATHER_BASE_URL=YOUR_API_URL
    ```

5. Start the development server:

    ```sh
    npm run dev
    ```

## Usage

- Open your browser and navigate to `http://localhost:3000`.
- Enter a city name in the search bar to get the current weather information and forecasts.

## Deployment

To deploy this project, you can use platforms like Vercel, Netlify, or any other hosting service. Ensure that you set up the environment variables on the hosting platform as explained in the "Getting Started" section.

### Example for Vercel

1. Connect your GitHub repository to Vercel.
2. Add all the environment variable in the Vercel dashboard:
    - **Key:** `VITE_OPEN_WEATHER_API_KEY`
    - **Value:** `your_api_key_here`
3. Redeploy your project.

## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

Distributed under the MIT License. See `LICENSE` for more information.

## Contact

Sumit Kundu - [sumitkundu10012001@gmail.com](mailto:your-email@example.com)

Project Link: [https://github.com/SumitKundu102022/ForecastFlex](https://github.com/your-username/weather-app)
