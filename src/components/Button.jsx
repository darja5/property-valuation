import './Button.scss';

export default function Button({
  icon,
  label,
  className,
  handleClick,
  contentModal,
}) {
  return (
    <button
      onClick={() => handleClick(contentModal)}
      className={`${className}`}
    >
      {icon && <img src={icon} alt={label} className="icon" width={16} />}
      {label && label}
    </button>
  );
}
