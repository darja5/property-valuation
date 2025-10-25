import './App.css';
import MapView from './components/MapView';
import Sidebar from './components/SideBar';
import { useRef, useState } from 'react';

function App() {
  const mapRef = useRef();
  const [markerPosition, setMarkerPosition] = useState(null);

  function handleFlyTo(newLocation) {
    const map = mapRef.current;
    if (!map) {
      return;
    }
    map.flyTo(newLocation, 17, { duration: 2 });
    setMarkerPosition(newLocation);
  }
  return (
    <main className="page">
      <header />
      <div className="main-layout">
        <Sidebar handleFlyTo={handleFlyTo} />
        <MapView mapRef={mapRef} markerPosition={markerPosition} />
      </div>
    </main>
  );
}

export default App;
