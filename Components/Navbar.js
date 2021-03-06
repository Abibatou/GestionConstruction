import React from 'react';
import {  Button, Container ,Header, Right, Icon, Body, Title, Left} from 'native-base';
import { Image } from 'react-native';



export default function Navbar (){
    
    return(
      <Container>
        
        <Header style={{backgroundColor: 'white'}}>
          <Left>
            
            <Image source={require('../images/logo.jpg')} style={{width:40, height:70, backgroundColor:'white'}}/>
            
            
          </Left>
          <Body><Title style={{color:'black'}}>My app</Title></Body>
          <Right>
            <Button transparent>
              <Icon style={{color:'black'}} name='menu' />
            </Button>
          </Right>
        </Header>
      </Container>
    )
  }
