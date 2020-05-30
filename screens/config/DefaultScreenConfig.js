import Colors from '../../constants/Colors'

export const defaultScreenOptions = {

    headerBackTitleStyle: {
        color: Platform.OS === 'android' ? 'white' : Colors.primaryColor
    },
    headerStyle: {
        backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : 'white',

    },
    headerTitleStyle: {
        fontFamily: 'open-sans-bold',
        color: Platform.OS === 'android' ? 'white' : Colors.primaryColor
    },
}