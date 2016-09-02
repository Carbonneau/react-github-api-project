var React = require('react');
var $ = require('jquery');
var Link = require('react-router').Link;

var GithubUser = React.createClass({
    
    render: function() {
        
        //console.log("githubuser", this.props.user);
        
        return (
            <li>
            <div className="follower">
                <Link to={"/user/" + this.props.user.login} >
                    <img src={this.props.user.avatar_url}/>
                    <p className= "follower-text"> {this.props.user.login} </p>
                </Link>
            </div>
            </li>    
        );
        
    }
});

module.exports = GithubUser;