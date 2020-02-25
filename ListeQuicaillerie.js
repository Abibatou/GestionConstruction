<Container style={{flex:1}}>
<View style={{alignItems:'center',marginBottom:20}}>
  <Text style={{fontWeight:'bold', fontSize:30,}}>Liste quincaillerie</Text>
</View>
<View>
  <FlatList
    data={[
      {key: '...............................................'},
      {key: '............................................'},
      {key: '............................................'},
      {key: '............................................'}, 
    ]}
    renderItem={({item}) => <Card style={quincaillerie.liste}><Text style={{paddingLeft:20,paddingTop:30}}>{item.key}</Text></Card>}
  />
</View>
</Container>


const quincaillerie = StyleSheet.create({
liste:{

marginLeft: 50,
marginRight: 50,
height:80,
marginBottom:40,
borderColor: 'black',
}
})