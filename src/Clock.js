import React, {Component} from 'react';


    class Clock extends Component {

        constructor (props) {
            super(props);
            this.state = {
                days: 0,
                hours: 0,
                minutes:0,
                seconds:0
            }
            // console.log('props', this.props);
        }



        componentWillMount() {
            this.getTimeUnti(this.props.deadline);
        }

        componentDidMount () {
            setInterval(()=> this.getTimeUnti(this.props.deadline),1000);
        }


        leadingZero (num) {
            return num < 10 ? '0' + num : num;
        }

        getTimeUnti(deadline) {
            const time = Date.parse(deadline) - Date.parse(new Date());
            // console.log('time', time);
            const seconds = Math.floor( (time/1000)%60 );
            const minutes = Math.floor( (time/1000/60)%60);
            const hours = Math.floor ( (time*60*60)%24);
            const days = Math.floor (time / (1000*60*60*24));
            // console.log ('seconds', seconds, 'minutes',minutes ,'hours', hours, 'days', days);
            this.setState({days,hours,minutes,seconds});
        }


        render() {
            return (
                <div>
                    <div className="countdown__clock">
                        ‍<div className="countdown__clock--item">{this.leadingZero(this.state.days)} days</div>
                        ‍<div className="countdown__clock--item">{this.leadingZero(this.state.hours)} hours</div>
                        ‍<div className="countdown__clock--item">{this.leadingZero(this.state.minutes)} minutes</div>
                        ‍<div className="countdown__clock--item">{this.leadingZero(this.state.seconds)} seconds</div>
                    </div>
                </div>
            );
        }

    }


export default Clock;