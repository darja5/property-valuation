import './App.css';
import MapView from './components/MapView';

function App() {
  return (
    <main className="page">
      <header />
      <div className="main-layout">
        <div className="sidebar" />
        <MapView />
      </div>
    </main>
  );
}

export default App;
