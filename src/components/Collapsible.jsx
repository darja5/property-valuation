import { useState } from 'react';
import '../components/PropertyInfo.css';
import ChevronUp from '../icons/chevron-up.svg';
import ChevronDown from '../icons/chevron-down.svg';

export default function Collapsible({
  buttonLabel,
  icon,
  properties,
  columns,
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
        {icon && <img className="icon" src={icon} alt="" width="18" />}
        {buttonLabel} ({properties.length})
        <img
          className="chevron"
          src={isOpen ? ChevronUp : ChevronDown}
          alt="Chevron"
        />
      </button>

      {isOpen && (
        <div className="content">
          {columns.map((label) => (
            <div key={label}>{label.toUpperCase()}</div>
          ))}

          {properties.map((item) => renderRow(item))}
        </div>
      )}
    </>
  );
}
