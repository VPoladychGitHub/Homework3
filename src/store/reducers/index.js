import {ACTION_LOAD,ACTION_ADD, ACTION_DELETE, ACTION_TOGGLE} from "../actions/tudu";

const initialState = {
    todos :[
        {id: 1, title: 'Task 1', isDone: false},
        {id: 2, title: 'Task 2', isDone: true},
        {id: 3, title: 'Task 3', isDone: false},
        {id: 4, title: 'Task 4', isDone: false},
    ],
    counts: 180,
    updatedAt: null
}

const rootReducer = (state = initialState, {type, payload}) => {
    console.log(payload);
    switch (type) {

        case ACTION_LOAD: return {...state, todos:[...payload] }
        case ACTION_ADD: return {...state, todos:[...state.todos , payload]}
        case ACTION_DELETE: return {...state, todos:state.todos.filter((todos) => todos.id !== payload)}
        case ACTION_TOGGLE: return {...state, todos: state.todos.map(
            (todo) => {
                // console.log(todo.id );
                if (todo.id === payload) {
                    todo.isDone = !todo.isDone;
                }
                return todo
            })}
        default: return state
    }
}




export default rootReducer