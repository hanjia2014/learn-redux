import { connect } from 'react-redux';
import { addUser } from '../actions/users';
import PersonDiv from '../Person';

export default connect<any, any, any>(null, {
    handleAdd: addUser
})(PersonDiv);