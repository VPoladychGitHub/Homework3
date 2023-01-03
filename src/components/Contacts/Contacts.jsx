import React, {useState} from 'react';
import List from '../List/List';
import Form from "../Form/Form";
import './Contacts.css';

function Contacts(props) {
    const [contacts, setContacts] = useState([
        {
            id: 1, firstName: 'FirstName', lastName: 'LastName', phone: 'Phone',
        },
        {
            id: 2, firstName: 'first', lastName: 'last', phone: '11111111',
        },
    ])

    const [viewForm, setViewForm] = useState(false);

    const deleteTodoItem = (id) => {
        const newContacts = contacts.filter(contacts => contacts.id !== id)
        setContacts(newContacts)
    }

    const addTodoItem = (contact) => {
        contact = {...contact, id: Date.now(), isDone: false}
        console.log(contact);
        setContacts([...contacts, contact]);
        const view = !viewForm;
        setViewForm(view);
    }

    const showFormCansel = () => {
        const view = !viewForm;
        setViewForm(view);
    };

    return (
        <>
            <List contacts={contacts} onDeleteItem={deleteTodoItem}/>

            {viewForm ? <Form onCanselForm={showFormCansel} onSubmitForm={addTodoItem}/> : null}

            {!viewForm ? <button
                onClick={showFormCansel}>{viewForm ? 'Hide' : 'Add new record'}</button> : null}
        </>
    );
}

export default Contacts;
