import React, { FormEvent, useEffect, useState, useCallback } from "react";
import { useHistory } from 'react-router';
import HomePage from "../Components/HomePage";
import { fetchContactList, storingContact } from "../actionsContact";
import { connect, useDispatch } from "react-redux";
import { Contact, State } from "../state";
import UpdateContactModal from "../modals/UpdateContactModal";

const mapStateToProps = (state: State) => {
  return {
    contacts: state.data.contacts,
    isFetchingContact: state.session.isFetchingContact,
    isStoringContact: state.session.isStoringContact
  };
};

interface HomePageContainerProps {
  contacts: Contact[];
  isFetchingContact: boolean;
  isStoringContact: boolean;
}

const HomePageContainer: React.FC<HomePageContainerProps> = (props: HomePageContainerProps) => {
  const dispatch = useDispatch();

  const contacts = props.contacts;
  const isFetchingContact = props.isFetchingContact;
  const isStoringContact = props.isStoringContact;

  const [isAddContactModalOpen, setIsAddContactModalOpen] = useState(false);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [age, setAge] = useState(1);
  const [photoUrl, setPhotoUrl] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    dispatch(fetchContactList());
  }, [dispatch]);

  const handleFirstNameChange = (event: FormEvent<HTMLInputElement>) => {
    setFirstName(event.currentTarget.value);
  };

  const handleLastNameChange = (event: FormEvent<HTMLInputElement>) => {
    setLastName(event.currentTarget.value);
  };

  const handleAgeChange = (event: FormEvent<HTMLInputElement>) => {
    setAge(Number(event.currentTarget.value));
  };

  const handlePhotoUrlChange = (event: FormEvent<HTMLInputElement>) => {
    setPhotoUrl(event.currentTarget.value);
  };

  const history = useHistory();

  const handleContactClick = (contactId: string | undefined) => {
    if (contactId) {
      history.push("/".concat(contactId));
    }
  };

  const handleAddButtonClick = () => {
    setIsAddContactModalOpen(true);
  };

  const handleAddContactButtonClick = useCallback(
    () => {
      if (firstName.length < 3) {
        setErrorMessage('First Name length must be at least 3 characters long.');
      } else if (lastName.length < 3) {
        setErrorMessage('Last Name length must be at least 3 characters long.');
      } else if (!(/^(?!-)(?!.*-)[A-Za-z0-9-]+(?<!-)$/.test(firstName))) {
        setErrorMessage('First Name must only contain alpha-numeric characters.');
      } else if (!(/^(?!-)(?!.*-)[A-Za-z0-9-]+(?<!-)$/.test(lastName))) {
        setErrorMessage('Last Name must only contain alpha-numeric characters.');
      } else if (age < 1 || age > 200) {
        setErrorMessage('Age must be at least 1 and not larger than 200.');
      } else if (photoUrl.length === 0) {
        setErrorMessage('Photo (URL) is not allowed to be empty.');
      } else {
        dispatch(storingContact(firstName, lastName, age, photoUrl));
        setIsAddContactModalOpen(false);
      }
    },
    [dispatch, firstName, lastName, age, photoUrl]
  );

  const handleCancelButtonClick = () => {
    setIsAddContactModalOpen(false)
  };

  return (
    <React.Fragment>
      <HomePage contacts={contacts}
                isFetchingContact={isFetchingContact}
                handleContactClick={handleContactClick}
                handleAddButtonClick={handleAddButtonClick}
      />
      <UpdateContactModal updateContactModalOpen={isAddContactModalOpen}
                          updateActionType={'Add'}
                          firstName={firstName}
                          lastName={lastName}
                          age={age}
                          photoUrl={photoUrl}
                          errorMessage={errorMessage}
                          isUpdatingContact={isStoringContact}
                          handleFirstNameChange={handleFirstNameChange}
                          handleLastNameChange={handleLastNameChange}
                          handleAgeChange={handleAgeChange}
                          handlePhotoUrlChange={handlePhotoUrlChange}
                          handleCancelButtonClick={handleCancelButtonClick}
                          handleUpdateContactButtonClick={handleAddContactButtonClick}/>
    </React.Fragment>
  )
};

export default connect(mapStateToProps)(HomePageContainer);
