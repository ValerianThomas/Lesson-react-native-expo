import React from 'react';
import {View,Text,StyleSheet} from 'react-native';
class Header extends React.Component{
	render(){
		return(
			 <View style={styles.header}>
			 	<Text>{this.props.headerTitle}</Text>
			</View>
			)
	}
}
export default Header

const styles=StyleSheet.create({
	header:{
		height:60,
		width:'100%',
		backgroundColor:'grey',
		alignItems:'center',
		justifyContent:'center'
	}
	})