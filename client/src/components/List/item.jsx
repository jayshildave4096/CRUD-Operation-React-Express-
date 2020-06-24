import React, { Component } from "react";
import List from "../List/index";
import TextField from "@material-ui/core/TextField";

import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import Grid from "@material-ui/core/Grid";
import TableRow from "@material-ui/core/TableRow";
import Button from "@material-ui/core/Button";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import "./item.css";

class Item extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: this.props.allposts,
      isEdit: false,
      isRemoved: false,
      id: this.props.id,
      prod_name: this.props.prod_name,
      prod_type: this.props.prod_type,
      prod_status: this.props.prod_status,
      prod_desc: this.props.prod_desc,
      prod_quantity: this.props.prod_quantity,
      cust_name: this.props.cust_name,
      cust_number: this.props.cust_number,
      cust_mail: this.props.cust_mail,
      styles: {
        minWidth: 1000,
        minHeight: 1000,
      },
    };
  }

  //to handle all the update changes
  handleChangeProdName = (event) => {
    this.setState({ prod_name: event.target.value });
  };
  handleChangeProdType = (event) => {
    this.setState({ prod_type: event.target.value });
  };
  handleChangeProdStatus = (event) => {
    this.setState({ prod_status: event.target.value });
  };
  handleChangeProdDesc = (event) => {
    this.setState({ prod_desc: event.target.value });
  };
  handleChangeProdQuant = (event) => {
    this.setState({ prod_quantity: event.target.value });
  };
  handleChangeCustName = (event) => {
    this.setState({ cust_name: event.target.value });
  };
  handleChangeCustNumber = (event) => {
    this.setState({ cust_number: event.target.value });
  };
  handleChangeCustMail = (event) => {
    this.setState({ cust_mail: event.target.value });
  };

  //removing the post

  removePost = () => {
    var data = { id: this.state.id };
    console.log(data);
    fetch("http://localhost:9000/users/remove", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then(function (res) {
        if (res >= 400) throw new Error("Bad response from Server");
        return res.json();
      })
      .catch(function (err) {
        console.log(err);
      });
    this.setState({ isRemoved: true });
    this.props.allposts.splice(this.state.id,1)
    
  };
  //updating the post if editing
  updatePost = () => {
    this.setState({ isEdit: true });
  };

  donePost = () => {
    var data = {
      id: this.state.id,
      prod_name: this.state.prod_name,
      prod_type: this.state.prod_type,
      prod_status: this.state.prod_status,
      prod_desc: this.state.prod_desc,
      prod_quantity: this.state.prod_quantity,
      cust_name: this.state.cust_name,
      cust_number: this.state.cust_number,
      cust_mail: this.state.cust_mail,
    };
    fetch("http://localhost:9000/users/update", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then(function (res) {
        if (res >= 400) throw new Error("Bad Response from Server");
        res.json();
      })
      .catch(function (err) {
        console.log(err);
      });

    this.setState({ isEdit: false });
  };

  //functions to render each component individually
  renderProdName = () => {
    return (
      <TextField
        onChange={this.handleChangeProdName}
        defaultValue={this.state.prod_name}
        type="text"
        required
      />
    );
  };

  renderProdType = () => {
    return (
      <form>
        <FormControl>
          <Select
            native
            name="prod_type"
            onChange={this.handleChangeProdType}
            defaultValue={this.state.prod_type}
            required
          >
            <option value="Valid">Valid</option>
            <option value="Invalid">Invalid</option>
          </Select>
        </FormControl>
      </form>
    );
  };

  renderProdStatus = () => {
    return (
      <form>
        <FormControl>
          <Select
            native
            name="prod_status"
            onChange={this.handleChangeProdStatus}
            defaultValue={this.state.prod_status}
            required
          >
            <option value="In Progress">In Progress</option>
            <option value="Delivered">Delivered</option>
            <option value="Cancelled">Cancelled</option>
            <option value="Other">Other</option>
          </Select>
        </FormControl>
      </form>
    );
  };
  renderProdDesc = () => {
    return (
      <TextField
        onChange={this.handleChangeProdDesc}
        defaultValue={this.state.prod_desc}
        type="text"
        required
      />
    );
  };
  renderProdQuant = () => {
    return (
      <TextField
        onChange={this.handleChangeProdQuant}
        defaultValue={this.state.prod_quantity}
        type="number"
        required
      />
    );
  };
  renderCustName = () => {
    return (
      <TextField
        onChange={this.handleChangeCustName}
        defaultValue={this.state.cust_name}
        type="text"
        required
      />
    );
  };
  renderCustNumber = () => {
    return (
      <TextField
        onChange={this.handleChangeCustNumber}
        defaultValue={this.state.cust_number}
        type="Number"
        required
      />
    );
  };
  renderCustMail = () => {
    return (
      <TextField
        onChange={this.handleChangeCustMail}
        defaultValue={this.state.cust_mail}
        type="text"
        required
      />
    );
  };

  renderUpdateButton = () => {
    return (
      <Button variant="contained" color="primary" onClick={this.updatePost}>
        EDIT
      </Button>
    );
  };

  renderDoneButton = () => {
    return (
      <Button variant="contained" onClick={this.donePost}>
        DONE
      </Button>
    );
  };

  
  render() {
    return (
      <TableBody className="table">
        <TableRow key={this.state.id}>
          <TableCell component="th" scope="row">
            {this.state.id}
          </TableCell>
          <TableCell>
            {this.state.isEdit ? this.renderProdName() : this.state.prod_name}
          </TableCell>
          <TableCell align="center">
            {this.state.isEdit ? this.renderProdType() : this.state.prod_type}
          </TableCell>
          <TableCell align="center">
            {this.state.isEdit
              ? this.renderProdStatus()
              : this.state.prod_status}
          </TableCell>
          <TableCell align="center">
            {this.state.isEdit ? this.renderProdDesc() : this.state.prod_desc}
          </TableCell>
          <TableCell align="center">
            {this.state.isEdit
              ? this.renderProdQuant()
              : this.state.prod_quantity}
          </TableCell>
          <TableCell align="center">
            {this.state.isEdit ? this.renderCustName() : this.state.cust_name}
          </TableCell>
          <TableCell align="center">
            {this.state.isEdit
              ? this.renderCustNumber()
              : this.state.cust_number}
          </TableCell>
          <TableCell align="center">
            {this.state.isEdit ? this.renderCustMail() : this.state.cust_mail}
          </TableCell>
          <TableCell align="center">
            {this.state.isEdit
              ? this.renderDoneButton()
              : this.renderUpdateButton()}
            <Button
              variant="contained"
              color="secondary"
              onClick={this.removePost}
              className="btn_remove"
            >
              REMOVE
            </Button>
          </TableCell>
        </TableRow>
      </TableBody>
    );
  }
}

export default Item;
