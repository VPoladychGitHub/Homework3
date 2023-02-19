import { ACTION_CREATE_USER, ACTION_DELETE_USER, ACTION_SET_USERS} from '../actions/users'

const initialState = {
    users: [],
}

const rootReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case ACTION_DELETE_USER:
            return {
                ...state,
                users: state.users.filter(user => user.id !== payload)
            }

        case ACTION_CREATE_USER:
            return {
                ...state,
                users: [
                    ...state.users,
                    payload
                ]
            }
        case ACTION_SET_USERS:
            return {users: payload}
        default: return state
    }
}

export default rootReducer