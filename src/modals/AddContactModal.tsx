import React from "react";
import { Button, Form, Icon, Modal } from "semantic-ui-react";
import styles from "./AddContactModal.module.css";

interface AddContactModalProps {
  isAddContactModalOpen: boolean;
  isStoringContact: boolean;
  firstName: string;
  handleFirstNameChange: () => void;
  handleCancelButtonClick: () => void;
  handleAddContactButtonClick: () => void;
}

const AddContactModal: React.FC<AddContactModalProps> = (props: AddContactModalProps) => {
  return(
    <Modal open={props.isAddContactModalOpen} size="tiny">
      <Modal.Header>
        Add New Contact
      </Modal.Header>

      <Modal.Content>
        <Form>
          <Form.Input fluid
                      label='First Name'
                      placeholder=''
                      value={props.firstName}
                      onChange={props.handleFirstNameChange}
          />
        </Form>
      </Modal.Content>
      <Modal.Actions>
        <Button color="red" onClick={props.handleCancelButtonClick} className={styles.CancelButton}>
          Cancel
        </Button>
        <Button color="violet" onClick={props.handleAddContactButtonClick} className={styles.AddButton}
                loading={props.isStoringContact}>
          Add
        </Button>
      </Modal.Actions>
    </Modal>
  )
};

export default AddContactModal;
