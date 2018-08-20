import { User } from '../models/User';
import { ActionTypes, Action } from '../actions/users';

export interface State {
    users: User[];
}

export const initialState: State = {
    users: []
}

export function reducer(state: State = initialState, action: Action) {
    switch(action.type){
        case ActionTypes.ADD_USER : {
            const user = action.playload.user;
            return {
                ...state,
                users: [...state.users, user]
            }
        }

        default: return state;
    }
}