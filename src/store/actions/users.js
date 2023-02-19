export const ACTION_CREATE_USER = 'ACTION_CREATE_USER'

const USERS_URL = 'https://jsonplaceholder.typicode.com/users';

export const createUser = (title) => {
    return (dispatch) => {
        //console.log('hello from thunk')
        fetch(USERS_URL, {
            method: 'POST',
            body: JSON.stringify({title, isDone: false}),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(data => dispatch({
                type: ACTION_CREATE_USER,
                payload: data
            }))
    }
}

export const ACTION_SET_USERS = 'ACTION_SET_USERS'

export const fetchUsers = () => (dispatch) => {
    fetch(USERS_URL)
        .then(resp => resp.json())
        .then(data => dispatch({
            type: ACTION_SET_USERS,
            payload: data
        }))
}

export const ACTION_DELETE_USER = 'ACTION_DELETE_USER'

export const deleteUser = (id) => {
    return (dispatch) => {
        fetch(USERS_URL + id, {
            method: 'DELETE'
        })

        dispatch({
            type: ACTION_DELETE_USER,
            payload: id
        })
    }
}
