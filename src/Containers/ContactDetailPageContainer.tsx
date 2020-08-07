import React, { useEffect } from 'react';
import ContactDetailPage from "../Components/ContactDetailPage";
import { connect, useDispatch } from "react-redux";
import { fetchContactDetail } from "../actionsContact";
import { RouteComponentProps, useHistory } from "react-router";
import { Contact, State } from "../state";

const mapStateToProps = (state: State) => {
  return {
    currentContact: state.control.currentContact
  }
};

export interface ContactDetailPageContainerProps extends RouteComponentProps<any> {
  currentContact: Contact;
}

const ContactDetailPageContainer: React.FC<ContactDetailPageContainerProps> = (props: ContactDetailPageContainerProps) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const urlParams = props.match.params;
  const contactIdParam = urlParams.contactId;

  const currentContact = props.currentContact;

  useEffect(() => {
    dispatch(fetchContactDetail(contactIdParam));
  }, [dispatch]);

  const handleButtonBackClick = () => {
    history.push('/code-id-test')
  };

  return (
    <ContactDetailPage currentContact={currentContact}
                       handleButtonBackClick={handleButtonBackClick}
    />
  )
};

export default connect(mapStateToProps)(ContactDetailPageContainer);
