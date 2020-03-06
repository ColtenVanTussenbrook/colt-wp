import React, { Component } from 'react';
import axios from 'axios';
import Footer from './Footer';

class Post extends Component {

  state = {currPost: null, PostContent: null, nav: this.props.nav}

  getCurrentPost = () => {
    let path = window.location.pathname;
    path = path[0] === '/' ? path.substr(1) : path;
    
    if (this.props.nav) {
      this.props.nav.map(post => {
        if (post.title.toLowerCase() === path) {
          this.setState({currPost: post.object_id}, function() {
            let postUrl = "";
            let postEndpoint = `wp-json/wp/v2/posts/${this.state.currPost}`;
            
            if (this.props.test_env === true) {
              postUrl = "http://localhost:8888/" + postEndpoint;
            } else if (this.props.test_env === false) {
              postUrl = window.location.href + postEndpoint;
            } else return null;
        
            axios.get(postUrl)
            .then(res => {
              this.setState({postContent: res.data})
            })

          })
        }
        return null;
      })
    } else return null;
  }

  componentDidMount = () => {
    this.getCurrentPost();
  }

  componentDidUpdate = (prevProps) => {
    if(this.props.PostChange !== prevProps.PostChange) {
      this.getCurrentPost();
    }
  }

  render() {
    if (this.state.PostContent) {
      return (
        <div className="post">
          <div dangerouslySetInnerHTML={{__html: this.state.postContent.content.rendered}} />
          <Footer />
        </div>
        
      ) 
    } else return null;
      
    }
}

export default Post;