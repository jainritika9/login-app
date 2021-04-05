import React, { useEffect, useState } from "react";
import {Input, Menu,Segment,Dropdown} from 'semantic-ui-react';
const options=[
    {"name":"Home"},
    {"name":"About"},
    {"name":"Help"},
    {"name":"Data"},
    {"name":"Settings"},{"name":"Accounts"},{"name":"Modules"}
];

function Sider(){
    const [search, setSearch] = useState("");
    const [filteredResults, setFilteredResults] = useState([]);
  
    useEffect(() => {
        setFilteredResults(
          options.filter((option) =>
            option.name.toLowerCase().includes(search.toLowerCase())
          )
        );
      }, [search]);
    
    return(
        <Segment attached='top' inverted secondary style={{minHeight:838}}>
            <div>
       <Input
          type="search"
          icon='search'
          placeholder="Search..."
          onChange={(event) => setSearch(event.target.value)}
        />
      </div>
      <Menu  secondary vertical>
        {filteredResults.map((option, id) => (
          <Menu.Item key={id}>{option.name}</Menu.Item>
        ))}
       < Dropdown text='Messages' pointing='left' className='link item'>
      <Dropdown.Menu>
        <Dropdown.Item>Inbox</Dropdown.Item>
        <Dropdown.Item>Starred</Dropdown.Item>
        <Dropdown.Item>Sent Mail</Dropdown.Item>
        <Dropdown.Item>Drafts (143)</Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item>Spam (1009)</Dropdown.Item>
        <Dropdown.Item>Trash</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>

    <Dropdown item text='Display Options'>
          <Dropdown.Menu>
            <Dropdown.Header>Text Size</Dropdown.Header>
            <Dropdown.Item>Small</Dropdown.Item>
            <Dropdown.Item>Medium</Dropdown.Item>
            <Dropdown.Item>Large</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
     
     <Menu.Item>React</Menu.Item> 
     <Menu.Item>Semantic-ui</Menu.Item>
     <Menu.Item>Router</Menu.Item>
      </Menu>
        </Segment>
    );
}

export default Sider;