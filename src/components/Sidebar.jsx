import PropertyInfo from './PropertyInfo';
import { location } from '../data/mockdata';
import Collapsible from './Collapsible';
import './Sidebar.css';
import Info from '../icons/info.svg';
import ChevronDown from '../icons/chevron-down.svg';

export default function Sidebar() {
  return (
    <div className="sidebar">
      <PropertyInfo location={location} onSelectLocation />
      <div className="estimates">
        <Collapsible
          buttonLabel="Method"
          icon={ChevronDown}
          properties={location.land}
          columns={['reg. num', 'property', 'plZone', '', 'value']}
          renderRow={(item) => (
            <>
              <div>{item.regNumber}</div>
              <div>{item.property}</div>
              <div>{item.plZone}</div>
              <div className="empty" />
              <div className="last-item">
                {item.value}
                <img src={Info} alt="Info" className="icon" width={16} />
              </div>
            </>
          )}
        />
      </div>
      PropertyValue
      <br />
      ActionButtons
      <br />
    </div>
  );
}
