import React, { Component } from "react";
import Header from "./components/Header";
import Button from "@material-ui/core/Button";
import Input from "./components/Input";
import List from "./components/List/index.jsx";
import { connect } from "react-redux";
import { Route, Link, Switch } from "react-router-dom";


class App extends Component {
  render() {
    const style={
      paddingLeft:"20px",
      
    }
    return (
      <div className="App">
        <Header />
        <div className="buttons">
        <Link to="/">
          <Button size="large" variant="contained" color="primary" >Add Product</Button>
        </Link>
        {" "}
        <Link to="/list">
          <Button size="large" variant="contained" color="secondary" style={style}>List Product</Button>
        </Link>
        </div>
        {/* <List posts={this.props.allPosts} /> */}
        <Switch>
          <Route exact path="/">
            <Input />
          </Route>
          <Route path="/list">
            <List posts={this.props.allPosts} />
          </Route>
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    allPosts: state.post,
  };
};

export default connect(mapStateToProps, null)(App);
