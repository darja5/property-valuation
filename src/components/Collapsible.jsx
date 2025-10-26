import { useState } from 'react';
import '../components/PropertyInfo.scss';
import ChevronUp from '../icons/chevron-up.svg';
import ChevronUpWhite from '../icons/chevron-up-white.svg';
import ChevronDown from '../icons/chevron-down.svg';
import ChevronDownWhite from '../icons/chevron-down-white.svg';

export default function Collapsible({
  buttonLabel,
  icon,
  iconLeft = true,
  properties,
  columns,
  totalValue,
  renderRow,
}) {
  const [isOpen, setIsOpen] = useState(false);

  let currentTheme = localStorage.getItem('theme');

  return (
    <>
      <button
        type="button"
        className={`collapsibleButton ${isOpen ? 'open' : ''}`}
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <img
          className={`icon left ${iconLeft ? '' : 'chevron'}`}
          src={
            iconLeft
              ? icon
              : isOpen
                ? currentTheme === 'light'
                  ? ChevronUp
                  : ChevronUpWhite
                : currentTheme === 'light'
                  ? ChevronDown
                  : ChevronDownWhite
          }
          alt=""
          width="16"
        />

        <span className="label">
          {buttonLabel} {iconLeft && ` (${properties.length})`}
        </span>

        <img
          className={`icon right ${iconLeft ? 'chevron' : ''}`}
          src={
            iconLeft
              ? isOpen
                ? currentTheme === 'light'
                  ? ChevronUp
                  : ChevronUpWhite
                : currentTheme === 'light'
                  ? ChevronDown
                  : ChevronDownWhite
              : icon
          }
          alt=""
          width="16"
        />
      </button>

      {isOpen && (
        <div className="collapsibleContent">
          <div className="contentInfo">
            {columns.map((label) => (
              <div key={label}>{label.toUpperCase()}</div>
            ))}

            {properties.map((item) => renderRow(item))}
          </div>
          {buttonLabel == 'Method' && (
            <div className="contentSummary">
              Property value estimation
              <div className="right">
                <strong>{totalValue.toLocaleString()} €</strong>
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
}
