import React, { Component } from "react";
import Item from "./item.jsx";
import Table from "@material-ui/core/Table";

import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import "./index.css";

class List extends Component {
  render() {
    return (
      <div>

        
        <Grid container spacing={5} className="posts_container">

          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Product Name</TableCell>
                  <TableCell align="center">Product Type</TableCell>
                  <TableCell align="center">Product Status</TableCell>
                  <TableCell align="center">Product Description</TableCell>
                  <TableCell align="center">Product Quantity</TableCell>
                  <TableCell align="center">Customer Name</TableCell>
                  <TableCell align="center">Customer Number</TableCell>
                  <TableCell align="center">Customer Email</TableCell>
                  <TableCell align="center">Actions</TableCell>
                </TableRow>
              </TableHead>

              {this.props.posts.map((post, index) => (
                <Item {...post} key={index} id={post.id} />
              ))}
            </Table>
          </TableContainer>
        </Grid>
      </div>
    );
  }
}

export default List;
