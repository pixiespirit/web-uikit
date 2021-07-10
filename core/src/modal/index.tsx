import React, { useRef } from 'react';
import s from './styles/modal.module.css';

export interface ModalProps {
  show?: boolean;
  setShow?: (show: boolean) => void;

  children: React.ReactNode;
}

export const Modal: React.FC<ModalProps> = (props) => {
  const modalRef = useRef(null);
  return (
    <React.Fragment>
      {props.show && (
        <div
          ref={modalRef}
          className={s.modal}
          onClick={(event) => {
            if (event.target === modalRef.current) {
              props.setShow?.(!props.show);
            }
          }}
        >
          <div className={s.body}>{props.children}</div>
        </div>
      )}
    </React.Fragment>
  );
};
