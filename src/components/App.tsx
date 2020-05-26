import React from "react";
import BoardList from "./BoardList";


class App extends React.Component<{}, {}> {
    render() {
        return (<div className="container">
            <BoardList />
        </div>)
    }
}

export default App;
