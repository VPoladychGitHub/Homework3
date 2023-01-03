import React from 'react';
import ListItem from '../ListItem/ListItem';
import './List.css';

function List({contacts, onDeleteItem}) {

    return (
        <div className="container">
            {contacts.map(contact => <ListItem key={contact.id} contact={contact} onDeleteItem={onDeleteItem}/>)}
        </div>
    );
}

export default List;