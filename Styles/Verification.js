import {StyleSheet} from 'react-native';

import * as Font from 'expo-font';
let customFonts = 
{
	'SemiBold15': require('../assets/Fonts/SharpGroteskSemiBold15.otf'),
	'Book20' : require('../assets/Fonts/SharpGroteskBook20.otf'),
	'SemiBold20' : require('../assets/Fonts/SharpGroteskSemiBold20.otf'),
}

const styles = StyleSheet.create({
	background: {
		height: '100%',
		width: '100%',
		position: 'absolute',
	},
	button: {
		backgroundColor: '#1C2143',
		borderRadius: 20,
		shadowOpacity: 0.25,
		shadowOffset: {
			width: 0,
			height: 3
		},
        height: 45,
        width: 100,
        justifyContent: 'center'
	},
	container: {
		backgroundColor:'#2C3440',
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		fontFamily: 'Book20'
	},
	inputBox: {
		width: '75%',
		backgroundColor: '#F2EAC1',
		alignItems: 'center',
		borderRadius: 20,
		borderColor: '#1C2143',
		borderWidth: 4,
		shadowOpacity: 0.25,
		shadowOffset: {
			width: 0,
			height: 3
		}
	},
	logo: {
		width: 300,
		height: 200,
		position: 'absolute',
		top: 50,
		shadowOpacity: 0.25,
		shadowOffset: {
			width: 0,
			height: 3
		}
	},
	textInput: {
		height: 55,
		width: 220,
		fontSize: 20,
		backgroundColor:'#FFF',
		borderRadius: 25,
		borderWidth: 0,
		textAlign: 'center',
		shadowOpacity: 0.25,
		shadowOffset: {
			width: 0,
			height: 3
		}
	},
	title: {
		fontSize: 40,
		fontWeight: 'bold',
		color: '#1C2143',
		shadowOpacity: 0.25,
		shadowOffset: {
			width: 0,
			height: 3
		}
	}
})

export default styles;