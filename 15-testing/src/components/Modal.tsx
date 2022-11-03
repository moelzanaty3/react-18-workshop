import { useEffect, useRef, ReactElement } from 'react';
import { createPortal } from 'react-dom';

type Props = {
  children: ReactElement;
};

const Modal = ({ children }: Props) => {
  const elRef = useRef<HTMLDivElement | null>(null);

  if (!elRef.current) {
    elRef.current = document.createElement('div');
  }

  useEffect(() => {
    const modalRoot = document.getElementById('modal');
    if (modalRoot && elRef.current) {
      modalRoot.appendChild(elRef.current);
    }
    return () => {
      if (modalRoot && elRef.current) {
        modalRoot.removeChild(elRef.current);
      }
    };
  }, []);

  return createPortal(children, elRef.current);
};

export default Modal;
