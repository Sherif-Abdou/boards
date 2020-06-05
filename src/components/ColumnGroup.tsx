import React from "react";
import { Board, Column } from "../redux/types";
import { connect } from "react-redux";
import ItemDetail from "./ItemDetail";
import AddColumn from "./AddColumn";
import AddItem from "./AddItem";

interface Props {
    columns: Column[];
}

class ColumnGroup extends React.Component<Props, {}> {
    render() {
        // The headers are the names of each column in the table
        const headers = this.props.columns.map((column, i) => (
            <th scope={"col"} key={column.id}>
                {column.name} <AddItem index={i} column_id={column.id} />
            </th>
        ));

        // Creates an array of rows representing all the items in the board's columns
        const rows: JSX.Element[] = [];
        for (let i = 0; ; i++) {
            let isItem = false;
            const row = (
                <tr key={i}>
                    {this.props.columns.map((column, col_index) => {
                        if (column.items.length > i) {
                            isItem = true;
                            return (
                                <td key={column.id}>
                                    <ItemDetail
                                        columnNumber={col_index}
                                        itemId={column.items[i]}
                                    />
                                </td>
                            );
                        } else {
                            return <td />;
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
            <div className="table-responsive">
                <table className="table">
                    <thead>
                        <tr>
                            {headers}
                            <th>
                                <AddColumn />
                            </th>
                        </tr>
                    </thead>
                    <tbody>{rows}</tbody>
                </table>
            </div>
        );
    }

    static defaultProps = {
        columns: [],
    };
}

const mapStateToProps = (state: any) => {
    const board: Board = state.boards.filter(
        (board: Board) => board.id === state.selection.selected_board
    )[0];
    const columns = state.columns.filter((column: Column) =>
        board.columns.includes(column.id)
    );
    return {
        columns,
    };
};

export default connect(mapStateToProps, null)(ColumnGroup);
