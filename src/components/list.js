import React, { Component } from "react";
import Form from "./form";
import { connect } from "react-redux";
import * as actions from "../actions/actions";
import { bindActionCreators } from "redux";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style/liststyle.css";

class List extends Component {
  handleEdit = (index) => {
    this.props.updateDataIndex(index);
  };

  handleDelete = (index) => {
    this.props.deleteData(index);
  };

  render() {
    return (
      <div>
        <Form />
        <div className="container" id="list">
          <div className="row">
            <div className="col">
              <h2 id="listtitle">User's Lists</h2>
              <div class="tbl-header">
                <table cellpadding="0" cellspacing="0" border="0">
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Gender</th>
                      <th>Mobile Phone</th>
                      <th>Nationality</th>
                      <th></th>
                      <th></th>
                    </tr>
                  </thead>
                </table>
              </div>
              <div class="tbl-content">
                <table cellpadding="0" cellspacing="0" border="0">
                  <tbody>
                    {this.props.list.map((item, index) => {
                      return (
                        <tr key={index}>
                          <td>
                            {item.fName}&nbsp;{item.lName}
                          </td>
                          <td id="gender">{item.gender}</td>
                          <td>{item.phone}</td>
                          <td id="nationfield">{item.nationality}</td>
                          <td id="editbtn">
                            <button className="btn btn-outline-success btn-sm" onClick={() => this.handleEdit(index)}>
                              Edit
                            </button>
                          </td>
                          <td id="deletebtn">
                            <button className="btn btn-outline-danger btn-sm" onClick={() => this.handleDelete(index)}>
                              Delete
                            </button>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    list: state.list,
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      updateDataIndex: actions.updateIndex,
      deleteData: actions.Delete,
    },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(List);

