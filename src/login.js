import React from 'react'
import { Button, Form, Grid, Header, Segment } from 'semantic-ui-react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from "react-router-dom";
import { Redirect } from "react-router-dom";
import Protected from './protected.js';
import Profile from './profile.js';
var nam;
class Login extends React.Component{
  constructor(props){
    super(props);
    this.state={
    username:'',isAuth: false
    };
   }
   myChangeHandler = (event) => {
    this.setState({username: event.target.value,isAuth:true}
    );
  }
  login = () => {
    console.log(this.state.username);
    console.log(this.state.isAuth);
    nam=this.state.username;
    return (<Redirect to='/profile' component={Profile}/>);}
  render(){
    return(
      <div>
         <Router>
         <Route exact path='/'>
  <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
    <Grid.Column style={{ maxWidth: 450 }}>
      <Header as='h2' color='teal' textAlign='center'>
         Log-in to your account
      </Header>
      <Form size='large'>
        <Segment stacked>
          <Form.Input fluid icon='user' type="text" iconPosition='left' placeholder='Username'onChange={this.myChangeHandler} required />
          <Form.Input
            fluid
            icon='lock'
            iconPosition='left'
            placeholder='Password'
            type='password'
            required
          />
          <Button color='teal' fluid size='large' onClick={this.login}><Link style={{color:'white'}} to='/profile'>Login</Link>
          </Button>
        </Segment>
      </Form>
    </Grid.Column>
  </Grid>
  </Route>
  <Protected path="/profile" component={Profile} isAuth={this.state.isAuth}/>
      </Router>
      </div>
);
  }
}
export {nam};
export default Login;