import React from 'react';
import { Form, Input,TextArea,Grid, GridRow, GridColumn, Container } from 'semantic-ui-react'
import { Button } from 'semantic-ui-react';
import { nam } from './login';
var obj;
class ContactMe extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          name: '',
          email: '',
          text:''
        };
      }
      displayconsole=()=>{
          console.log(this.state.name);
          console.log(this.state.email);
          console.log(this.state.text);
          alert("succefully submitted!!");
      }
    render(){
        return(
            <Container justified style={{height:820}}>
                 <Grid>
                <Grid.Row>
                    <Grid.Column width={10}>
                        <h1 style={{fontSize:40}}>Fill up!!</h1>
                    <Form style={{fontSize:16}}>
    <Form.Field required>
      <label>Name</label>
      <Input placeholder='Full name' onChange={(event)=>{this.setState({name:event.target.value})}}/>
    </Form.Field>
    <Form.Field required>
        <label>Email</label>
        <Input placeholder="Email" type="email" onChange={(event)=>{this.setState({email:event.target.value})}}/>
    </Form.Field>
    <Form.Field>
        <label>Any</label>
        <TextArea placeholder='Tell us more' onChange={(event)=>{this.setState({text:event.target.value})}} style={{ minHeight: 200 }} />
    </Form.Field>
    <Button positive onClick={this.displayconsole}>Submit</Button>
  </Form>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
            </Container>
     );
    }
}

export default ContactMe;