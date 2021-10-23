import { FC } from 'react';
import { CustomModal } from './styles';
import { CSSTransition } from 'react-transition-group';

export type ModalProps = {
  show: boolean;
  onHide?: () => void;
};

const Loading: FC<ModalProps> = ({ show, onHide, children }) => {
  return (
    <CSSTransition in={show} unmountOnExit timeout={{ enter: 0, exit: 500 }}>
      <CustomModal>
        <div className="lds-ellipsis">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </CustomModal>
    </CSSTransition>
  );
};

export default Loading;
