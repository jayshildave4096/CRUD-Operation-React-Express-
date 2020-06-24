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
  constructor(props){
    super(props);
    this.state={
      posts:[],
    }
  }
  componentDidMount() {
    let self=this;
    
    fetch('http://localhost:9000/users/list', {
        method: 'GET'
    }).then(function(response) {
        if (response.status >= 400) {
            throw new Error("Bad response from server");
        }
        return response.json();
    }).then(function(data) {
        self.setState({posts: data});
    }).catch(err => {
    console.log('caught it!',err);
    })
}
  render() {
    return (
      
        <Grid container spacing={5} >
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                <TableCell>ID</TableCell>
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

              {this.state.posts.map((post) => (
                <Item {...post} key={post.id} id={post.id}  allposts={this.state.posts}/>
              ))}
            </Table>
          </TableContainer>
        </Grid>
      
    );
  }
}

export default List;
