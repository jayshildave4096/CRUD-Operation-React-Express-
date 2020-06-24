import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../actions";
import TextField from "@material-ui/core/TextField";

import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";

import TableRow from "@material-ui/core/TableRow";
import Button from "@material-ui/core/Button";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import "./item.css";

class Item extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isEdit: false,

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
    this.props.removePost(this.props.id);
  };
  //updating the post if editing
  updatePost = () => {
    this.setState({ isEdit: true });
  };

  donePost = () => {
    this.props.updatePost(
      this.props.id,
      this.state.prod_name,
      this.state.prod_type,
      this.state.prod_status,
      this.state.prod_desc,
      this.state.prod_quantity,
      this.state.cust_name,
      this.state.cust_number,
      this.state.cust_mail
    );
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
            defaultvalue={this.state.prod_type}
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
            defaultvalue={this.state.prod_status}
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
        <TableRow key={this.props.prod_name}>
          <TableCell component="th" scope="row">
            {this.state.isEdit ? this.renderProdName() : this.props.prod_name}
          </TableCell>
          <TableCell align="center">
            {this.state.isEdit ? this.renderProdType() : this.props.prod_type}
          </TableCell>
          <TableCell align="center">
            {this.state.isEdit
              ? this.renderProdStatus()
              : this.props.prod_status}
          </TableCell>
          <TableCell align="center">
            {this.state.isEdit ? this.renderProdDesc() : this.props.prod_desc}
          </TableCell>
          <TableCell align="center">
            {this.state.isEdit
              ? this.renderProdQuant()
              : this.props.prod_quantity}
          </TableCell>
          <TableCell align="center">
            {this.state.isEdit ? this.renderCustName() : this.props.cust_name}
          </TableCell>
          <TableCell align="center">
            {this.state.isEdit
              ? this.renderCustNumber()
              : this.props.cust_number}
          </TableCell>
          <TableCell align="center">
            {this.state.isEdit ? this.renderCustMail() : this.props.cust_mail}
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

const mapDispatchToProps = (dispatch) => {
  return {
    removePost: (id) => {
      dispatch(actions.removePost(id));
    },
    updatePost: (
      id,
      prod_name,
      prod_type,
      prod_status,
      prod_desc,
      prod_quantity,
      cust_name,
      cust_number,
      cust_mail
    ) => {
      dispatch(
        actions.updatePost(
          id,
          prod_name,
          prod_type,
          prod_status,
          prod_desc,
          prod_quantity,
          cust_name,
          cust_number,
          cust_mail
        )
      );
    },
  };
};

export default connect(null, mapDispatchToProps)(Item);
