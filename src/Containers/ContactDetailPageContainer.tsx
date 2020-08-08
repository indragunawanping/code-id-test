import React, { FormEvent, useCallback, useEffect, useState } from 'react';
import ContactDetailPage from "../Components/ContactDetailPage";
import { connect, useDispatch } from "react-redux";
import { deleteContact, editContact, fetchContactDetail } from "../actionsContact";
import { RouteComponentProps, useHistory } from "react-router";
import { Contact, State } from "../state";
import UpdateContactModal from "../modals/UpdateContactModal";

const mapStateToProps = (state: State) => {
  return {
    currentContact: state.control.currentContact,
    isFetchingContactDetail: state.session.isFetchingContactDetail,
    isUpdatingContact: state.session.isUpdatingContact,
    isDeletingContact: state.session.isDeletingContact
  }
};

export interface ContactDetailPageContainerProps extends RouteComponentProps<any> {
  currentContact: Contact;
  isFetchingContactDetail: boolean;
  isUpdatingContact: boolean;
  isDeletingContact: boolean;
}

const ContactDetailPageContainer: React.FC<ContactDetailPageContainerProps> = (props: ContactDetailPageContainerProps) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const urlParams = props.match.params;
  const contactIdParam = urlParams.contactId;

  const currentContact = props.currentContact;
  const isFetchingContactDetail = props.isFetchingContactDetail;
  const isUpdatingContact = props.isUpdatingContact;
  const isDeletingContact = props.isDeletingContact;

  const [isEditContactModalOpen, setIsEditContactModalOpen] = useState(false);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [age, setAge] = useState(1);
  const [photoUrl, setPhotoUrl] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    dispatch(fetchContactDetail(contactIdParam));
  }, [dispatch, contactIdParam]);

  useEffect(() => {
    setFirstName(currentContact.firstName);
    setLastName(currentContact.lastName);
    setAge(currentContact.age);
    setPhotoUrl(currentContact.photo);
  }, [currentContact]);

  const handleButtonBackClick = () => {
    history.push('/')
  };

  const HandleButtonEditClick = () => {
    setIsEditContactModalOpen(true)
  };

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

  const handleEditContactButtonClick = useCallback(
    () => {
      if (firstName.length < 3) {
        setErrorMessage('First Name length must be at least 3 characters long.');
      } else if (lastName.length < 3) {
        setErrorMessage('Last Name length must be at least 3 characters long.');
      } else if (!(/^(?!-)(?!.*-)[A-Za-z0-9-]+(?<!-)$/.test(firstName))) {
        setErrorMessage('First Name must only contain alpha-numeric characters.');
      } else if (!(/^(?!-)(?!.*-)[A-Za-z0-9-]+(?<!-)$/.test(lastName))) {
        setErrorMessage('Last Name must only contain alpha-numeric characters.');
      } else if (age < 1 || age > 100) {
        setErrorMessage('Age must be at least 1 and not larger than 100');
      } else if (photoUrl.length === 0) {
        setErrorMessage('Photo (URL) is not allowed to be empty.');
      } else {
        dispatch(editContact(contactIdParam, firstName, lastName, age, photoUrl));
        setIsEditContactModalOpen(false);
      }
    },
    [dispatch, firstName, lastName, age, photoUrl, contactIdParam]
  );

  const handleCancelButtonClick = () => {
    setIsEditContactModalOpen(false);
  };

  const succesfulRedirection= () => {
    history.push('/');
  };

  const handleButtonDeleteClick = useCallback(
    () => {
      dispatch(deleteContact(contactIdParam, succesfulRedirection));
    }, [dispatch, contactIdParam, history]
  );

  return (
    <React.Fragment>
      <ContactDetailPage currentContact={currentContact}
                         isFetchingContactDetail={isFetchingContactDetail}
                         isDeletingContact={isDeletingContact}
                         handleButtonBackClick={handleButtonBackClick}
                         HandleButtonEditClick={HandleButtonEditClick}
                         handleButtonDeleteClick={handleButtonDeleteClick}
      />
      <UpdateContactModal updateContactModalOpen={isEditContactModalOpen}
                          updateActionType={'Edit'}
                          firstName={firstName}
                          lastName={lastName}
                          age={age}
                          photoUrl={photoUrl}
                          errorMessage={errorMessage}
                          isUpdatingContact={isUpdatingContact}
                          handleFirstNameChange={handleFirstNameChange}
                          handleLastNameChange={handleLastNameChange}
                          handleAgeChange={handleAgeChange}
                          handlePhotoUrlChange={handlePhotoUrlChange}
                          handleCancelButtonClick={handleCancelButtonClick}
                          handleUpdateContactButtonClick={handleEditContactButtonClick}/>
      )
    </React.Fragment>
  )
};

export default connect(mapStateToProps)(ContactDetailPageContainer);
