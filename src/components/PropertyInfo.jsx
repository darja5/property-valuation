import '../components/PropertyInfo.css';
import { useState } from 'react';
import Building from '../icons/buildings.svg';
import ChevronUp from '../icons/chevron-up.svg';
import ChevronDown from '../icons/chevron-down.svg';
import VectorSquare from '../icons/vector-square.svg';

export default function PropertyInfo({ location }) {
  const [isOpenLandInfo, setIsOpenLandInfo] = useState(false);
  const [isOpenUnitsInfo, setIsOpenUnitsInfo] = useState(false);

  const generalLabels = ['reg. num', 'district', 'municipality', 'quarter'];
  const landLabels = ['reg. num', 'area', 'plZone', ''];
  const unitLabels = ['reg. num', 'type', 'extents', 'plZone'];

  /*ali lahko to napišem samo kot stringe in jih po njih iščem JA :)
    const unitLabels = [
        { key: "regNumber", label: "Reg. number" },
        { key: "buildingType", label: "Type" },
        { key: "extents", label: "Extents" },
        { key: "planningZone", label: "plZone" },
        { key: "value", label: "Value" }
    ];*/

  return (
    <div className="property-info">
      <div className="general-info">
        {generalLabels.map((item) => {
          let value;
          if (item === 'reg. num')
            value = location.generalInfo['regNumber'].toUpperCase();
          else value = location.generalInfo[item].toUpperCase();
          let label = item.toUpperCase();
          return (
            <>
              <label className="info-label">{label}</label>
              <div className="info-value">{value}</div>
            </>
          );
        })}
      </div>

      <button
        type="button"
        class={`collapsible ${isOpenLandInfo && 'open'}`}
        onClick={() => setIsOpenLandInfo((open) => !open)}
      >
        <img
          className="icon"
          src={VectorSquare}
          alt="Vector square"
          style={{ width: '18px' }}
        />
        Land ({location.land.length})
        {isOpenLandInfo ? (
          <img className="chevron" src={ChevronUp} alt="Chevron up" />
        ) : (
          <img className="chevron" src={ChevronDown} alt="Chevron down" />
        )}
      </button>

      {isOpenLandInfo && (
        <div class="content">
          {landLabels.map((item) => (
            <div>{item.toUpperCase()}</div>
          ))}
          {location.land.map((item) => (
            <>
              <div>{item.regNumber}</div>
              <div>{item.area}</div>
              <div>{item.plZone}</div>
              <div className="empty" />
            </>
          ))}
        </div>
      )}

      <button
        type="button"
        class={`collapsible ${isOpenUnitsInfo && 'open'}`}
        onClick={() => setIsOpenUnitsInfo((open) => !open)}
      >
        <img className="icon" src={Building} alt="Building" />
        Units ({location.units.length})
        {isOpenUnitsInfo ? (
          <img className="chevron" src={ChevronUp} alt="Chevron up" />
        ) : (
          <img className="chevron" src={ChevronDown} alt="Chevron down" />
        )}
      </button>
      {isOpenUnitsInfo && (
        <div class="content">
          {unitLabels.map((item) => (
            <div>{item.toUpperCase()}</div>
          ))}
          {location.units.map((item) => (
            <>
              <div>{item.regNumber}</div>
              <div>{item.type}</div>
              <div>{item.extents}</div>
              <div>{item.plZone}</div>
            </>
          ))}
        </div>
      )}
    </div>
  );
}
