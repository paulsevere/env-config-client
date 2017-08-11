import React from "react";
import { PathString } from "./Path";
import { boundActions as actions } from "../store.js";

const onDelete = (props, event) => {
  console.log("onDelete called");
  actions.deleteVar(props.original);
};

const beginEdit = () => {};

export const Name = props =>
  <div className="name-row row">
    <div className="name ">
      {props.value}
    </div>
  </div>;

export class Value extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      hover: false,
      val: null
    };
  }
  onEdit = (e, str = this.refs.value.innerText) => {
    actions.updateVar(Object.assign({}, this.props.original, { value: str }));
  };
  getVal = str => this.setState({ val: str });
  render() {
    let { value } = this.props;
    let isPath = value.includes && value.includes(":");
    return (
      <div className="row value-row">
        <div className="value ">
          {(isPath &&
            <PathString
              onDelete={e => onDelete(this.props, e)}
              onEdit={this.onEdit}
              key={value}
              val={value}
              buttons={actions}
            />) ||
            <div ref="value" className="value-inner" contentEditable>
              {value}
            </div>}
        </div>
        {isPath ||
          <div className="actions">
            <div onClick={e => this.onEdit(e)} className="edit action">
              edit
            </div>
            <div
              onClick={e => onDelete(this.props, e)}
              className="delete action"
            >
              rm
            </div>
          </div>}
      </div>
    );
  }
}
