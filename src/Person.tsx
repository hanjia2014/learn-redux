import * as React from "react";
import { User } from "./models/User";
import { ClipLoader } from 'react-spinners';
import axios from 'axios'

export default class PersonDiv extends React.Component<any, { users: Array<User>, showSpinner: boolean }> {
    private Users: User[];
    private userView: Array<JSX.Element>;

    constructor(props: any) {
        super(props);
        this.state = { users: [], showSpinner: false};
    }

    componentDidMount() {
        
    }

    render() {
        return <div>
                <input type="button" onClick={this.getData} value="Get Users"></input>
                <div className="row">
                    {this.state.showSpinner &&
                        <ClipLoader
                            color={'#123abc'}
                            loading={this.state.users.length == undefined || this.state.users.length == 0}
                        />
                    }
                
                    {this.state.users.map((user, index) => {
                        return <div className="col-md-12" style={{ color: index % 2 == 0 ? 'red' : 'green', backgroundColor: index % 2 == 0 ? 'lightgrey' : 'yellow' }} key={user.id}>{user.email}</div>
                    })}
                </div>
            </div>;
    }

    getData = () => {
        this.setState({ showSpinner: true });
        axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then((response) => {
                this.setState({ users: response.data });    
                this.setState({ showSpinner: false });            
            });
    }
}