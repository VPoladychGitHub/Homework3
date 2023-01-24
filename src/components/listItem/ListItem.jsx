import React from 'react';
import './ListItem.css';

function ListItem({contact, onDeleteItem}) {

    const onDeleteContact = (e) => {
        e.stopPropagation()
        onDeleteItem(contact.id)
    }

    return (
        <div className="todo-item">
            <div> {contact.name}</div>

            <div> {contact.username}</div>

            <div> {contact.phone}</div>

            {(contact.id !== 0) ? <span className="delete-button" onClick={onDeleteContact}>X</span> :
                <span>     </span>}
        </div>
    );
}

export default ListItem;
