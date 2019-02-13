import React from 'react'
import { Form } from 'semantic-ui-react'
 
class EventForm extends React.Component {
  state = {
    // date: '',
    title: '',
    description: '',
    date: '',
    interest_ids: [], //selected type in form
    allInterests: [],
    organizer_ids: []
  }

  componentDidMount() {
    fetch('http://localhost:3000/interests')
    .then(res => res.json())
    .then(json => this.setState({
      allInterests: json
    }))
  }

  handleSubmit = (e) => {
    this.setState({
        title: e.target.title.value,
        description: e.target.description.value
      }, () => this.postNewEvent())

  }

  postNewEvent = () => {
    fetch('http://localhost:3000/events', {
      method: 'post',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(
        {
        title: this.state.title,
        description: this.state.description,
        interest_ids: this.state.interest_ids,
        organizer_ids: []
        }
      )
    })
    .then( res => res.json())
    .then( ({ id }) => this.props.history.push(`/events/${id}`)) 
  }


  toggleInterest = (selectedInterest) => {
    if(this.state.interest_ids.includes(selectedInterest)){ // returns an array without the selected nterest
        this.setState({
        interest_ids: this.state.interest_ids.filter( type => type !== selectedInterest)
      })
    } else { // Adds the interest if not in array
      this.setState({
        interest_ids: [ ...this.state.interest_ids, selectedInterest]
      })
    }
  }
  
  render() {
  
    return (
      <div class="ui raised very padded text container segment">
        <h3>Create an Event</h3>
        <Form onSubmit={(e) => this.handleSubmit(e)}>
          <Form.Input fluid name="title" label="Title of Event" placeholder="title" />
          <Form.TextArea fluid name="description" label='Description' placeholder='Tell us more about the event...' />


        <label>Choose Event Category</label>
        <div class='ui grid'>
        {/* <Form.Group > */}
          {this.state.allInterests.map( interest => (
                  <div class='four wide column'>
                  <Form.Checkbox 
                     
                    onChange={() => this.toggleInterest(interest.id)} 
                    label={interest.name} checked={this.state.interest_ids.includes(interest.id)} 
                  /></div>
          ))}
        {/* </Form.Group> */}
        </div>
        
          <Form.Button>Submit</Form.Button>
        </Form>
      </div>
    )
  }
}

export default EventForm

