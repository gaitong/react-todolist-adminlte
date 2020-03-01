import React, { Component } from "react";

export default class Input extends Component {
  render() {
    const { item, isEditItem, handleSubmit, handleChange } = this.props;

    return (
      <div>
        <div className="card card-header">
          <div className="text-center">
            <h1>Todo List Application</h1>
          </div>
        </div>
        <div className="card card-body">
          <form onSubmit={handleSubmit}>
            <h2>รายการที่ต้องทำ</h2>
            <div className="form-group">
              <input
                onChange={handleChange}
                type="text"
                className="form-control"
                value={item.title}
              ></input>
            </div>

            <input
              disabled={item?false:true}
              type="submit"
              className={isEditItem?"btn btn-warning":"btn btn-primary"}
              value={isEditItem?"แก้ไข":"บันทึก"}
            ></input>
          </form>
        </div>
      </div>
    );
  }
}
