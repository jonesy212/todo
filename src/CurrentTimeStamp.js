import React from 'react';
class CurrentTimeStamp extends React.Component {
    constructor(props) {
        super(props)
        this.state ={
            date: new Date()
        }
    }

    componentDidMount() {
        this.timeId = setInterval(() => this.tick(), 1000);
        //some api call => result
        // this.setState({ data: result })
    }
    componentWillMount() {
        clearInterval(this.timeId)
    }
    tick = ()=> this.setState ({ date: new Date()})
    render() {
        const {date} = this.state
        return (

            <div>{date.toLocaleTimeString()}</div>
        )
    }
}

export default CurrentTimeStamp