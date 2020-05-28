import React from "react";
import {Board, Column} from "../redux/types";
import {connect} from "react-redux";

interface Props {
    columns: Column[]
}

class ColumnGroup extends React.Component<Props, {}> {
    render() {
        const headers = this.props.columns.map(column => (<th scope={"col"} key={column.id}>{column.name}</th>));

        const rows: JSX.Element[] = [];
        for (let i = 0; ; i++) {
            let isItem = false;
            const row = (
                <tr key={i}>
                    {this.props.columns.map(column => {
                        if (column.items.length > i) {
                            isItem = true;
                            return (
                                <td key={column.id}>{column.items[i]}</td>
                            )
                        } else {
                            return undefined;
                        }
                    })}
                </tr>
            );
            rows.push(row);
            if (!isItem) {
                break;
            }
        }

        return (
            <table className="table">
                <thead>
                <tr>
                    {headers}
                </tr>
                </thead>
                <tbody>
                    {rows}
                </tbody>
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
