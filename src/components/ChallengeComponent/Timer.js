import React, {Component} from 'react';

class Timer extends Component {
    state={
        minute:null,
        second:null
    }

    componentDidMount(){
        let that = this;
        let minutes= this.props.time;
        let seconds = 0
        var x = setInterval(function(){
            that.setState({minute:minutes, second:seconds});

            if(minutes === 0 && seconds===0){
                clearTimeout(x);
                alert('Allocated time for this exam is finished');
                that.props.timeout();
            }
            if(seconds === 0) {
                seconds = 60;
                minutes--;
            }
            seconds--;
        }, 1000);
    }
    render(){
        return(
            <div style={{backgroundColor:'darkgray', textAlign:'center', marginBottom:20, paddingBottom:10, paddingTop:10}}>
                <p style={{marginTop:5, marginBottom:5}}>Exam Time Left</p>
                <h3 style={{marginTop:5, marginBottom:5}}>{`00:${this.state.minute}:${this.state.second}`}</h3>
            </div>
        );
    }
}

export default Timer;