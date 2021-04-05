import React, { Component } from 'react'
import Home from "./home.js";
import AboutMe from "./about.js";
import ContactMe from "./contact.js";
import { Menu, Segment ,Grid, Search} from 'semantic-ui-react'
import { Dropdown,Icon } from 'semantic-ui-react'
import { Router, Switch ,Redirect} from 'react-router-dom';
import Sider from './sider.js';
import {nam} from './login.js';
import Protected from './protected.js';
const options=[{"name":"home"},{'name':'About'},{'name':'Data'},{'name':'Help'},{'name':'Settings'},{'name':'Accounts'}]
class Profile extends React.Component{
   state = { activeItem: 'home'}

   handleItemClick = (e, { name }) => {this.setState({ activeItem: name });
       this.setState({value: name})
   }
   display=(activeItem)=>{
     switch (activeItem) {
       case 'Home':
         return(<Home/>);
         break;
       case 'AboutMe':
         return (<AboutMe/>);
         break;
       case 'ContactMe':
         return (<ContactMe/>);
         break;
      case  'Logout':
        return (<Redirect to='/'/>);
        break;
       default:
         return(<Home/>);
         break;
     }
   }
    render(){
        const { activeItem } = this.state
        return(
            <div>
              <Grid>
              <Grid.Row>
              <Grid.Column width={16}>
              <Segment inverted attached='top'>
              <Menu  inverted pointing secondary>
              <Menu.Item
                name='Home'
                active={activeItem === 'Home'}
                onClick={this.handleItemClick}
              />
              <Menu.Item
                name='AboutMe'
                active={activeItem === 'AboutMe'}
                onClick={this.handleItemClick}
              />
              <Menu.Item
                name='ContactMe'
                active={activeItem === 'ContactMe'}
                onClick={this.handleItemClick}
              />
              <Menu.Menu position='right'>
              <Menu.Item
                  active={activeItem === 'Username'}
                  onClick={this.handleItemClick}>
                    <Icon name='user'/>{nam}
                  </Menu.Item>
                <Menu.Item
                  name='Logout'
                  active={activeItem === 'Logout'}
                  onClick={this.handleItemClick}
                />
              </Menu.Menu>
            </Menu></Segment></Grid.Column>
       
        
        <Grid.Column style={{width:270,height:825}}><Sider/></Grid.Column>
        <Grid.Column style={{width:1100}}>
            <Segment stacked inverted secondary color="teal" style={{margin:30,height:750,padding:20}}>
             {this.display(activeItem)}
            </Segment>
            </Grid.Column> 
            </Grid.Row>
            </Grid>
          </div>
        )
    }
}

export default Profile;