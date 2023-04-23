import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
	appButtonContainer: {
		width: 75,
		height:35,
		backgroundColor: '#1C2143',
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 20,
		shadowOpacity: 0.25,
		shadowOffset: {
			width: 0,
			height: 3
		}
	},
	appButtonText: {
		fontFamily: 'SemiBold15',
		fontSize: 20,
		color: '#FFF'
	},
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
		width: '85%',
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
		height: 50,
		position: 'absolute',
		top: 50,
		shadowOpacity: 0.25,
		shadowOffset: {
			width: 0,
			height: 3
		}
	},
	textInput: {
		height: 40,
		width: 200,
		fontSize: 20,
		fontFamily: 'SemiBold15',
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
		fontFamily: 'SemiBold20',
		color: '#1C2143',
		shadowOpacity: 0.25,
		shadowOffset: {
			width: 0,
			height: 3
		}
	}
})

export default styles;