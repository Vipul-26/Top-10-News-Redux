import React from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';

let Button = ({ getPosts, channelName, disabled }) => {

  return (
    <button
      onClick={() => getPosts(channelName)}
      className={`btn btn-success btn-lg btn-block ${disabled ? 'disable' : ''}`}>
      Top Ten News
    </button>
  )
};

const mapStateToProps = (state) => ({
  channelName: state.channelName
});

const mapDispatchToProps = ({
  getPosts: fetchPosts
});

export default connect(mapStateToProps, mapDispatchToProps)(Button);
