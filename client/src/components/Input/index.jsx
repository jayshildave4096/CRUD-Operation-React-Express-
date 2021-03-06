import React, { Component } from "react";

import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Select from "@material-ui/core/Select";

import "./index.css";
import { FormControl } from "@material-ui/core";

var uuid = require("react-native-uuid");

class Input extends Component {
  constructor(props) {
    super(props);

    this.state = {
      prod_name: "",
      prod_type: "Valid",
      prod_status: "In Progress",
      prod_desc: "",
      prod_quantity: 0,
      cust_name: "",
      cust_number: "",
      cust_mail: "",
      postadded: false,
    };
  }

  handleChange = (event) => {
    const state = this.state;

    state[event.target.name] = event.target.value;
    this.setState({ state });
    
  };

  handleSubmit = (event) => {
    event.preventDefault();
    if (this.state.cust_number.length !== 10 || this.state.prod_quantity < 0) {
      alert("Entry Invalid Please check Quantity or Phone Number");
    } else {
      var data = {
        id: uuid.v1(),
        prod_name: this.state.prod_name,
        prod_type: this.state.prod_type,
        prod_status: this.state.prod_status,
        prod_desc: this.state.prod_desc,
        prod_quantity: this.state.prod_quantity,
        cust_name: this.state.cust_name,
        cust_number: this.state.cust_number,
        cust_mail: this.state.cust_mail,
      };
      fetch("http://localhost:9000/users/new", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })
        .then(function (response) {
          if (response.status >= 400) {
            throw new Error("Bad response from server");
          }
          return response.json();
        })
        .then(function (data) {
          console.log(data);
        })
        .catch(function (err) {
          console.log(err);
        });
      alert("Post Added Successfully!");
    }
  };

  render() {
    return (
      <Grid item xs={12} className="form">
        <form onSubmit={this.handleSubmit} method="POST">
          <TextField
            onChange={this.handleChange}
            value={this.state.prod_name}
            type="text"
            placeholder="Enter Product Name"
            name="prod_name"
            required
          />
          <br />

          <Select
            name="prod_type"
            native
            value={this.state.prod_type}
            onChange={this.handleChange}
          >
            <option value={"Valid"}>Valid</option>
            <option value={"Invalid"}>Invalid</option>
          </Select>

          <br />
          <FormControl>
            <Select
              name="prod_status"
              native
              value={this.state.prod_status}
              onChange={this.handleChange}
            >
              <option value="In Progress">In Progress</option>
              <option value="Delivered">Delivered</option>
              <option value="Cancelled">Cancelled</option>
              <option value="Other">Other</option>
            </Select>
          </FormControl>
          <br />
          <TextField
            onChange={this.handleChange}
            value={this.state.prod_desc}
            type="text"
            placeholder="Product Description"
            name="prod_desc"
            required
          />
          <br />
          <TextField
            onChange={this.handleChange}
            value={this.state.prod_quantity}
            type="number"
            placeholder="Product Quantity"
            name="prod_quantity"
            required
          />
          <br />
          <TextField
            onChange={this.handleChange}
            value={this.state.cust_name}
            type="text"
            placeholder="Customer Name"
            name="cust_name"
            required
          />
          <br />
          <TextField
            onChange={this.handleChange}
            value={this.state.cust_number}
            type="text"
            placeholder="Customer Number"
            name="cust_number"
            required
          />
          <br />
          <TextField
            onChange={this.handleChange}
            value={this.state.cust_mail}
            type="text"
            placeholder="Customer Email"
            name="cust_mail"
            required
          />
          <br />
          <br />

          <Button
            className="addbtn"
            type="submit"
            variant="contained"
            color="secondary"
          >
            Add
          </Button>
        </form>
      </Grid>
    );
  }
}

export default Input;
