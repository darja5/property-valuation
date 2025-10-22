import '../components/PropertyInfo.css';

export default function PropertyInfo({ location }) {
  return (
    <>
      <div className="property-info">
        {location.map((att) => {
          let label = att.label.toUpperCase();
          let value = att.value.toUpperCase();
          return (
            <>
              <label className="info-label">{label}</label>
              <div className="info-value">{value}</div>
            </>
          );
        })}
      </div>
      Collapsible Land
      <br />
      Collapsible Unit
      <br />
    </>
  );
}
