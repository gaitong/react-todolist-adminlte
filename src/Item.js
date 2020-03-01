import React, { Component } from "react";

export default class Item extends Component {
  render() {
    const { item,handleEdit,handleDelete } = this.props;

    return (
      <li className= {item.completed?"list-group-item list-group-item-success text-capitalize d-flex justify-content-between":"list-group-item text-capitalize d-flex justify-content-between"}>
        <h5>{item.title}</h5>
        <div>
          <span onClick={handleEdit} className="mx-2">
            <i className="far fa-edit"></i>
          </span>
          <span onClick={handleDelete}>
            <i className="far fa-trash-alt"></i>
          </span>
        </div>
      </li>
    );
  }
}
