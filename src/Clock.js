import React, {Component} from 'react';


class Clock extends Component {

constructor (props) {
    super(props);
    this.setState = {
        days: 0,
        hours: 0,
        minutes:0,
        seconds:0
    }
}


    render() {
        return (
            <div>
                <div className="countdown__clock">
                    ‍<div className="countdown__clock--item">{this.setState.days} days</div>
                    ‍<div className="countdown__clock--item">{this.setState.hours} hours</div>
                    ‍<div className="countdown__clock--item">{this.setState.minutes} minutes</div>
                    ‍<div className="countdown__clock--item">{this.setState.seconds} seconds</div>
                </div>
            </div>
        );
    }

}


export default Clock;