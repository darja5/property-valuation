import '../components/PropertyInfo.scss';
import Collapsible from './Collapsible';
import VectorSquare from '../icons/vector-square.svg';
import VectorSquareWhite from '../icons/vector-square-white.svg';
import Building from '../icons/buildings.svg';
import BuildingWhite from '../icons/buildings-white.svg';
import Pin from '../icons/pin.svg';
import PinWhite from '../icons/pin-white.svg';
import History from '../icons/history.svg';
import HistoryWhite from '../icons/history-white.svg';
import Plus from '../icons/plus.svg';
import PlusWhite from '../icons/plus-white.svg';
import Button from './Button';

export default function PropertyInfo({ location, handleFlyTo }) {
  const generalLabels = ['reg. num', 'district', 'municipality', 'quarter'];
  let currentTheme = localStorage.getItem('theme');
  return (
    <div className="propertyInfo">
      <div className="generalInfo">
        {generalLabels.map((item, i) => {
          let value;
          if (item === 'reg. num')
            value = location.generalInfo['regNumber'].toUpperCase();
          else value = location.generalInfo[item].toUpperCase();
          let label = item.toUpperCase();
          return (
            <>
              {i == 0 && (
                <Button
                  icon={currentTheme === 'light' ? History : HistoryWhite}
                  label="History"
                  className="btnHistory"
                />
              )}
              <label key={i} className="infoLabel">
                {label}
              </label>
              <div key={item} className="infoValue">
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
          icon={currentTheme === 'light' ? VectorSquare : VectorSquareWhite}
          properties={location.land}
          columns={['reg. num', 'area', 'plZone', '', '']}
          renderRow={(item) => (
            <>
              <div>{item.regNumber}</div>
              <div>{item.area}</div>
              <div>{item.plZone}</div>
              <div className="empty" />
              <div className="lastItem">
                <a className="details" onClick={() => handleFlyTo(item.coords)}>
                  DETAILS
                </a>
                <img
                  src={currentTheme === 'light' ? Pin : PinWhite}
                  alt="Pin"
                  className="pin"
                />
              </div>
            </>
          )}
        />

        <Collapsible
          buttonLabel="Units"
          icon={currentTheme === 'light' ? Building : BuildingWhite}
          properties={location.units}
          columns={['reg. num', 'type', 'extents', 'plZone', '']}
          renderRow={(item) => (
            <>
              <div>{item.regNumber}</div>
              <div>{item.type}</div>
              <div>{item.extents}</div>
              <div>{item.plZone}</div>
              <div className="lastItem">
                <a className="details" onClick={() => handleFlyTo(item.coords)}>
                  DETAILS
                </a>
                <img
                  src={currentTheme === 'light' ? Pin : PinWhite}
                  alt="Pin"
                  className="pin"
                />
              </div>
            </>
          )}
        />
      </div>

      <Button
        icon={currentTheme === 'light' ? Plus : PlusWhite}
        label="Add valuation"
        className="btnAdd"
      ></Button>
    </div>
  );
}
