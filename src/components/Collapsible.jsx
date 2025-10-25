import { useState } from 'react';
import '../components/PropertyInfo.css';
import ChevronUp from '../icons/chevron-up.svg';
import ChevronDown from '../icons/chevron-down.svg';
import Cancel from '../icons/cancel.svg';

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

  return (
    <>
      <button
        type="button"
        className={`collapsible ${isOpen ? 'open' : ''}`}
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <img
          className={`icon left ${iconLeft ? '' : 'chevron'}`}
          src={iconLeft ? icon : isOpen ? ChevronUp : ChevronDown}
          alt=""
          width="16"
        />

        <span className="label">
          {buttonLabel} {iconLeft && ` (${properties.length})`}
        </span>

        <img
          className={`icon right ${iconLeft ? 'chevron' : ''}`}
          src={iconLeft ? (isOpen ? ChevronUp : ChevronDown) : icon}
          alt=""
          width="16"
        />
      </button>

      {isOpen && (
        <div className="content">
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
