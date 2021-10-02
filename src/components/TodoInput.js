import React, { Component } from "react";

export default class TodoInput extends Component {
  render() {
    return (
      <div className="card card-body my-3">
        <form>
          <div className="input-group">
            <div className="input-group-prepend">
              <div className="input-group-text h-100 bg-primary text-white">
                <i className="fas fa-book" />
              </div>
            </div>
            <input
              type="text"
              className="form-control text-capitalize"
              placeholder="add a todo item"
            />
          </div>
          <button type="submit" className="btn w-100 btn-primary mt-3">
            add item
          </button>
        </form>
      </div>
    );
  }
}
