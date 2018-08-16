// Remember to rename the file from app.ts to app.tsx
// and to keep it in the src/ directory.
import * as React from "react";
import * as ReactDOM from "react-dom";
import { PersonDiv } from "./Person";
import { Provider } from "react-redux";

ReactDOM.render(
    <Provider store={null}>
        <PersonDiv>
        </PersonDiv>
    </Provider>,
    document.getElementById("root")
);