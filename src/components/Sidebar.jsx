import PropertyInfo from './PropertyInfo';
import { location } from '../data/mockdata';
import Collapsible from './Collapsible';
import './Sidebar.css';
import Cancel from '../icons/cancel.svg';
import Info from '../icons/info.svg';

export default function Sidebar({ handleFlyTo }) {
  const allProperties = [...location.land, ...location.units];
  const totalValue = allProperties.reduce(
    (sum, item) => sum + Number(item.value),
    0
  );
  return (
    <div className="sidebar">
      <PropertyInfo location={location} handleFlyTo={handleFlyTo} />
      <div className="estimates">
        <Collapsible
          buttonLabel="Method"
          icon={Cancel}
          properties={allProperties}
          columns={['reg. num', 'property', 'plZone', '', 'value']}
          iconLeft={false}
          totalValue={totalValue}
          renderRow={(item) => (
            <>
              <div>{item.regNumber}</div>
              <div>{item.property}</div>
              <div>{item.plZone}</div>
              <div className="empty" />
              <div className="last-item">
                {item.value.toLocaleString()} €
                <img src={Info} alt="Info" className="info" width={16} />
              </div>
            </>
          )}
        />
      </div>
      <div>{totalValue.toLocaleString()} € </div>
      <br />
      ActionButtons
      <br />
    </div>
  );
}
