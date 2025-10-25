import PropertyInfo from './PropertyInfo';
import { location } from '../data/mockdata';
import Collapsible from './Collapsible';
import './Sidebar.css';
import Cancel from '../icons/cancel.svg';
import Info from '../icons/info.svg';
import Edit from '../icons/edit.svg';
import Back from '../icons/back.svg';
import Journal from '../icons/journal.svg';
import Chat from '../icons/chat.svg';
import Check from '../icons/check.svg';
import Button from './Button';

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
      <div className="valuationToolbar">
        <div>
          Value
          <div className="right">
            <strong>{totalValue.toLocaleString()} €</strong>
            <img src={Edit} alt="Edit" className="edit" width={16} />
          </div>
        </div>
        <div className="actionBar">
          <Button icon={Back} label="Back" className="actionButton btnBack" />
          <Button
            icon={Journal}
            label="Explanation"
            className="actionButton btnExplantion"
          />
          <Button
            icon={Chat}
            label="Remarks"
            className="actionButton btnRemarks"
          />
          <Button
            icon={Check}
            label="Confirm"
            className="actionButton btnConfirm"
          />
        </div>
      </div>
    </div>
  );
}
