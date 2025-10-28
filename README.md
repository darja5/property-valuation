# Property Valuation App

A responsive web application built with **React** and **Leaflet**, designed for visualizing and estimating real estate property values.  
The app allows users to view property details, estimate total value, and interact with data through intuitive UI elements - including map navigation, collapsible views, and editable valuations.

---

## Tech Stack

- **React 18**
- **Leaflet** (interactive map integration)
- **SCSS** for modular and theme-based styling
- **Vite** for fast development and build
- **ESLint + Prettier** for clean and consistent code

---

## Key Features

### Interactive Map

- Displays property locations using **Leaflet**.
- Clicking **“Details”** in the sidebar centers the map on the property (flyTo animation).
- A marker dynamically updates based on the selected property.

### Sidebar with Property Details

- Organized view of **general information**, **land**, and **unit** details, last two each within collapsible sections.
- Clean grid layout for aligned labels and values.
- Responsive and scrollable for a smooth user experience.

### Valuation Summary

- Displays a dynamically calculated **total property value** based on all parcels and units.
- Users can **edit the total manually** — input becomes active on click and saves automatically on blur or Enter.
- Clicking **“Add Valuation”** introduces a new valuation method that adjusts the total value (e.g. subtracts 11%).
- Added collapsible behavior for individual valuation methods with an option to remove them (× icon).

### Interaction Buttons

Each main button opens a **contextual modal**:

- **Back** → Opens a modal warning users to confirm all changes before navigating, with only a Close option.
- **Explanation** → Shows modal with a short note explaining the valuation logic.
- **Remarks** → Opens a textarea input where users can write and save notes by pressing Enter.
- **Confirm** → Displays modal with a confirmation message before final submission, with only a Close option.

### Theme Toggle

- Users can switch between light and dark themes.
- Theme preference is stored in **localStorage** and persists between sessions.
- Smooth transition effect between themes.

---

## Project Structure

src/
├── components/
│ ├── Button.jsx / .scss
│ ├── Collapsible.jsx / .scss
│ ├── MapView.jsx / .scss
│ ├── Modal.jsx / .scss
│ └── PropertyInfo.jsx / .scss
├── data/
│ └── mockData.js
├── styles/
│ ├── variables.scss
│ └── global.scss
├── App.jsx
└── main.jsx

---

## Running the App

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

## Design and UX Notes

- Clean, minimal interface optimized for clarity and professionalism.
- Layout designed for both light and dark readability.

---

## Author

Developed as part of a Frontend assignment by Darja Peternel, focusing on clean code, user experience, and component-based architecture.
