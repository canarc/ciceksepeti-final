import { FC } from 'react';
import { CustomModal, ModalContent } from './styles';
import { CSSTransition } from 'react-transition-group';
import { CSSProperties } from 'styled-components';

export type ModalProps = {
  show: boolean;
  onHide?: () => void;
  style?: CSSProperties;
};

const Modal: FC<ModalProps> = ({ show, onHide, children, style }) => {
  return (
    <CSSTransition in={show} unmountOnExit timeout={{ enter: 0, exit: 500 }}>
      <CustomModal style={style} onClick={onHide}>
        <ModalContent>{children}</ModalContent>
      </CustomModal>
    </CSSTransition>
  );
};

export default Modal;
