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
        justifyContent: 'flex-start',
        
    },
	mediaButtons: {
		justifyContent: 'center',
		alignItems: 'center',
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
		alignItems:'center',
		flexDirection: 'row',
		shadowOpacity: 0.25,
		shadowOffset: {
			width: 0,
			height: 3
		},
    },
    cerealBoxImg: {
        width: 150,
		height: 210,
		alignItems: 'center',
		borderRadius: 8,
		shadowOpacity: 0.5,
		shadowOffset: {
			width: 0,
			height: 3
		},
    },
	Like: {
        width: 50,
		height: 50,
		alignItems: 'center',
		borderRadius: 3,
		shadowOpacity: 0.25,
		shadowOffset: {
			width: 0,
			height: 3
		},
    },

	Comment: {
        width: 50,
		height: 50,
		alignItems: 'center',
		shadowOpacity: 0.25,
		shadowOffset: {
			width: 0,
			height: 3
		},
    },
	Star:{
        width: 40,
		height: 40,
		alignItems: 'center',
		shadowOpacity: 0.25,
		shadowOffset: {
			width: 0,
			height: 3
		},
	  },
    cerealInfoBox: {
        width: 217,
		height: 218,
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
		width: '95%',
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
	},
	reviewBox: {

		flexDirection: 'column',
		backgroundColor: "#1C2143",
		borderColor: "#F2EAC1",
		borderWidth: 3,
		borderRadius: 10,
		width: '95%',
		//height: 'auto',
		alignItems: 'center',
		borderRadius: 20,
		shadowOpacity: 0.25,
		shadowOffset: {
			width: 0,
			height: 3
		},
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
		top: 20,
		alignItems: 'center'
	},
	logoutButton: {
		width: 50,
		height: 50,
		borderRadius: 25,
		tintColor: 'white',
		shadowOpacity: 0.25,
		shadowOffset: {
			width: 0,
			height: 3
		}
	},
	tabBar: {
		bottom: 0,
		position: 'absolute'
	},
	textInput: {
		height: 150,
		width: 300,
		fontSize: 20,
		backgroundColor:'#FFF',
		borderRadius: 10,
		borderColor: '#1C2143',
		borderWidth: 3,
		textAlign: 'center',
		shadowOpacity: 0.25,
		shadowOffset: {
			width: 0,
			height: 3
		},
		alignSelf: 'center'
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
	},
	favBar: {
        width: '90%',
        height: 40,
        fontSize: 30,
        fontFamily: 'SemiBold15',
        backgroundColor: '#F2EAC1',
        alignItems: 'center',
        textAlign: 'center',
        borderRadius: 20,
        borderColor: '#1C2143',
        borderWidth: 2,
        shadowOpacity: 0.25,
        shadowOffset: {
            width: 0,
            height: 3
        }
    },
    barText: {
        width: '90%',
        height: 40,
        fontSize: 30,
        fontFamily: 'SemiBold15',
        alignItems: 'center',
        textAlign: 'center',
		justifyContent: 'center',
		alignContent: 'center',
		verticalAlign: 'middle',
		alignSelf: 'center'
    },
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
		},
		alignSelf: 'center'
	},
	appButtonText: {
		fontFamily: 'SemiBold15',
		fontSize: 20,
		color: '#FFF'
	}
})


export default styles;