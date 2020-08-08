import React from "react";
import { Contact } from "../state";
import { Button, Image, List } from 'semantic-ui-react'
import styles from './HomePage.module.css';
import logo from '../Assets/kontak-ku-logo.webp';
import LoadingComponent from "../common/LoadingComponent";

interface HomePageProps {
  contacts: Contact[];
  isFetchingContact: boolean;
  handleContactClick: (contactId: string | undefined) => void;
  handleAddButtonClick: () => void;
}

const HomePage: React.FC<HomePageProps> = (props: HomePageProps) => {
  const renderContactList = () => {
    let contactList: JSX.Element[] = [];

    for (const contact of props.contacts) {
      contactList.push(
        <List.Item onClick={() => props.handleContactClick(contact.id)} key={contact.id}>
          <Image avatar src={contact.photo}/>
          <List.Content className={styles.Name}>
            <List.Header>{contact.firstName} {contact.lastName}</List.Header>
          </List.Content>
        </List.Item>
      )
    }

    return contactList;
  };

  return (
    <div className={styles.ContactContainer}>
      <Image src={logo} className={styles.Logo}/>
      <List selection divided verticalAlign='middle' className={styles.ContactList} size='big'>
        {
          props.isFetchingContact ?
            <LoadingComponent/> :
            renderContactList()
        }
      </List>
      <Button size='big' circular color='violet' icon='add user' className={styles.Float} onClick={props.handleAddButtonClick}/>
    </div>
  )
};

export default HomePage;
