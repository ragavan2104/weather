# 🌤️ Weather App

A modern, responsive weather application built with React and Vite that provides real-time weather information for cities worldwide.

![Weather App](https://img.shields.io/badge/Status-Active-brightgreen)
![React](https://img.shields.io/badge/React-19.1.0-blue)
![Vite](https://img.shields.io/badge/Vite-6.3.5-purple)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.4.17-teal)

## ✨ Features

- 🔍 **Real-time Weather Search** - Get instant weather data for any city
- 🌡️ **Comprehensive Weather Data** - Temperature, wind speed, weather conditions, and descriptions
- 📱 **Responsive Design** - Optimized for desktop, tablet, and mobile devices
- ⚡ **Fast Performance** - Built with Vite for lightning-fast development and builds
- 🎨 **Modern UI** - Clean, intuitive interface with Tailwind CSS
- ⌨️ **Keyboard Support** - Press Enter to search for weather
- 🚫 **Error Handling** - Graceful error handling for invalid cities and API issues
- 🔄 **Loading States** - Visual feedback during API requests

## 🚀 Tech Stack

### Frontend
- **React 19.1.0** - Modern React with hooks and functional components
- **Vite 6.3.5** - Next-generation frontend build tool
- **Tailwind CSS 3.4.17** - Utility-first CSS framework
- **Tailwind CSS Animate** - Animation utilities for Tailwind

### HTTP Client
- **Axios 1.9.0** - Promise-based HTTP client for API requests

### Development Tools
- **ESLint** - Code linting and quality assurance
- **PostCSS** - CSS post-processing
- **Autoprefixer** - CSS vendor prefixing

### API Integration
- **OpenWeatherMap API** - Real-time weather data provider

## 🛠️ Installation & Setup

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd wheatherapp
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

## 📝 Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build the app for production
- `npm run preview` - Preview the production build locally
- `npm run lint` - Run ESLint for code quality checks

## 🌐 API Integration

This application integrates with the OpenWeatherMap API to fetch real-time weather data. The app provides:

- Current weather conditions
- Temperature in Celsius
- Wind speed measurements
- Weather descriptions
- Error handling for invalid locations

## 📱 Responsive Design

The application is fully responsive and provides an optimal viewing experience across:
- 📱 Mobile devices (320px+)
- 📟 Tablets (768px+)
- 💻 Desktops (1024px+)

## 🎨 UI/UX Features

- **Clean Interface** - Minimalist design focusing on weather data
- **Visual Feedback** - Loading states and error messages
- **Accessibility** - Keyboard navigation and semantic HTML
- **Modern Cards** - Weather data displayed in organized cards
- **Color Coding** - Intuitive color scheme for different weather states

## 🔧 Project Structure

```
wheatherapp/
├── public/
│   └── vite.svg
├── src/
│   ├── components/
│   │   └── Api.jsx          # Main weather component
│   ├── assets/
│   │   └── react.svg
│   ├── App.jsx              # Root component
│   ├── App.css              # App styles
│   ├── index.css            # Global styles
│   └── main.jsx             # App entry point
├── eslint.config.js         # ESLint configuration
├── postcss.config.js        # PostCSS configuration
├── tailwind.config.js       # Tailwind CSS configuration
├── vite.config.js           # Vite configuration
└── package.json             # Dependencies and scripts
```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👏 Acknowledgments

- [OpenWeatherMap](https://openweathermap.org/) for providing the weather API
- [React](https://reactjs.org/) for the amazing frontend framework
- [Vite](https://vitejs.dev/) for the blazing fast build tool
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework

---

Made with ❤️ using React, Vite, and TailwindCSS
