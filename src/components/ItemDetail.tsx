import React from "react";
import {connect} from "react-redux";
import {Column, Item} from "../redux/types";
import {linkItem, unLinkItem} from "../redux/columns/actions";
import ItemEdit from "./ItemEdit";

interface Props {
    item: Item
    columnNumber: number
    totalColumns: number
    linkItem: typeof linkItem
    unLinkItem: typeof unLinkItem
    itemId: string,
    columns: Column[]
}


class ItemDetail extends React.Component<Props, {}> {
    constructor(props: Props) {
        super(props);
        this.moveNext = this.moveNext.bind(this);
        this.movePrevious = this.movePrevious.bind(this);
    }

    render() {
        const back = "<";
        return (<div className="text-center">
            {this.props.item !== null &&
            <div className="card container">
                <div className="card-body">
                    <div className="row">
                        {this.props.columnNumber !== 0 &&
                        <button className="btn btn-secondary col-sm-2" onClick={this.movePrevious}>{back}</button>
                        }
                        <h5 className="card-title col-8">{this.props.item.title}</h5>
                        {this.props.columnNumber !== this.props.totalColumns &&
                        <button className="btn btn-secondary col-sm-2" onClick={this.moveNext}>></button>
                        }
                    </div>
                    <p className="card-text">{this.props.item.content}</p>
                    <ItemEdit item={this.props.item} />
                </div>
            </div>
            }
        </div>)
    }

    moveNext(e: any) {
        e.preventDefault();
        console.log("Column" + this.props.columns[this.props.columnNumber]);
        this.props.unLinkItem(this.props.item.id, this.props.columns[this.props.columnNumber].id);
        this.props.linkItem(this.props.item.id, this.props.columns[this.props.columnNumber+1].id);
    }
    movePrevious(e: any) {
        e.preventDefault();
        this.props.unLinkItem(this.props.item.id, this.props.columns[this.props.columnNumber].id);
        this.props.linkItem(this.props.item.id, this.props.columns[this.props.columnNumber-1].id);
    }
}

const mapStateToProps = (state: any, ownProps: any) => {
    let item = state.items.filter((i: Item) => i.id === ownProps.itemId);
    if (item.length === 0) {
        item = null;
    } else {
        item = item[0];
    }
    return {
        item,
        totalColumns: state.columns.length-1,
        columns: state.columns
    }
};

const mapDispatchToProps = {linkItem, unLinkItem};

export default connect(mapStateToProps, mapDispatchToProps)(ItemDetail);