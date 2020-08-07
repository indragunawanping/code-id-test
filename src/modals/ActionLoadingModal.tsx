import React from "react";
import { Modal } from "semantic-ui-react";
import LoadingComponent from "../common/LoadingComponent";

interface ActionLoadingModalProps {
  isOpen: boolean;
  message: string;
  additionalMessage?: string;
}


const ActionLoadingModal: React.FC<ActionLoadingModalProps> = (props: ActionLoadingModalProps)=> {
  return (
    <Modal open={props.isOpen} size="tiny" className="storing-modal">
      <Modal.Content className='storing-modal-content'>
        <LoadingComponent/>
        <span className='storing-modal-message'>{props.message}</span>
        {
          props.additionalMessage?
            <span className='storing-modal-additional-message'>{props.additionalMessage}</span>
            :
            null
        }
      </Modal.Content>
    </Modal>
  )
};

export default ActionLoadingModal;
