import React from 'react';
import {Text, View, List, ListItem, Content, Left, Right, Card} from 'native-base';
import {StyleSheet} from 'react-native';
import Navbar from './Navbar';



export default function Marteau(){
    return(
      
    <View>
      <View>
        <Navbar/>
      </View>
        <View style={{marginBottom:30,  alignItems:'center', marginTop:70}}>
        <Text style={{fontSize:30, fontWeight:'bold'}}>Marteau</Text>
        </View>
        <View>
       <Card style={{borderColor:'black'}}>
        
            
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
          
       
        </Card>
        </View>
       
    </View>
   
    )
}