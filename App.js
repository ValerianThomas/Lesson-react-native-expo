import React from 'react';
import {View,Text,StyleSheet,ScrollView} from 'react-native';
import Header from './composents/Header.js';
import Card from './composents/Card.js';
import CustomButton from './composents/CustomButton.js';
class App extends React.Component{
	constructor(props){
	super(props);
	this.state={randomName:""}
}

Randomizer(){
	const tableau = ["hello","bonjour","Ca va","blala"];
	var number= Math.floor(Math.random()*3);
	this.setState({randomName:tableau[number]})
}
	render(){
		return(
			 <View style={styles.main}>
			 	<Header headerTitle={"Grocery List"}/>
			 	
			 		
			 		<Card cardName={this.state.randomName}/>
			 	
			 	
			 	<View style={styles.button}>
			 		<CustomButton onPress={this.Randomizer.bind(this)} />
			 	</View>
			</View>
		
			);
	}

}
export default App;

const styles = StyleSheet.create({
	main:{
		backgroundColor:'#f9f9f9',
		flex:1,
		alignItems:'center',
	},
	button:{
		position:'absolute',
		bottom:0,
		left:0,
		right:0
	},
	scroll:{flex:1}
})
