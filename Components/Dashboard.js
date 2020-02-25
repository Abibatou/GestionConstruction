import React from 'react';
import {Text, View, Content, Left, Right, Card, Icon} from 'native-base';
import Navbar from './Navbar';
import {StyleSheet} from 'react-native';



export default function Dashboard(){
    return(
        <View>
            <View>
            <Navbar/>
            </View>
            <View style={{marginTop:60}}>
            <View style={{marginBottom:30,  alignItems:'center'}}>
                <Text style={{fontSize:30, fontWeight:'bold'}}>Solde</Text>
                <Card style={{paddingTop:10, paddingBottom:10, paddingLeft:40, paddingRight:40, borderColor:'#000000'}}>
                <Text>xxxxxxxxx</Text></Card>
            </View>
            
                <View style={{flexDirection:'row', justifyContent:'space-around'}}>
                    <Card style={[tableau.ciment,{ marginLeft:10, borderColor:'#000000'}]} >
                        <Text style={{paddingLeft:70, fontWeight:'bold'}}>2T</Text>
                    </Card>
                    <Card  style={[tableau.ciment, {marginLeft:10,marginRight:10, borderColor:'#000000'}]}>
                        <Text style={{paddingLeft:70, fontWeight:'bold'}}>XX</Text>
                    </Card>
                </View>
                <View style={{flexDirection:'row', justifyContent:'space-around'}}>
                    <Text style={{fontWeight:'bold'}}>de ciment</Text>
                    <Text style={{fontWeight:'bold'}}>..........</Text>
                </View>
            </View>
               
                <View style={{flexDirection: 'row', justifyContent:'space-around', alignItems:'center',marginTop:50, marginRight:40, marginLeft:40}}>
                    <View>
                        <Icon name='line-chart' type='FontAwesome' style={{fontSize: 120}}></Icon>
                    </View>
                    <View>
                        <Icon name='bar-chart' type='FontAwesome' style={{fontSize: 120, marginLeft: 30}} ></Icon>
                    </View>
                </View>
                
               
            
        </View>
    )
}

const tableau = StyleSheet.create({
    
    ciment:{
        flex:1,
        paddingTop:10,
        paddingBottom:10,
    },
    contenu:{
        paddingLeft:100,
        fontWeight:'bold',
    }
})