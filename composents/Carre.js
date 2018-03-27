import React from 'react';
import {View,Text,StyleSheet} from 'react-native';
class Carre extends React.Component{
	render(){
		return(
			 <View style={styles.myCarre}>
			 	{this.props.children}
			</View>
			)
	}
}
export default Carre;

const styles =StyleSheet.create({
	myCarre:{
		height:150,
		width:150,
		backgroundColor:'orange'
		}
	})