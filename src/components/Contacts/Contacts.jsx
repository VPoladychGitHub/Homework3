import React, {useState} from 'react';
import List from '../List/List';
import Form from "../Form/Form";
import './Contacts.css';
import useContacts from "../../hooks/useContacts";

function Contacts(props) {
    const {contacts, deleteContactItem, addContactItem} = useContacts()
    const [viewForm, setViewForm] = useState(false);
    const head = [{id: 0, name: 'Name', username: 'Username', phone: 'Phone'},];

    const showFormCansel = () => {
        setViewForm(!viewForm);
    };

    const addContactItemNew = (contact) => {
        addContactItem(contact);
        setViewForm(!viewForm);
    }

    return (
        <>
            <List contacts={head.concat(contacts)} onDeleteItem={deleteContactItem}/>

            {viewForm ? <Form onCanselForm={showFormCansel} onSubmitForm={addContactItemNew}/> : null}

            {!viewForm ? <button
                onClick={showFormCansel}>{viewForm ? 'Hide' : 'Add new record'}</button> : null}
        </>
    );
}

export default Contacts;
