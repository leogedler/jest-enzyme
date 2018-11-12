import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';

import * as actions from 'actions';
import CommentBox from 'components/CommentBox';
import CommentList from 'components/CommentList';

class App extends Component {

  renderButton() {
    const { auth } = this.props;
    if (auth) {
      return (
        <button onClick={() => this.props.changeAuth(false)}>
          Sign Out
        </button>
      );
    } else {
      return (
        <button onClick={() => this.props.changeAuth(true)}>
          Sign In
        </button>
      );
    }
  }

  renderHeader() {
    return (
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/post">Post a comment</Link>
        </li>
        <li>
          {this.renderButton()}
        </li>
      </ul>
    );
  }

  render() {
    return (
      <div>
        {this.renderHeader()}
        <Route path="/post" component={CommentBox} />
        <Route path="/" exact component={CommentList} />
      </div>
    );
  }
};

const mapStateToProps = ({ auth }) => {
  return { auth };
};

export default connect(mapStateToProps, actions)(App);
