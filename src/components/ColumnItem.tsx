import React from "react";
import {Column} from "../redux/types";
import {connect} from "react-redux";
import styles from "../css/ColumnItem.module.css";

interface Props {
    column: Column,
}

class ColumnItem extends React.Component<Props, any> {
    render() {
        return (
            <div className={styles.columnItem}>
                <h2>{this.props.column.name}</h2>
            </div>
        )
    }
}

const mapStateToProps = (state: any, ownProps: any) => {
    return {
        ...ownProps,
    }
};

export default connect(mapStateToProps, null)(ColumnItem);
