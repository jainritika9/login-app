import React from 'react'
import pic from './me.jpg'
import {List,Grid,Image,Icon} from 'semantic-ui-react'
class AboutMe extends React.Component{
    render(){
        return(
    <Grid divided='vertically' style={{height:833,fontSize:16}}>
      <h1 style={{fontSize:37}}>Hii!! , My name is Ritika Jain</h1>
      <Grid>
    <Grid.Column floated='left' width={8}>
    <p style={{fontSize:20}}>Currently, I am Persuading my Graduation in B-Tech from Tecjno Njr Institute in Computer Science.My strength is I'm a self-motivated, quick learner and creative.My objective is to fully utilize my skills and knowledge and further enhance them.In my free time i enjoy doing sketching and painting.
    </p>
    </Grid.Column>
    <Grid.Column floated='right' width={5}>
    <Image src={pic} size='medium'  />
    </Grid.Column></Grid>
      <Grid.Row columns={3}>
      <Grid.Column>
      <List as='ul'>
        <h2>Education</h2>
    <List.Item>
      <List.Header as='a'>St. Mary's Convent Sr. Sec. School,Fathepura(2005-19)</List.Header>
      <List.Description>
      High/Senior School Diploma and Certificate,Science
      </List.Description>
    </List.Item>
    <List.Item>
      <List.Header as='a'>Techno India NJR Institute of Technology, Udaipur(2019-23)</List.Header>
      <List.Description>
      Bachelor of Technology - BTech(currently pursuing)<br/>Computer Science
      </List.Description>
    </List.Item>
  </List>
      </Grid.Column>
      <Grid.Column>
      <List as='ul'style={{color:'black'}}>
      <h2 style={{color:'white'}}>Skills</h2>
    <List.Item as='li'>C,C++</List.Item>
    <List.Item as='li'>Python</List.Item>
    <List.Item as='li'>Sql</List.Item>
    <List.Item as='li'>HTML,CSS,Bootstrap</List.Item>
    <List.Item as='li'>Javascript,React</List.Item>
  </List>
      </Grid.Column>
      <Grid.Column>
      <List>
      <h2>Contact Me</h2>
    <List.Item as='a'>
      <Icon name='mail' />
      <List.Content>
        <List.Header as='a'>jain.ritika919@gmail.com</List.Header>
      </List.Content>
    </List.Item>
    <List.Item as='a'>
      <Icon name='linkedin' />
      <List.Content>
        <List.Header as='a'>www.linkedin.com/in/ritika-jain19</List.Header>
      </List.Content>
    </List.Item>
    <List.Item as='a'>
      <Icon name='github' />
      <List.Content>
        <List.Header as='a'>https://github.com/jainritika9</List.Header>
      </List.Content>
    </List.Item>
  </List>
      </Grid.Column>
    </Grid.Row>
  </Grid>)
    }
}
export default AboutMe;