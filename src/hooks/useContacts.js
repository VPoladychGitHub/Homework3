import {useEffect, useState} from "react";

export default function useContacts() {
    const [contacts, setContacts] = useState([])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(resp => resp.json())
            .then(data => setContacts(data))
    }, []);
//contacts  = [...{id: 0, name: 'Name', username: 'Username', phone: 'Phone'}];

    const deleteContactItem = (id) => {
        fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
            method: 'DELETE'
        })
        const newContacts = contacts.filter(contact => contact.id !== id)
        setContacts(newContacts)
    }

    const addContactItem = (contact) => {
     //   contact = {...contact, completed: false}
        fetch('https://jsonplaceholder.typicode.com/users', {
            method: 'POST',
            body: JSON.stringify(contact),
            headers: {'Content-Type': 'application/json'}
        })
            .then(resp => resp.json())
            .then(data => setContacts([...contacts, data]))
    }

   /* const toggleTodoItem = (id) => {
        let newItem = todos.find((todo) => todo.id === id)

        newItem = {...newItem, completed: !newItem.completed}

        const newTodos = todos.map(todo => todo.id === id ? newItem : todo)
        setTodos(newTodos)

        fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
            method: 'PUT',
            body: JSON.stringify(newItem),
            headers: {'Content-Type': 'application/json'}
        })
    }*/
    return {
        contacts, addContactItem, deleteContactItem//, toggleTodoItem
    }
}
