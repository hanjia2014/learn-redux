import { connect } from 'react-redux';
import { State } from '../reducers';
import { getUsers } from '../selectors/users';
import PersonDiv from '../Person';

const mapStateToProps = (state: State) => ({
    users: getUsers(state)
})

export default connect<any, any, any>(mapStateToProps)(PersonDiv);