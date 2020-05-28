import React from "react";
import {Board, Column} from "../redux/types";
import { connect } from "react-redux";
import ColumnItem from "./ColumnItem";

interface Props {
    columns: Column[]
}

class ColumnGroup extends React.Component<Props, {}> {
    render() {
        const headers = this.props.columns.map(column => (<th scope={"col"}>{column.name}</th>));
        return (
            <table className="table">
                <thead>
                    <tr>
                        {headers}
                    </tr>
                </thead>
            </table>
        )
    }

    static defaultProps = {
        columns: []
    }
}

const mapStateToProps = (state: any) => {
    const board: Board = state.boards.filter((board: Board) => board.id === state.selection.selected_board)[0];
    const columns = state.columns.filter((column: Column) => board.columns.includes(column.id));
    return {
        columns
    }
};

export default connect(mapStateToProps, null)(ColumnGroup);
