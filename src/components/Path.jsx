import React from "react";

export class PathString extends React.Component {
  constructor(props) {
    super(props);
  }
  buildPath = () => {
    return this.refs.value.innerText.split("\n").join(":").slice(0, -1);
  };
  render() {
    return (
      <div className="path-value">
        <div ref="value" contentEditable className="path-edit">
          {this.props.val.split(":").map(e =>
            <div key={e} className="path-segment">
              {e}
            </div>
          )}
        </div>
        <div className="actions">
          <div
            onClick={e => this.props.onEdit(e, this.buildPath())}
            className="edit action"
          >
            edit
          </div>
          <div onClick={this.props.onDelete} className="delete action">
            rm
          </div>
        </div>
      </div>
    );
  }
}
