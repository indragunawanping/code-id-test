import React, { FormEvent } from "react";
import { Button, Form, Modal } from "semantic-ui-react";
import styles from "./UpdateContactModal.module.css";

interface AddContactModalProps {
  updateContactModalOpen: boolean;
  updateActionType: string;
  firstName: string;
  lastName: string;
  age: number;
  photoUrl: string;
  errorMessage: string;
  isUpdatingContact: boolean;
  handleFirstNameChange: (event: FormEvent<HTMLInputElement>) => void;
  handleLastNameChange: (event: FormEvent<HTMLInputElement>) => void;
  handleAgeChange: (event: React.FormEvent<HTMLInputElement>) => void;
  handlePhotoUrlChange: (event: FormEvent<HTMLInputElement>) => void;
  handleCancelButtonClick: () => void;
  handleUpdateContactButtonClick: () => void;
}

const UpdateContactModal: React.FC<AddContactModalProps> = (props: AddContactModalProps) => {
  return (
    <Modal open={props.updateContactModalOpen} size="tiny">
      <Modal.Header>
        {props.updateActionType} New Contact
      </Modal.Header>
      <Modal.Content>
        <Form>
          <Form.Input fluid
                      label='First Name'
                      placeholder='First Name'
                      value={props.firstName}
                      onChange={props.handleFirstNameChange}
          />
          <Form.Input fluid
                      label='Last Name'
                      placeholder='Last Name'
                      value={props.lastName}
                      onChange={props.handleLastNameChange}
          />
          <Form.Input fluid
                      label='Age'
                      placeholder='Age'
                      type='number'
                      min='1'
                      value={props.age}
                      onChange={props.handleAgeChange}
          />
          <Form.Input fluid
                      label='Photo (URL)'
                      placeholder='Last Name'
                      value={props.photoUrl}
                      onChange={props.handlePhotoUrlChange}
          />
          <span className={styles.ErrorMessage}>{props.errorMessage}</span>
        </Form>

      </Modal.Content>
      <Modal.Actions>
        <Button color="red" onClick={props.handleCancelButtonClick} className={styles.CancelButton}>
          Cancel
        </Button>
        <Button color="violet" onClick={props.handleUpdateContactButtonClick} className={styles.AddButton}
                loading={props.isUpdatingContact}>
          {props.updateActionType}
        </Button>
      </Modal.Actions>
    </Modal>
  )
};

export default UpdateContactModal;
