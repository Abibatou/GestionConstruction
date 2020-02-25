import React from 'react';
import {   Container ,Content,  Form,Item, Input, Button, Text} from 'native-base';
import Navbar from './Navbar';
import Plan from './Plan';



export default function  Connexion ({ navigation }){
    return(
     
         <Container>
           
           <Navbar/>
          <Content>
          <Form>
            
            <Item>
              <Input placeholder="Username" />
            </Item>
            <Item >
              <Input placeholder="Password" />
            </Item>
            
              <Button  onPress={() => navigation.push('Plan')} type="submit"  style={{backgroundColor: '#fd005c',paddingLeft: 10,paddingBottom: 10,marginTop:20,width:150, marginLeft:40}}>
                  <Text style={{ color: 'white'}}>Connexion</Text>
              </Button>
           
          </Form>
          </Content>
        </Container>
       
    )
      }
    