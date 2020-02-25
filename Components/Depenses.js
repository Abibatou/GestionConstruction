import React from 'react';
import {Text, View, List, ListItem, Content, Left, Right, Card} from 'native-base';
import Navbar from './Navbar';


export default function Depenses(){
    return(
    <View>
      <View>
        <Navbar/>
        </View>
        <View style={{marginBottom:30,  alignItems:'center', marginTop:60}}>
        <Text style={{fontSize:30, fontWeight:'bold'}}>Solde</Text>
        <Card style={{paddingTop:10, paddingBottom:10, paddingLeft:40, paddingRight:40}}>
            <Text>xxxxxxxxx</Text></Card>
        </View>
       
        
            <Text style={{marginLeft:60, marginBottom:20, fontWeight: "bold", 
            textDecoration: 'underline', fontSize:25}}>Dépenses</Text>
            
          <List>
            <ListItem >
                <Left>
              <Text>Prix x</Text>
              </Left>
              <Right>
                  <Text>Yyyyy</Text>
              </Right>
            </ListItem>
            <ListItem >
                <Left>
              <Text>Prix x</Text>
              </Left>
              <Right>
                  <Text>Yyyyy</Text>
              </Right>
            </ListItem>
            <ListItem >
                <Left>
              <Text>Prix x</Text>
              </Left>
              <Right>
                  <Text>Yyyyy</Text>
              </Right>
            </ListItem>
            
          </List>
          
        
       
     
       
    </View>
    )
}