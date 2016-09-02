var React = require('react');
var $ = require('jquery');
var Link = require('react-router').Link;
var GithubUser = require('./GithubUser');

var Followers = React.createClass({

    fetchData: function() {
        var that = this;
        var token = "7202ac2999732c50fea0eb2472527084629c86f5";
        //console.log(that.props.params.username);
        $.getJSON(`https://api.github.com/users/${that.props.params.username}/followers?access_token=${token}`)
            .then(function(data) {
                //console.log(data);
                that.setState({
                    followers: data
                });
            });
    },

    componentDidMount: function() {
        this.fetchData();
    },

    componentDidUpdate: function(prevProps) {
        //console.log("was", prevProps.params.username);
        //console.log("now",this.props.params.username);
        
        if (prevProps.params.username != this.props.params.username ) {
            this.fetchData();
        }
    },


    render: function() {



        if (!this.state) {
            return <div>LOADING FOLLOWING...</div>;
        }
        //console.log("render", this.state);
        return (
            <div className="followers-page">
                    <h2>Followers of {this.props.params.username}</h2>
                    <ul className="list-of-followers">
                        {this.state.followers.map( function (user){
                            return < GithubUser key={user.id}  user={user} />;
    } )}
                    </ul>
            </div>
        );


    },


});

module.exports = Followers;