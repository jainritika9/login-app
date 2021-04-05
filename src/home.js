import React from 'react';
import {Container, Table ,Grid, Image} from 'semantic-ui-react';
class Home extends React.Component{
    render(){
        return(
            <div>
      <Container fluid textAlign='justified' style={{height:805}}>
      <h1 style={{color:'whitesmoke',fontSize:35,textAlign:'center'}}>Techon Dater Systems Pvt Ltd</h1>
        <p style={{fontSize:18}}>Techon Dater Systems Pvt Ltd, incorporated in 1997, is a technology driven company with its core competence in the field of Industrial Automation, Software Development and Energy Metering. 
Company has a complete range of products for Industrial Automation including its flagship product Flex-eSuite. Flex-eSuite, a product based on industrial interoperability standard “OPC”, is capable of communicating different make of SCADA, PLC and other devices through OPC standard, and full-fledge solution for process data acquisition, monitoring, archiving and reporting requirements.</p>

        <Grid>
            <Grid.Row>
                <Grid.Column width={10}>
                <Table color='teal' inverted  style={{margin:30}}>
        <Table.Row><Table.HeaderCell>Website</Table.HeaderCell><Table.HeaderCell>http://www.techondater.com</Table.HeaderCell></Table.Row>
        <Table.Row><Table.Cell>Nature of Business</Table.Cell><Table.Cell>Service Provider</Table.Cell></Table.Row>
        <Table.Row><Table.Cell>Year of Establishment</Table.Cell><Table.Cell>1997</Table.Cell></Table.Row>
        <Table.Row><Table.Cell>Specialties</Table.Cell><Table.Cell>Software Development, Product Development, Industrial Automation, OPC, SCADA, Energy Metering, and Energy Billing Software</Table.Cell></Table.Row>
        <Table.Row><Table.Cell>Location</Table.Cell><Table.Cell>H1-27, IT Park, Mewar Industrial Area Ext. Near Spirite Restaurent Udaipur, Rajasthan, India 313001</Table.Cell></Table.Row>
        </Table>
                </Grid.Column>
                <Grid.Column width={5}>
            <Image src="https://media-exp1.licdn.com/dms/image/C4D0BAQHUb1iEzBy-MA/company-logo_200_200/0/1519909647757?e=2159024400&v=beta&t=VOuM4Vo59g3nWul-GoJLklMvZd4sIHQFQ7C0mqVzfyM" size='medium' style={{margin:30}}/>
                </Grid.Column>
            </Grid.Row>
        </Grid>
        </Container>
    </div>);
    }
}
export default Home;