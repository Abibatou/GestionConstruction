<View>
      <View>
        <Text style={{fontWeight: 'bold', fontSize:30, marginBottom:10, marginLeft:40}}>Plan</Text>
      </View>
      <View >
        <Card style={{marginLeft:20, marginRight:20}}>
          <View style={plan.decoupage}>
            <Card style={{flex:1, marginRight:20, alignItems:'center', height:100,paddingTop:40}}>

              <Text >ch1</Text>
            </Card>
            <Card style={{flex:1, marginLeft:20,  alignItems:'center',  height:100,paddingTop:40}}>
              <Text>ch1</Text>
            </Card>
          </View>
          <View style={plan.decoupage}>
            <Card style={[plan.partie, {marginRight:40}]}>

              <Text>ch1</Text>
            </Card>
            <Card style={[plan.partie, {marginleft:40}]}>
              <Text>ch1</Text>
            </Card>
          </View>
        </Card>
      </View>
      <View style={{marginLeft:20}}>
        <View style={[plan.align, {marginTop:30}]}>
          <Icon name='checkmark-circle-outline' ></Icon>
          <Text style={plan.dessin}>Construction étage</Text>
        </View>
        <View style={plan.align}>
          <Icon name='close-circle-outline' ></Icon>
          <Text style={plan.dessin}>Fondation</Text>
        </View>
        <Icon name='close-circle-outline'></Icon>
        
      </View>
    </View>
  
  


const plan = StyleSheet.create({
  decoupage:{
    flex:1,
     flexDirection:'row', 
     marginLeft:50,
      marginRight:50,
       marginTop:40,
  },
  partie:{
    flex:1, 
    marginTop:40,
    marginBottom:40, 
    alignItems:'center',
    height:100,
    paddingTop:40
  },
  align:{
    flexDirection:"row",
   
  },
  dessin:{
    marginTop:5, 
    fontWeight:'bold',
    marginLeft:10,

  }
});