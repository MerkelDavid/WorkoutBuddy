
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

    navbar: {
        alignItems: 'center',
        backgroundColor: '#fff',
        borderBottomColor: '#eee',
        borderColor: 'transparent',
        borderWidth: 1,
        justifyContent: 'center',
        height: 44,
        flexDirection: 'row'
      },
      navbarTitle: {
        color: '#444',
        fontSize: 16,
        fontWeight: "500"
      },
      statusbar: {
        backgroundColor: '#fff',
        height: 22,
      },
      center: {
        textAlign: 'center',
      },
      actionText: {
        color: '#fff',
        fontSize: 16,
        textAlign: 'center',
      },
      action: {
        backgroundColor: constants.actionColor,
        borderColor: 'transparent',
        borderWidth: 1,
        paddingLeft: 16,
        paddingTop: 14,
        paddingBottom: 16,
      },
  });
  
module.exports = styles
module.exports.constants = constants;