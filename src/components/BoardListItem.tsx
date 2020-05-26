import React from "react";
import { Board } from "../redux/types";

interface Props {
    board: Board;
}

class BoardListItem extends React.Component<Props, {}> {
    render() {
        const { board } = this.props;
        return <button className="list-group-item">{board.name}</button>;
    }
}

export default BoardListItem;
