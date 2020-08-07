import React from "react";
import { Contact } from "../state";
import { Button, Image, List } from 'semantic-ui-react'
import styles from './HomePage.module.css';
import logo from '../Assets/kontak-ku-logo.webp';
import LoadingComponent from "../common/LoadingComponent";

interface HomePageProps {
  contacts: Contact[];
  isFetchingContact: boolean;
  handleAddButtonClick: () => void;
}

const HomePage: React.FC<HomePageProps> = (props: HomePageProps) => {
  console.log('isFetchingContact: ', props.isFetchingContact);
  const renderContactList = () => {
    let contactList: JSX.Element[] = [];

    for (const contact of props.contacts) {
      contactList.push(
        <List.Item key={contact.id}>
          <Image avatar src={contact.photo}/>
          <List.Content>
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
      {
        props.isFetchingContact ?
          <LoadingComponent/>
          :
          <List selection divided verticalAlign='middle' className={styles.ContactList} size='big'>
            {renderContactList()}
          </List>
      }
      <Button circular color='violet' icon='add' className={styles.Float} onClick={props.handleAddButtonClick}/>
    </div>
  )
};

export default HomePage;