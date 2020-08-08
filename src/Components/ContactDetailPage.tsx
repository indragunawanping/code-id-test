import React from 'react';
import { Contact } from "../state";
import { Button, Image } from "semantic-ui-react";
import styles from './ContactDetailPage.module.css';
import LoadingComponent from "../common/LoadingComponent";

interface ContactDetailPageProps {
  currentContact: Contact;
  isFetchingContactDetail: boolean;
  isDeletingContact: boolean;
  handleButtonBackClick: () => void;
  HandleButtonEditClick: () => void;
  handleButtonDeleteClick: () => void;
}

const ContactDetailPage: React.FC<ContactDetailPageProps> = (props: ContactDetailPageProps) => {
  return(
    <div className={styles.ContactContainer}>
      {
        props.isFetchingContactDetail ?
          <LoadingComponent/>
          :
          <div className={styles.ContactDetail}>
            <Image src={props.currentContact.photo} className={styles.Logo}/>
            <span className={styles.Name}>{props.currentContact.firstName.concat(' ').concat(props.currentContact.lastName)}</span>
            <span className={styles.Age}>{props.currentContact.age} years old</span>
            <div className={styles.Buttons}>
              <Button size='big' className={styles.Button} color="blue" circular icon='chevron left' onClick={props.handleButtonBackClick}/>
              <Button size='big' className={styles.Button} color="orange" circular icon='edit' onClick={props.HandleButtonEditClick}/>
              <Button loading={props.isDeletingContact} size='big' className={styles.Button} color="red" circular icon='trash' onClick={props.handleButtonDeleteClick}/>
            </div>
          </div>
      }
    </div>
  )
};

export default ContactDetailPage;
