import React from 'react';
import {View,Text,TouchableOpacity,StyleSheet} from 'react-native';
class CustomButton extends React.Component{
	render(){
		return(
			 <TouchableOpacity onPress={this.props.onPress} style={styles.buttonStyle}>
			 	<Text>Touch Me</Text>
			</TouchableOpacity>
			)
	}
}
export default CustomButton;

const styles=StyleSheet.create({
	buttonStyle:{
		width:'100%',
		height:35,
		backgroundColor:'orange',
		alignItems:'center',

	},

	})