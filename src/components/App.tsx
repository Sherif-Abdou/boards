import React from "react";
import BoardList from "./BoardList";
import BoardDetails from "./BoardDetails";


class App extends React.Component<{}, {}> {
    render() {
        return (<div className="container row">
            <BoardList />
            <BoardDetails />
        </div>)
    }
}

export default App;
