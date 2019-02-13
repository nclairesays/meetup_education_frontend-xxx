import React, { Component } from 'react'
import { Container, Header } from 'semantic-ui-react';


export default class EventPage extends Component {
    state = {
        selectedEvent: {}
    }

    componentDidMount(){
        fetch(`http://localhost:3000/events/${this.props.match.params.id}`)
            .then( res => res.json())
            .then( selectedEvent => this.setState({ selectedEvent }))
    }

    render() {
        
        const { title, description, date, interest_ids, organizer_ids } = this.state.selectedEvent
        
        return (
        <Container>     
            <div class="ui raised very padded text container segment">
            <h2 class="ui header">{title}</h2>
            <p> {description}</p>
            <p></p>

            <div class="ui buttons">
                <button 
                    class="ui button"
                    onClick={() => this.props.history.push('/events')}
                >
                    Go Back to All Events
                </button>
                <div class="or"></div>
                <button class="ui positive button">
                    Attend this Event
                </button>
            </div>
            </div>
          
        </Container>
        )
    }
}
