# Property Valuation App

A responsive web application built with **React** and **Leaflet**, designed for visualizing and estimating real estate property values.  
The app allows users to view property details, estimate total value, and interact with data through intuitive UI elements - including map navigation, collapsible views, and editable valuations.

## Setup & Run Instructions

1. Clone the repository
   ```bash
   git clone https://github.com/darja5/property-valuation
   cd property-valuation
   ```
2. Install dependencies
   ```bash
   npm install
   ```
3. Run the development server
   ```bash
   npm run dev
   ```

---

## Architectural Choices

- **React functional components** with hooks (`useState`, `useEffect`, `useRef`) for state management and side-effects.
- **Modular structure**: separate components for Button, Modal, Sidebar, MapView
- **Centralized Modal** for all buttons that require confirmation or input
- **State lifting**: modal state is managed in App, allowing communication across all child components
- **Leaflet integration**: using `useRef` for map and marker management
- **Minimalist design**: consistent style and UI across all interactive elements
