import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import './MapView.css';

export default function MapView({ mapRef, markerPosition }) {
  return (
    <MapContainer
      id="map"
      center={[46.0398029, 14.4688118]}
      zoom={17}
      scrollWheelZoom={false}
      ref={mapRef}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={markerPosition ?? [46.0398029, 14.4688118]}></Marker>
    </MapContainer>
  );
}
