import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
// import Events from './Events'
// import EventsContainer from './EventsContainer';
import EventsList from './EventsList';
import EventForm from './EventForm';
import EventPage from './EventPage';
import PublicHomePage from './PublicHomePage'



class App extends Component {

  state = {
    users: [],
    loggedIn: false
  }

  // componentDidMount(){
  //   fetch('http://localhost:3000/users')
  //   .then(res => res.json())
  //   .then( json => this.setState({
  //     users: json
  //   }))
  //   .then(this.getEvents)
  // }

  
  render() {
    return (
      <div className="App">
       <headers>
        Welcome to Meetup Ed!
       </headers>
    
      
       <BrowserRouter>
            <div className="container">
                <Switch>
                  
                    <Route exact path="/events" component={EventsList} />
                    <Route path="/events/new" component={EventForm} />                    
                    <Route path="/events/:id/edit" component={EventForm}/>
                    <Route path="/events/:id" component={EventPage} />
                   
                    <Route path="/login" component={PublicHomePage} />  
                    <Route exact path="/" render={() => (
                      this.state.loggedIn 
                      ? ( <Redirect to="/events"/> ) 
                      : ( <PublicHomePage /> )
                    )}/>

                    {/* <Route path="/users/:id" component={Dashboard} /> */}
                       
                </Switch>
            </div>
      </BrowserRouter>
       
      </div>
    );
  }
}

export default App;
