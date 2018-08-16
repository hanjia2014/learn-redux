import { User } from '../models/User';

export enum ActionTypes {
    ADD_USER = '[users] ADD_USER'
}

export interface AddUserAction { type: ActionTypes.ADD_USER, playload: { user: User } }

export function addUser(user: User): AddUserAction {
    return {
        type: ActionTypes.ADD_USER,
        playload: {
            user: user
        }
    }
}

export type Action = AddUserAction;