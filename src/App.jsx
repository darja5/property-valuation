import './App.scss';
import Button from './components/Button';
import MapView from './components/MapView';
import Sidebar from './components/SideBar';
import { useRef, useState, useEffect } from 'react';

function App() {
  const mapRef = useRef();
  const [markerPosition, setMarkerPosition] = useState(null);
  const [currentTheme, setCurrentTheme] = useState('light');

  function toggleTheme() {
    let current = document.documentElement.getAttribute('data-theme');
    const newTheme = current === 'light' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', newTheme);
    setCurrentTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  }

  function handleFlyTo(newLocation) {
    const map = mapRef.current;
    if (!map) {
      return;
    }
    map.flyTo(newLocation, 17, { duration: 2 });
    setMarkerPosition(newLocation);
  }

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    setCurrentTheme(savedTheme);
    document.documentElement.setAttribute('data-theme', savedTheme);
  }, []);

  return (
    <main className="page">
      <header>
        <Button
          handleClick={toggleTheme}
          label={currentTheme === 'light' ? 'Dark' : 'Light'}
          className="btnTheme"
        />
      </header>
      <div className="main-layout">
        <Sidebar handleFlyTo={handleFlyTo} />
        <MapView
          mapRef={mapRef}
          markerPosition={markerPosition}
          theme={currentTheme}
        />
      </div>
    </main>
  );
}

export default App;
