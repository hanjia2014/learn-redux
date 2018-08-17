import { combineReducers } from 'redux'
import * as fromUsers from './users'

export interface State {
    users: fromUsers.State;
}

export const initialState: State = {
    users: fromUsers.initialState
}

export const reducer = combineReducers<State>({
    users: fromUsers.reducer
})