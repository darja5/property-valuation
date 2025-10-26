import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import './MapView.scss';

export default function MapView({ mapRef, markerPosition, theme }) {
  return (
    <MapContainer
      id="map"
      center={[46.0398029, 14.4688118]}
      zoom={17}
      scrollWheelZoom={false}
      ref={mapRef}
    >
      <TileLayer
        attribution={
          theme === 'light'
            ? '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            : '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="http://cartodb.com/attributions">CartoDB</a>'
        }
        url={
          theme === 'light'
            ? 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
            : 'https://cartodb-basemaps-{s}.global.ssl.fastly.net/dark_all/{z}/{x}/{y}.png'
        }
      />
      <Marker position={markerPosition ?? [46.0398029, 14.4688118]}></Marker>
    </MapContainer>
  );
}
