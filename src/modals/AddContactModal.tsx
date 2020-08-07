import React, { FormEvent } from "react";
import { Button, Form, Modal } from "semantic-ui-react";
import styles from "./AddContactModal.module.css";

interface AddContactModalProps {
  isAddContactModalOpen: boolean;
  firstName: string;
  lastName: string;
  age: number;
  photoUrl: string;
  errorMessage: string;
  isStoringContact: boolean;
  handleFirstNameChange: (event: FormEvent<HTMLInputElement>) => void;
  handleLastNameChange: (event: FormEvent<HTMLInputElement>) => void;
  handleAgeChange: (event: React.FormEvent<HTMLInputElement>) => void;
  handlePhotoUrlChange: (event: FormEvent<HTMLInputElement>) => void;
  handleCancelButtonClick: () => void;
  handleAddContactButtonClick: () => void;
}

const AddContactModal: React.FC<AddContactModalProps> = (props: AddContactModalProps) => {
  return (
    <Modal open={props.isAddContactModalOpen} size="tiny">
      <Modal.Header>
        Add New Contact
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
                      min='0'
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
        <Button color="violet" onClick={props.handleAddContactButtonClick} className={styles.AddButton}
                loading={props.isStoringContact}>
          Add
        </Button>
      </Modal.Actions>
    </Modal>
  )
};

export default AddContactModal;
