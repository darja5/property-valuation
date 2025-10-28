import PropertyInfo from './PropertyInfo';
import { location } from '../data/mockdata';
import { useState } from 'react';
import Collapsible from './Collapsible';
import Button from './Button';
import './Sidebar.scss';
import Cancel from '../icons/cancel.svg';
import CancelWhite from '../icons/cancel-white.svg';
import Info from '../icons/info.svg';
import InfoWhite from '../icons/info-white.svg';
import Edit from '../icons/edit.svg';
import EditWhite from '../icons/edit-white.svg';
import Back from '../icons/back.svg';
import BackWhite from '../icons/back-white.svg';
import Journal from '../icons/journal.svg';
import Chat from '../icons/chat.svg';
import Check from '../icons/check.svg';

export default function Sidebar({ handleFlyTo, openModal }) {
  let currentTheme = localStorage.getItem('theme');
  const allProperties = [...location.land, ...location.units];
  const totalValue = allProperties.reduce(
    (sum, item) => sum + Number(item.value),
    0
  );
  const [isEditing, setIsEditing] = useState(false);
  const [velueMethod, setValueMethod] = useState(1);
  const [inputValue, setInputValue] = useState(totalValue);
  const [showValuation, setShowValuation] = useState(false);

  const handleAddValuationClick = () => {
    setShowValuation(true);
    setValueMethod(0.89);
    setInputValue(totalValue * 0.89);
  };

  const handleOnCancelClick = (e) => {
    e.stopPropagation();
    setShowValuation(false);
    setInputValue(totalValue);
  };

  const handleEditClick = (e) => {
    e.preventDefault();
    setIsEditing(!isEditing);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      setIsEditing(false);
      setInputValue(Number(e.target.value));
    }
  };

  const handleBlur = (e) => {
    setInputValue(Number(e.target.value));
    setIsEditing(false);
  };

  return (
    <div className="sidebar">
      <div className="propertyData">
        <PropertyInfo
          location={location}
          handleFlyTo={handleFlyTo}
          openModal={openModal}
          onAddValuationClick={handleAddValuationClick}
        />
        <div
          className="estimates"
          style={showValuation ? { display: 'block' } : { display: 'none' }}
        >
          <Collapsible
            buttonLabel="Method"
            icon={currentTheme === 'light' ? Cancel : CancelWhite}
            handleOnCancelClick={handleOnCancelClick}
            properties={allProperties}
            columns={['reg. num', 'property', 'plZone', '', 'value']}
            iconLeft={false}
            velueMethod={velueMethod}
            totalValue={totalValue}
            renderRow={(item) => (
              <>
                <div>{item.regNumber}</div>
                <div>{item.property}</div>
                <div>{item.plZone}</div>
                <div className="empty" />
                <div className="last-item">
                  {item.value.toLocaleString()} €
                  <img
                    title="Estimated market value based on latest data"
                    src={currentTheme === 'light' ? Info : InfoWhite}
                    alt="Info"
                    className="info"
                    width={16}
                  />
                </div>
              </>
            )}
          >
            <label className="btnMethod">MS2024-05</label>
          </Collapsible>
        </div>
      </div>

      <div className="valuationToolbar">
        <div>
          <label for={'totalValue'}>Value</label>
          <div className="right">
            {isEditing ? (
              <input
                id="totalValueInput"
                autoFocus
                type="number"
                value={inputValue}
                onChange={(e) => setInputValue(Number(e.target.value))}
                onKeyDown={handleKeyDown}
                onBlur={handleBlur}
              />
            ) : (
              <strong>{inputValue.toLocaleString()} €</strong>
            )}
            <img
              src={currentTheme === 'light' ? Edit : EditWhite}
              alt="Edit"
              className="edit"
              width={16}
              onMouseDown={handleEditClick}
            />
          </div>
        </div>
        <div className="actionBar">
          <Button
            icon={currentTheme === 'light' ? Back : BackWhite}
            label="Back"
            className="actionButton btnBack"
            handleClick={() =>
              openModal(
                'Back',
                <>
                  <p>
                    Clicking "Back" will return you to the previous screen or
                    step. Any unsaved changes on this page will be lost, so make
                    sure to confirm them before going back.
                  </p>
                </>
              )
            }
          />
          <Button
            icon={Journal}
            modal={true}
            label="Explanation"
            className="actionButton btnExplantion"
            handleClick={() =>
              openModal(
                'Explanation',
                <>
                  <p>
                    This valuation is based on the latest available market data
                    and comparable property transactions in the area.
                  </p>
                  <p>
                    Adjustments have been applied for location, land size, and
                    building condition.
                  </p>
                </>
              )
            }
          />
          <Button
            icon={Chat}
            modal={true}
            label="Remarks"
            className="actionButton btnRemarks"
            handleClick={() =>
              openModal(
                'Remarks',
                'Leave additional notes or comments about this valuation.'
              )
            }
          />
          <Button
            modal={true}
            icon={Check}
            label="Confirm"
            className="actionButton btnConfirm"
            handleClick={() =>
              openModal(
                'Confirm',
                'Are you sure you want to confirm this valuation? This action cannot be undone.'
              )
            }
          />
        </div>
      </div>
    </div>
  );
}
