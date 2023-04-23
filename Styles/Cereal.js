import {StyleSheet} from 'react-native';
import Constants from 'expo-constants';


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
		alignContent:'center',
		justifyContent: 'center',
		alignItems: 'center',
	},
    boxImgAndInfoContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-start'
        
    },
    cerealBoxImgContainer: {
        width: 170,
		height: 220,
		marginTop: 117,
		alignItems: 'center',
		//borderRadius: 20,
		//borderColor: '#1C2143',
		//borderWidth: 4,
		shadowOpacity: 0.25,
		shadowOffset: {
			width: 0,
			height: 3
		},
    },
	mediaButtons: {
        width: 155,
		height: 200,
		margin: 10,
		marginLeft: 0,
		marginRight:20,
		flexDirection: 'row',
		shadowOpacity: 0.25,
		shadowOffset: {
			width: 0,
			height: 3
		},

    },
	ratingButtons: {
        width: 170,
		height: 50,
		marginTop: 3,
		marginLeft: 13,
		alignItems:'center',
		flexDirection: 'row',
		shadowOpacity: 0.25,
		shadowOffset: {
			width: 0,
			height: 3
		},
    },
    cerealBoxImg: {
        width: '90%',
		height: '90%',
		alignItems: 'center',
		borderRadius: 3,
        overflow: "hidden",
		shadowOpacity: 0.25,
		shadowOffset: {
			width: 0,
			height: 3
		},
    },
	Like: {
        width: '150%',
		height: '105%',
		alignItems: 'center',
		borderRadius: 3,
		marginRight:10,
        overflow: "hidden",
		shadowOpacity: 0.25,
		shadowOffset: {
			width: 0,
			height: 3
		},
		resizeMode:'contain',

    },

	Comment: {
        width: '100%',
		height: '100%',
		alignItems: 'center',
		shadowOpacity: 0.25,
		shadowOffset: {
			width: 0,
			height: 3
		},
		resizeMode:'contain'
    },
	Star:{
        width: '100%',
		height: '90%',
		alignItems: 'center',
		shadowOpacity: 0.25,
		shadowOffset: {
			width: 0,
			height: 3
		},
		resizeMode:'contain'
	  },
    cerealInfoBox: {
        width: 217,
		height: 230,
		backgroundColor: '#F2EAC1',
		alignItems: 'center',
		borderRadius: 20,
		borderColor: '#1C2143',
		borderWidth: 4,
		shadowOpacity: 0.25,
		shadowOffset: {
			width: 0,
			height: 3
		},

    },
	cerealDayBox: {
		width: 400,
		height: 'auto',
		backgroundColor: '#F2EAC1',
		alignItems: 'center',
		borderRadius: 20,
		borderColor: '#1C2143',
		borderWidth: 4,
		shadowOpacity: 0.25,
		shadowOffset: {
			width: 0,
			height: 3
		},
		alignSelf: 'flex-start',
		

	},
	topCerealsBox: {
		width: 300,
		height: 300,
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
    scrollView: {
        borderRadius: 0,
        width: 400,
        alignContent: 'center',
        alignSelf: 'center',
		marginTop: 70
    },
	logo: {
		width: 250,
		height: 150,
		top: 10,
		shadowOpacity: 0.25,
		shadowOffset: {
			width: 0,
			height: 3
		}
	},
	profileBar: {
		flexDirection: 'row',
		position: 'absolute',
		
		top: 0,
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
	},
	container2: {
		flex: 1,
		justifyContent: 'center',
		paddingTop: Constants.statusBarHeight,
		backgroundColor: '#ecf0f1',

	  },
	  paragraph: {
		margin: 24,
		fontSize: 18,
		fontWeight: 'bold',
		textAlign: 'center',
	  },
	  NavContainer: {
		position: 'absolute',
		alignItems: 'center',
		bottom: 0,
	  },
	  NavBar: {
		flexDirection: 'row',
		backgroundColor: '#1C2143',
		width:'100%',
		justifyContent: 'space-evenly',
		borderRadius: 30
	  },
	  IconBehave:{
		padding: 20
	  },
	  Media:{
		width:'55%',
		height:'30%',
		flexDirection:'column',
		alignContent:'left'
	  },
	  Stars:{
		width:'28%',
		height:'100%',
		flexDirection:'column',
		alignContent:'center',
	  },
	  
	  Icon: {
		width: 50,
		height: 40,
		resizeMode: 'contain'
	}
})


export default styles;