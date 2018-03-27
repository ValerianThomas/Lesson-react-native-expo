import React from 'react';
import {View,Text,StyleSheet} from 'react-native';
class Card extends React.Component{
	render(){
		return(
			 <View style={styles.card}>
			 	<Text>{this.props.cardName}</Text>
			</View>
			)
	}
}
export default Card;

const styles=StyleSheet.create({
	card:{
		width:350,
		height:45,
		backgroundColor:'#f4f4f4',
		elevation:15
	}
	})