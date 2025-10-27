import './App.scss';
import Button from './components/Button';
import MapView from './components/MapView';
import Sidebar from './components/SideBar';
import Modal from './components/Modal';
import { useRef, useState, useEffect } from 'react';

function App() {
  const mapRef = useRef();
  const [markerPosition, setMarkerPosition] = useState(null);
  const [currentTheme, setCurrentTheme] = useState('light');
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalContent, setModalContent] = useState('');
  const [modalTitle, setModalTitle] = useState('');

  function toggleTheme() {
    let current = document.documentElement.getAttribute('data-theme');
    const newTheme = current === 'light' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', newTheme);
    setCurrentTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  }

  function openModal(title, content) {
    setModalTitle(title);
    setModalContent(content);
    setModalIsOpen(true);
  }

  function closeModal() {
    setModalIsOpen(false);
    setModalContent('');
    setModalTitle('');
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
        <Modal
          modalIsOpen={modalIsOpen}
          modalContent={modalContent}
          closeModal={closeModal}
          modalTitle={modalTitle}
        />
        <Sidebar handleFlyTo={handleFlyTo} openModal={openModal} />
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
