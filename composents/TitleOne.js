import React from 'react';
import {View,Text} from 'react-native';
 class TitleOne extends React.Component{
	render(){
		return(
			 <View>
			 	<Text>
			 	{this.props.monText}
			 	</Text>
			
			</View>
			)
		}
	}

export default TitleOne;