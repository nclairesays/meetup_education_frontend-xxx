import React, { Component } from 'react'
import EventCard from './EventCard';
import { Card } from 'semantic-ui-react'
import { Route, Link} from 'react-router-dom'


export default class EventsList extends Component {

    state = {
        events: [] 
    }
    componentDidMount = () => {
        fetch('http://localhost:3000/events')
        .then(res => res.json())
        .then( json => this.setState({
          events: json
    }))}

  

    render() {
        return (
        <div>
             <Card.Group>
                {this.state.events.map((event) => (
                    <EventCard key={event.id} event={event} />
                ))}
            </Card.Group>
        </div>
        )
    }
}
