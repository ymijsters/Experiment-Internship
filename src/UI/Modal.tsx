import { useEffect, useRef, type ReactNode } from 'react';

type ModalProps = {
  onClose: () => void;
  children: ReactNode;
  show: boolean;
};

const Modal: React.FC<ModalProps> = ({ show, children, onClose }) => {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    console.log('Opening Modal');

    if (show) {
      dialog?.showModal();
    } else {
      dialog?.close();
    }

    // Add event listener to close the dialog when clicking outside
    const handleClickOutside = (event: MouseEvent) => {
      if (dialog && !dialog.contains(event.target as Node)) {
        onClose();
      }
    };

    dialog?.addEventListener('click', handleClickOutside);

    return () => {
      dialog?.removeEventListener('click', handleClickOutside);
    };
  }, [show]);

  return (
    <dialog className='dialog-modal' ref={dialogRef}>
      {children}
    </dialog>
  );
};

export default Modal;
