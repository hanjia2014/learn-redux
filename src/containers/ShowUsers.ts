import { connect } from 'react-redux';
import { State } from '../reducers';
import { getUsers } from '../selectors/users';
import UserList from '../UserList';

const mapStateToProps = (state: State) => ({
    users: getUsers(state)
})

export default connect<any, any, any>(mapStateToProps)(UserList);