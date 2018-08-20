import * as React from "react";
import { User } from './models/User';
import { ClipLoader } from 'react-spinners';
import axios from 'axios'

interface Props {
    handleAdd: (value: User) => void
}
interface State { showSpinner: boolean }

export default class PersonDiv extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = { showSpinner: false};
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
                        loading={this.state.showSpinner}
                    />
                }
            </div>
        </div>;
    }

    getData = () => {
        this.setState({ showSpinner: true });
        axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then((response) => { 
                var users = response.data;
                users.map((user: any) => {
                    this.props.handleAdd(user);
                });
                this.setState({ showSpinner: false });
            });
    }
}