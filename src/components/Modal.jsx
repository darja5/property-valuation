import './Modal.scss';
import Button from './Button';
import Cancel from '../icons/cancel.svg';

export default function Modal({
  modalIsOpen,
  closeModal,
  modalContent = 'Test content',
  modalTitle,
}) {
  if (!modalIsOpen) return null;
  console.log('Modal content:', modalContent);
  return (
    <div className="modalOverlay">
      <div className="modalContent">
        <div className="modalHeader">
          <span>{modalTitle}</span>
          <Button
            className="right modalCancel"
            handleClick={closeModal}
            icon={Cancel}
          />
        </div>

        <div className="modalBody">
          <p>{modalContent}</p>
        </div>

        <div className="modalFooter">
          <Button handleClick={closeModal} label="Close" className={'right'} />
        </div>
      </div>
    </div>
  );
}
