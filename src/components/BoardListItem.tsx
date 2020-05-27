import React from "react";
import { Board } from "../redux/types";
import {selectBoard} from "../redux/selection/actions";
import {connect} from "react-redux";

interface Props {
    board: Board;
    selectBoard: typeof selectBoard
}

class BoardListItem extends React.Component<Props, {}> {
    constructor(props: Props) {
        super(props);

        this.onButtonClick = this.onButtonClick.bind(this);
    }

    render() {
        const { board } = this.props;
        return <button className="list-group-item" onClick={this.onButtonClick}>{board.name}</button>;
    }

    onButtonClick(event: any) {
        event.preventDefault();
        console.log(this.props.board.id);
        this.props.selectBoard(this.props.board.id);
    }

    static defaultProps = {
        board: undefined,
        selectBoard: undefined
    }
}

const mapStateToProps = (state: any, ownProps: Props) => {
    return {
        board: ownProps.board
    }
};

const mapDispatchToProps = {selectBoard};

export default connect(mapStateToProps, mapDispatchToProps)(BoardListItem);
