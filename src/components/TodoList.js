import React, { Component } from "react";
import TodoItem from "./TodoItem";

export default class TodoList extends Component {
  render() {
    return (
      <ul className="list-group my-5">
        <h3 className="text-capitalize text-center">todo List</h3>
        <TodoItem />
        <button
          type="button"
          className="btn btn-danger w-100 text-capitalize mt-5"
        >
          clear List
        </button>
      </ul>
    );
  }
}
