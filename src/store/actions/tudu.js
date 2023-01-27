// actions
export const ACTION_LOAD = 'ACTION_LOAD'
export const ACTION_ADD = 'ACTION_ADD'
export const ACTION_DELETE = 'ACTION_DELETE'
export const ACTION_TOGGLE = 'ACTION_TOGGLE'

export const load = (payload) => ({type: ACTION_LOAD, payload})
export const add = (payload) => ({type: ACTION_ADD, payload})
export const del = (payload) => ({type: ACTION_DELETE, payload})

export const toggle = (payload) => ({type: ACTION_TOGGLE, payload})
