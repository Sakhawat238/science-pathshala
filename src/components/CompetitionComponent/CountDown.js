import React, {Component} from 'react';

class CountDown extends Component {
    state={
        day:null,
        hour: null,
        minute:null,
        second:null
    }

    componentDidMount(){
        let that = this;
        var deadline = new Date(this.props.comp_start).getTime(); 
        var x = setInterval(function() { 
            var now = new Date().getTime(); 
            var t = deadline - now; 
            console.log("countdown", deadline, now, t);
            var days = Math.floor(t / (1000 * 60 * 60 * 24)); 
            var hours = Math.floor((t%(1000 * 60 * 60 * 24))/(1000 * 60 * 60)); 
            var minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60)); 
            var seconds = Math.floor((t % (1000 * 60)) / 1000); 
            
            that.setState({day:days, hour:hours, minute:minutes, second:seconds});

            if (t < 0) { 
                clearInterval(x); 
            } 
        }, 1000);
    }
    render(){
        return(
            <div style={{backgroundColor:'darkgray', textAlign:'center', marginBottom:20, paddingBottom:10, paddingTop:10}}>
                <p style={{marginTop:5, marginBottom:5}}>D H M S</p>
                <h3 style={{marginTop:5, marginBottom:5}}>{`${this.state.day}:${this.state.hour}:${this.state.minute}:${this.state.second}`}</h3>
            </div>
        );
    }
}

export default CountDown;