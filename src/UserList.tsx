import * as React from "react";
import { User } from './models/User';

interface Props {
    users: User[],
}
interface State { }

export default class UserList extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
    }

    render() {
        const { users } = this.props;
        return <div>
            <ul>
                {
                    users.map(user => (
                        <li
                            key={user.id}
                        >
                            {user.username}
                        </li>)
                    )
                }
            </ul>
        </div>;
    }
}