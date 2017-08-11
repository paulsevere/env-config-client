import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import EnvActions from "../actions";
import Table from "react-table";
import "react-table/react-table.css";

import { Name, Value } from "./Pair";

const config = {
  showPagination: false
};
const columns = maxWidth => [
  {
    Header: "variable",
    accessor: "name",
    Cell: props => <Name {...props} />,
    maxWidth
  },
  {
    Header: "value",
    accessor: "value",
    // getProps: (state, rowInfo, column) => ({ pair: column }),
    Cell: props => <Value {...props} />
  }
];

const Env = props => {
  let maxWidth =
    props.env.reduce(
      (curr, e) => (e.name.length > curr ? e.name.length : curr),
      0
    ) * 10;
  let { deleteVar } = props;
  let data = props.env;
  return <Table {...config} columns={columns(maxWidth)} data={data} />;
};
const mapStateToProps = (state, props) => ({ ...state, ...props });
const mapDispatchToProps = dispatch => ({
  ...bindActionCreators(EnvActions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Env);
