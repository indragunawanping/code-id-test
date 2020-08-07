import React, { useEffect, useState } from "react";
import HomePage from "../Components/HomePage";
import { fetchContactList } from "../actionsContact";
import { connect, useDispatch } from "react-redux";
import { Contact, State } from "../state";
import AddContactModal from "../modals/AddContactModal";

const mapStateToProps = (state: State) => {
  return {
    contacts: state.data.contacts,
    isFetchingContact: state.session.isFetchingContact
  };
};

interface HomePageContainerProps {
  contacts: Contact[];
  isFetchingContact: boolean;
}

const HomePageContainer: React.FC<HomePageContainerProps> = (props: HomePageContainerProps) => {
  const dispatch = useDispatch();

  const contacts = props.contacts;
  const isFetchingContact = props.isFetchingContact;

  const [isAddContactModalOpen, setIsAddContactModalOpen] = useState(false);

  useEffect(() => {
    if (!isFetchingContact) {
      dispatch(fetchContactList());
    }

  }, [dispatch]);

  const handleAddButtonClick = () => {
    setIsAddContactModalOpen(true);
  };

  return (
    <React.Fragment>
      <HomePage contacts={contacts}
                isFetchingContact={isFetchingContact}
                handleAddButtonClick={handleAddButtonClick}
      />
      <AddContactModal isAddContactModalOpen={true}
                       firstName={''}
                       isStoringContact={false}
                       handleFirstNameChange={()=>{}}
                       handleCancelButtonClick={()=>{}}
                       handleAddContactButtonClick={()=>{}}/>
    </React.Fragment>
  )
};

export default connect(mapStateToProps)(HomePageContainer);
