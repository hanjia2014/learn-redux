// Remember to rename the file from app.ts to app.tsx
// and to keep it in the src/ directory.
import * as React from "react";
import * as ReactDOM from "react-dom";
import Users from './containers/Users'
import ShowUsers from './containers/ShowUsers'
import { Provider } from "react-redux";
import store from './store';

ReactDOM.render(
    <Provider store={store}>
        <div>
            <Users />
            <ShowUsers />
        </div>
    </Provider>,
    document.getElementById("root")
);