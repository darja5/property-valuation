import '../components/PropertyInfo.css';
import Collapsible from './Collapsible';
import VectorSquare from '../icons/vector-square.svg';
import Building from '../icons/buildings.svg';
import Pin from '../icons/pin.svg';

export default function PropertyInfo({ location }) {
  const generalLabels = ['reg. num', 'district', 'municipality', 'quarter'];

  return (
    <div className="property-info">
      <div className="general-info">
        {generalLabels.map((item, i) => {
          let value;
          if (item === 'reg. num')
            value = location.generalInfo['regNumber'].toUpperCase();
          else value = location.generalInfo[item].toUpperCase();
          let label = item.toUpperCase();
          return (
            <>
              <label key={i} className="info-label">
                {label}
              </label>
              <div key={i + 'i'} className="info-value">
                {value}
              </div>
            </>
          );
        })}
      </div>

      <Collapsible
        buttonLabel="Land"
        icon={VectorSquare}
        properties={location.land}
        columns={['reg. num', 'area', 'plZone', '', '']}
        renderRow={(item) => (
          <>
            <div>{item.regNumber}</div>
            <div>{item.area}</div>
            <div>{item.plZone}</div>
            <div className="empty" />
            <div className="last-item">
              <a>DETAILS</a>
              <img src={Pin} alt="Pin" className="icon" />
            </div>
          </>
        )}
      />

      <Collapsible
        buttonLabel="Units"
        icon={Building}
        properties={location.units}
        columns={['reg. num', 'type', 'extents', 'plZone', '']}
        renderRow={(item) => (
          <>
            <div>{item.regNumber}</div>
            <div>{item.type}</div>
            <div>{item.extents}</div>
            <div>{item.plZone}</div>
            <div className="last-item">
              <a>DETAILS</a>
              <img src={Pin} alt="Pin" className="icon" />
            </div>
          </>
        )}
      />
    </div>
  );
}
