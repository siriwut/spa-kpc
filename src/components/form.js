import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../actions/actions";
import { bindActionCreators } from "redux";
import "./style/formstyle.css";
import "bootstrap/dist/css/bootstrap.min.css";

class Form extends Component {
  state = {
    ...this.returnStateObject(),
  };

  returnStateObject() {
    if (this.props.currentIndex === -1)
      return {
        title: "",
        fName: "",
        lName: "",
        bDate: "",
        nationality: "",
        citizenId: "",
        gender: "",
        phone: "",
        passportId: "",
        salary: "",
      };
    else return this.props.list[this.props.currentIndex];
  }

  componentDidUpdate(prevProps) {
    if (
      prevProps.currentIndex !== this.props.currentIndex ||
      prevProps.list.length !== this.props.list.length
    ) {
      this.setState({ ...this.returnStateObject() });
    }
  }

  handleInputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
    console.log(e.target.value);
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.props.currentIndex === -1) this.props.insertData(this.state);
    else this.props.updateData(this.state);
  };

  render() {
    return (
      <div className="container">
        <h1 id="formtitle">Information Form</h1>
        <form autoComplete="off" onSubmit={this.handleSubmit}>
          <div className="row">
            <div className="col-3"></div>
            <div className="col-7">
              <label>Title: </label>
              <select
                name="title"
                required
                value={this.state.title}
                onChange={this.handleInputChange}
              >
                <option>-</option>
                <option>Mr.</option>
                <option>Ms.</option>
                <option>Mrs.</option>
              </select>
              &nbsp;
              <label>Firstname: </label>
              <input
                type="text"
                name="fName"
                required
                value={this.state.fName}
                onChange={this.handleInputChange}
              ></input>
            
            &nbsp;
            <label>Lastname: </label>
            <input
              type="text"
              name="lName"
              required
              value={this.state.lName}
              onChange={this.handleInputChange}
            ></input>
            </div>
            <div className="col"></div>
          </div>
          <div className="row">
            <div className="col-3"></div>
            <div className="col-7">
              <label htmlFor="birthday">Birthday: </label>
              <input
                type="date"
                name="bDate"
                required
                value={this.state.bDate}
                onChange={this.handleInputChange}
              ></input>
              &nbsp;
              <label htmlFor="nationality">Nationality: </label>
              <input
                type="text"
                id="nationality"
                name="nationality"
                value={this.state.nationality}
                onChange={this.handleInputChange}
              ></input>
            </div>
            <div className="col"></div>
          </div>
          <div className="row">
          <div className="col-3"></div>
            <div className="col-7">
              <label>CitizenID: </label>
              <input
                type="text"
                placeholder="x-xxxx-xxxxx-xx-x"
                id="citizenPart"
                name="citizenId"
                maxLength="13"
                value={this.state.citizenId}
                onChange={this.handleInputChange}
              ></input>
            </div>
            <div className="col"></div>
          </div>
          <div className="row">
          <div className="col-3"></div>
            <div className="col-7">
              <div className="form-check form-check-inline">
                <label>Gender: </label>&nbsp;
                <input
                  className="form-check-input"
                  type="radio"
                  name="gender"
                  id="male"
                  value="male"
                  checked={this.state.gender === "male"}
                  onChange={this.handleInputChange}
                ></input>
                <span className="form-check-label" htmlFor="male">
                  Male
                </span>
                &nbsp;
                <input
                  className="form-check-input"
                  type="radio"
                  name="gender"
                  id="female"
                  value="female"
                  checked={this.state.gender === "female"}
                  onChange={this.handleInputChange}
                ></input>
                <span className="form-check-label" htmlFor="female">
                  Female
                </span>
                &nbsp;
                <input
                  className="form-check-input"
                  type="radio"
                  name="gender"
                  id="unisex"
                  value="unisex"
                  checked={this.state.gender === "unisex"}
                  onChange={this.handleInputChange}
                ></input>
                <span className="form-check-label" htmlFor="unisex">
                  Unisex
                </span>
              </div>
            </div>
            <div className="col"></div>
          </div>
          <div className="row">
          <div className="col-3"></div>
            <div className="col-7">
              <label>Phone: </label>
              <input
                type="tel"
                name="phone"
                maxLength="10"
                value={this.state.phone}
                onChange={this.handleInputChange}
              ></input>
            </div>
            <div className="col"></div>
          </div>
          <div className="row">
          <div className="col-3"></div>
            <div className="col-7">
              <label>Passport No: </label>
              <input
                type="text"
                name="passportId"
                value={this.state.passportId}
                onChange={this.handleInputChange}
              ></input>
            </div>
            <div className="col"></div>
          </div>
          <div className="row">
          <div className="col-3"></div>
            <div className="col-6">
              <label>Expected Salary: </label>
              <input
                type="number"
                name="salary"
                required
                value={this.state.salary}
                onChange={this.handleInputChange}
              ></input>
              &nbsp; THB
            </div>
            <div className="col-2" id="btn-col">
            <button className="btn btn-outline-dark" id="btn">SUBMIT</button>
              </div>
              <div className="col" id="btn-col"></div>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    list: state.list,
    currentIndex: state.currentIndex,
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      insertData: actions.insert,
      updateData: actions.update,
    },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Form);
