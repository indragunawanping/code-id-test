import React from 'react';
import { Contact } from "../state";
import { Button, Image } from "semantic-ui-react";
import styles from './ContactDetailPage.module.css';

interface ContactDetailPageProps {
  currentContact: Contact;
  handleButtonBackClick: () => void;
}

const ContactDetailPage: React.FC<ContactDetailPageProps> = (props: ContactDetailPageProps) => {
  return(
    <div className={styles.ContactContainer}>
      <div className={styles.ContactDetail}>
        <Image src={props.currentContact.photo} className={styles.Logo}/>
        <span className={styles.Name}>{props.currentContact.firstName.concat(' ').concat(props.currentContact.lastName)}</span>
        <span className={styles.Age}>{props.currentContact.age} years old</span>
        <div className={styles.Buttons}>
          <Button className={styles.Button} color="blue" circular icon='chevron left' onClick={props.handleButtonBackClick}/>
          <Button className={styles.Button} color="orange" circular icon='edit'/>
          <Button className={styles.Button} color="red" circular icon='trash'/>
        </div>
      </div>
    </div>
  )
};

export default ContactDetailPage;
