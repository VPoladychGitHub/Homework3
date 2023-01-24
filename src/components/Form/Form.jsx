import React, {useState} from 'react';
import './Form.css';

function Form({onSubmitForm, onCanselForm}) {
    const [contact, setContact] = useState({name: '', username: '', phone: ''});

    const onChangeHandler = (e) => {
        const {value, name} = e.target
        setContact({
            ...contact,
            [name]: value
        })
    }

    const onSubmit = (e) => {
        e.preventDefault()
        onSubmitForm(contact)
      //  console.log(contact)
    }

   const  formCancel = (e) => {
        e.preventDefault();
       onCanselForm();
    };

    return (
        <form onSubmit={onSubmit} onCancel={formCancel}>
            <input type='text' value={contact.name} name='name' onChange={onChangeHandler}/>
            <input type='text' value={contact.username} name='username' onChange={onChangeHandler}/>
            <input type='text' value={contact.phone} name='phone' onChange={onChangeHandler}/>
            <button>Send</button>
            <button  onClick={formCancel}>Cancel❌</button>
        </form>
    );
}

export default Form;
