import './Button.css';

export default function Button({ icon, label, className }) {
  return (
    <button className={`${className}`}>
      <img src={icon} alt={label} className="icon" width={16} />
      {label}
    </button>
  );
}
