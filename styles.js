
const React = require('react-native')
const {StyleSheet} = React
const constants = {
    actionColor: '#24CE84'
  };
  
const styles = StyleSheet.create({
    TopLeft:
    {flex:2, backgroundColor: '#F0F0F1', borderStyle: "solid", borderWidth:1, marginTop:10,marginLeft:10,
     borderLeftColor:'#F0F0F1',borderTopColor:'#F0F0F1',borderRightColor:'#4F80E1',borderBottomColor:'#4F80E1'},
  
    TopRight:{flex:2, backgroundColor: '#F0F0F1',borderStyle: "solid", borderWidth:1,  marginTop:10,marginRight:10,
    borderRightColor:'#F0F0F1',borderTopColor:'#F0F0F1',borderLeftColor:'#4F80E1',borderBottomColor:'#4F80E1'},
  
    BottomRight:{flex:2, backgroundColor: '#F0F0F1',borderStyle: "solid", borderWidth:1,  marginBottom:10,marginRight:10,
      borderLeftColor:'#4F80E1',borderTopColor:'#4F80E1',borderRightColor:'#F0F0F1',borderBottomColor:'#F0F0F1'},
  
    BottomLeft:{flex:2, backgroundColor: '#F0F0F1',borderStyle: "solid", borderWidth:1,  marginBottom:10,marginLeft:10,
      borderRightColor:'#4F80E1',borderTopColor:'#4F80E1',borderLeftColor:'#F0F0F1',borderBottomColor:'#F0F0F1'},
  
    homeScreenImages:{ height: 75 ,width: 75, zIndex:3, margin:'auto' },
  
    homeScreenButtons:{margin:'auto'},
  
  
    container: {
      flex: 1,
      flexDirection:'column',
      backgroundColor: '#F0F0F1',
      alignItems: 'center',
      justifyContent: 'center',
    },

    TextColor:{
      color:'#292C44',
      textAlign: 'center',
      justifyContent:'center',
      marginTop:30
    },

    homeScreenImages:{
      width:undefined,
      height:undefined,
      flex:1,
      zIndex:10
    },
      center: {
        textAlign: 'center',
      },
      actionText: {
        color: '#f0f0f1',
        fontSize: 16,
        textAlign: 'center',
      },
      action: {
        backgroundColor: '#4F80E1',
        borderColor: 'transparent',
        borderWidth: 1,
        paddingLeft: 16,
        paddingTop: 14,
        paddingBottom: 16,
      },
      ScheduleMenuOption: {
        flex:5,
        flexDirection :'row',
      },
      EditScheduleTable:{
        flexDirection :'row',
      },
      padding:{
        marginTop:25,
      },
      TableBoarder:{
        borderWidth:4,
        borderColor:'#292C44',
        backgroundColor:'#F0F0F1',
        borderRadius:20,
        overflow:'hidden',
        margin:10,
        paddingBottom:30,
        paddingRight:20
      },
      workoutContainer:{
        padding:30,
        flexDirection:'row',
        backgroundColor: '#292C44',
        alignItems: 'center',
        justifyContent: 'center',
      },
      workoutBackground:{
        alignItems: 'stretch',
        borderWidth:4,
        borderColor:'#292C44',
        backgroundColor:'#F0F0F1',
        borderRadius:20,
        overflow:'hidden',
        margin:10,
        paddingBottom:30,
        paddingRight:20,
      },

      messageBox:{
        borderColor:'#292C44',
        backgroundColor:'#F0F0F1',
        width:300,
        paddingTop:10,
        paddingBottom:20,
        paddingLeft:20,
        paddingRight:20, 
        borderRadius:10
    },
    messageBoxTitleText:{
        color: '#292C44',
        fontWeight:'bold',
        textAlign:'center',
        fontSize:20,
        marginBottom:10
    },
    messageBoxBodyText:{
        textAlign:'center',
        color: '#292C44',
        fontSize:16
    }
  });
  
module.exports = styles
module.exports.constants = constants;