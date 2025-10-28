import './Modal.scss';
import Button from './Button';
import Cancel from '../icons/cancel.svg';
import { useState } from 'react';

export default function Modal({
  modalIsOpen,
  closeModal,
  modalContent = 'Test content',
  modalTitle,
}) {
  const [remark, setRemark] = useState('');
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      closeModal();
    }
  };
  if (!modalIsOpen) return null;
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
          {modalTitle === 'Remarks' ? (
            <textarea
              id="remarksArea"
              placeholder="Enter your remarks here..."
              value={remark}
              onChange={(e) => setRemark(e.target.value)}
              onKeyDown={handleKeyDown}
              autoFocus
            />
          ) : (
            <p>{modalContent}</p>
          )}
        </div>

        <div className="modalFooter">
          <Button handleClick={closeModal} label="Close" className={'right'} />
        </div>
      </div>
    </div>
  );
}
