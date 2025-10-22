import './App.css';
import MapView from './components/MapView';
import Sidebar from './components/SideBar';

function App() {
  return (
    <main className="page">
      <header />
      <div className="main-layout">
        <Sidebar />
        <MapView />
      </div>
    </main>
  );
}

export default App;
