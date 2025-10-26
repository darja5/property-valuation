import './Button.scss';

export default function Button({ icon, label, className, handleClick }) {
  return (
    <button onClick={handleClick} className={`${className}`}>
      {icon && <img src={icon} alt={label} className="icon" width={16} />}
      {label}
    </button>
  );
}
