import {StyleSheet} from 'react-native';

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
		}
	},
	container: {
		backgroundColor:'#2C3440',
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center'
	},
	inputBox: {
		width: '90%',
		backgroundColor: '#F2EAC1',
		alignItems: 'center',
		borderRadius: 20,
		borderColor: '#1C2143',
		borderWidth: 2,
		shadowOpacity: 0.25,
		shadowOffset: {
			width: 0,
			height: 3
		}
	},
	logo: {
		width: 280,
		height: 40,
		shadowOpacity: 0.25,
		shadowOffset: {
			width: 0,
			height: 3
		}
	},
	profileBar: {
		flexDirection: 'row',
		position: 'absolute',
		top: 20,
		alignItems: 'center'
	},
	profileLogo: {
		backgroundColor: '#7F7F7F',
		width: 50,
		height: 50,
		borderRadius: 25
	},
	tabBar: {
		bottom: 0,
		position: 'absolute'
	},
	textInput: {
		height: 40,
		width: 200,
		fontSize: 20,
		backgroundColor:'#FFF',
		borderRadius: 20,
		borderColor: '#1C2143',
		borderWidth: 0.5,
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