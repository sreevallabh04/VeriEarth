# 🌍 VeriEarth 

VeriEarth is a web application that visualizes real-time environmental data on a 3D globe. It uses satellite imagery and AI to monitor pollution events and make environmental data accessible, transparent, and actionable.

The name "VeriEarth" is a combination of "Verify" and "Earth," reflecting the project's mission to provide verified and reliable environmental data about our planet.

## 🚀 Installation

| Step | Command | Description |
|---|---|---|
| 1 | `git clone https://github.com/your-username/VeriEarth.git` | Clone the repository |
| 2 | `cd VeriEarth` | Navigate to the project directory |
| 3 | `cd frontend` | Navigate to the frontend directory |
| 4 | `npm install` | Install the dependencies |

## 💻 Usage

| Step | Command | Description |
|---|---|---|
| 1 | `cd frontend` | Navigate to the frontend directory |
| 2 | `npm run dev` | Start the development server |
| 3 | Open your browser and navigate to `http://localhost:5173` (or the port specified by Vite) | View the application |

## 📝 Project Description

VeriEarth is a comprehensive environmental monitoring platform built with React, Three.js, and other modern web technologies. The application provides real-time pollution monitoring and detection powered by satellite imagery and AI.

### Key Features:

*   **3D Globe Visualization:** Interactive 3D globe displaying real-time environmental data.
*   **Oil Spill Detection:** Advanced satellite imagery analysis for real-time oil spill detection and monitoring.
*   **AQI Estimation:** Accurate air quality index estimation using multi-spectral satellite data.
*   **Interactive Map:** User-friendly interface for visualizing and analyzing pollution events.
*   **Blockchain Logging:** Immutable record-keeping of pollution events using blockchain technology.

### Technologies Used:

*   **Frontend:** React, Three.js, Tailwind CSS, Framer Motion, Lucide React, React Router
*   **Dependencies:** @react-three/drei, @react-three/fiber, @types/leaflet, clsx, date-fns, framer-motion, leaflet, lucide-react, react, react-dom, react-leaflet, react-router-dom, three

### File Structure:

*   `frontend/`: Contains the frontend code.
    *   `frontend/src/`: Contains the source code.
        *   `frontend/src/App.tsx`: Main application component that sets up routing and authentication.
        *   `frontend/src/components/`: Contains reusable components.
        *   `frontend/src/pages/`: Contains page components for different routes.
            *   `frontend/src/pages/Home.tsx`: Home page with a video background, hero section, pollution causes section, features section, stats section, how it works section, and CTA section.
        *   `frontend/src/context/`: Contains the AuthContext for authentication.
    *   `frontend/public/`: Contains static assets such as the video background and city icons.

### Home Page Sections:

*   **Hero Section:** Displays a video background with a title, description, and links to the dashboard and about pages.
*   **Pollution Causes Section:** Displays animations and descriptions of major causes of air pollution, such as cigarette smoking, industrial emissions, firewood burning, and vehicle emissions.
*   **Features Section:** Highlights key features of the platform, such as oil spill detection, AQI estimation, interactive map, and blockchain logging.
*   **Stats Section:** Displays statistics about the platform, such as the number of active monitoring sites, environmental reports, countries covered, and data points collected.
*   **How It Works Section:** Explains the process of satellite data collection and AI-powered analysis.
*   **CTA Section:** Encourages users to get started and make a difference.

## 🤝 Contributing

Contributions are welcome! Please open an issue or submit a pull request.

## 📜 License

[MIT](LICENSE)
