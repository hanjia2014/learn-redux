import {State} from '../reducers';
import {createSelector} from 'reselect'

const getUsersState = ((state: State) => state.users);

export const getUsers = createSelector([getUsersState], s => s.users );