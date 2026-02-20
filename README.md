# VirtualR - VR Development Tools Platform

VirtualR is a modern, responsive landing page for a Virtual Reality development tools platform. This application showcases a comprehensive suite of VR development tools with an elegant user interface, smooth animations, and a professional design.

## 🌟 About The Project

VirtualR is designed to empower developers to build VR applications with ease. The landing page features information about the platform's key features, workflow demonstrations, flexible pricing plans, customer testimonials, and more. Built with modern web technologies, it delivers a smooth and engaging user experience.

## ✨ Key Features

- **Drag-and-Drop Interface** - Easily design and arrange VR environments
- **Multi-Platform Compatibility** - Build VR apps for mobile, desktop, and VR headsets
- **Built-in Templates** - Jumpstart projects with ready-to-use templates
- **Real-Time Preview** - See changes instantly as you develop
- **Collaboration Tools** - Work together with your team in real-time
- **Analytics Dashboard** - Track user interactions and behavior

## 🛠️ Tech Stack

- **React 18.3.1** - Modern JavaScript library for building user interfaces
- **Vite** - Next-generation frontend tooling for faster development
- **Tailwind CSS** - Utility-first CSS framework for rapid UI development
- **Framer Motion** - Production-ready animation library for React
- **Lucide React** - Beautiful & consistent icon library

## 📋 Prerequisites

Before you begin, ensure you have the following installed on your system:
- **Node.js** (version 14.0 or higher)
- **npm** (comes with Node.js) or **yarn**

## 🚀 Installation

Follow these steps to get the project running on your local machine:

1. **Clone the repository**
   ```bash
   git clone https://github.com/novendra27/virtualr.git
   ```

2. **Navigate to the project directory**
   ```bash
   cd virtualr
   ```

3. **Install dependencies**
   ```bash
   npm install
   ```
   or if you're using yarn:
   ```bash
   yarn install
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```
   or with yarn:
   ```bash
   yarn dev
   ```

5. **Open your browser**
   
   The application will be running at `http://localhost:5173` (or another port if 5173 is already in use)

## 📜 Available Scripts

In the project directory, you can run:

- **`npm run dev`** - Runs the app in development mode with hot module replacement
- **`npm run build`** - Builds the app for production to the `dist` folder
- **`npm run preview`** - Preview the production build locally
- **`npm run lint`** - Run ESLint to check code quality

## 📁 Project Structure

```
virtualr/
├── public/              # Static assets
├── src/
│   ├── assets/         # Images, videos, and other media files
│   ├── components/     # React components
│   │   ├── Navbar.jsx
│   │   ├── HeroSection.jsx
│   │   ├── FeatureSection.jsx
│   │   ├── Workflow.jsx
│   │   ├── Pricing.jsx
│   │   ├── Testimonials.jsx
│   │   └── Footer.jsx
│   ├── constants/      # Application constants and data
│   │   └── index.jsx
│   ├── App.jsx         # Main application component
│   ├── main.jsx        # Application entry point
│   └── index.css       # Global styles
├── index.html          # HTML template
├── package.json        # Project dependencies and scripts
├── vite.config.js      # Vite configuration
├── tailwind.config.js  # Tailwind CSS configuration
└── README.md           # Project documentation
```

## 🎨 Features Overview

### Hero Section
Engaging introduction with animated heading and video demonstrations

### Features Section
Detailed showcase of six core features with icons and descriptions

### Workflow Section
Step-by-step guide on how to use the platform efficiently

### Pricing Plans
Three pricing tiers (Free, Pro, Enterprise) with feature comparisons

### Testimonials
Customer reviews from various companies and industries

### Footer
Links to resources, platform info, community, and contact information