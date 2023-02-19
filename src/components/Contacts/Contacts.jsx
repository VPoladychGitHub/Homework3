import React, {useState} from 'react';
import List from '../List/List';
import Form from "../Form/Form";
import './Contacts.css';
import {connect} from "react-redux";
import {deleteUser} from "../../store/actions/users";


function Contacts(contacts, onDeleteItem) {
    const [viewForm, setViewForm] = useState(false);
    const head = [{id: 0, name: 'Name', username: 'Username', phone: 'Phone'},];

    const showFormCansel = () => {
        setViewForm(!viewForm);
    };

    const addContactItemNew = () => {
        setViewForm(!viewForm);
    }

    return (
        <>
            <List contacts={head.concat(contacts)} onDeleteItem={onDeleteItem}/>

            {viewForm ? <Form onCanselForm={showFormCansel} onSubmitForm={addContactItemNew}/> : null}

            {!viewForm ? <button
                onClick={showFormCansel}>{viewForm ? 'Hide' : 'Add new record'}</button> : null}
        </>
    );
}

function mapStateToProps({contacts}) {

    return {
        contacts: contacts.contacts,
    }
}

const mapDispatchToProps = {
    onDeleteItem: deleteUser
}

export default connect(mapStateToProps, mapDispatchToProps)(Contacts)
