import '../components/PropertyInfo.css';
import Collapsible from './Collapsible';
import VectorSquare from '../icons/vector-square.svg';
import Building from '../icons/buildings.svg';
import Pin from '../icons/pin.svg';
import History from '../icons/history.svg';
import Plus from '../icons/plus.svg';
import Button from './Button';

export default function PropertyInfo({ location, handleFlyTo }) {
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
              {i == 0 && (
                <Button icon={History} label="History" className="btnHistory" />
              )}
              <label key={i} className="info-label">
                {label}
              </label>
              <div key={item} className="info-value">
                {value}{' '}
                {i == 0 && (
                  <a
                    className="details"
                    onClick={() => handleFlyTo(location.generalInfo.coords)}
                  >
                    DETAILS
                  </a>
                )}
              </div>
              <div className="empty"></div>
              <div className="empty"></div>
            </>
          );
        })}
      </div>
      <div className="collapsibles">
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
                <a className="details" onClick={() => handleFlyTo(item.coords)}>
                  DETAILS
                </a>
                <img src={Pin} alt="Pin" className="pin" />
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
                <a className="details" onClick={() => handleFlyTo(item.coords)}>
                  DETAILS
                </a>
                <img src={Pin} alt="Pin" className="pin" />
              </div>
            </>
          )}
        />
      </div>

      <Button icon={Plus} label="Add valuation" className="btnAdd"></Button>
    </div>
  );
}
