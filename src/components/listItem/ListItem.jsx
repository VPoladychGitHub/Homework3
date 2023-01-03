import React from 'react';
import './ListItem.css';

function ListItem({contact, onDeleteItem}) {

    const onDeleteContact = (e) => {
        e.stopPropagation()
        onDeleteItem(contact.id)
    }

    return (
        <div className="todo-item">
            <div> {contact.firstName}</div>

            <div> {contact.lastName}</div>

            <div> {contact.phone}</div>

            {(contact.id !== 1) ? <span className="delete-button" onClick={onDeleteContact}>X</span> :
                <span>     </span>}
        </div>
    );
}

export default ListItem;
