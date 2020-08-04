import React,{useContext} from 'react'
import { View,Text, TouchableOpacity, SafeAreaView, StyleSheet, StatusBar, Dimensions } from 'react-native'
import Context from '../context/store';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height

const FinishScreen = props => {
    const {state, dispatch} = useContext(Context);
    const goBack = () => {
        dispatch({type:"TOTAL_RESET"})
        props.navigation.navigate("HomeScreen")
    }
    return(
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle="dark-content" />
            <Text style={styles.true}>Toplam Doğru: {state.total.falses}</Text>
            <Text style={styles.false}>Toplam Yanlış: {state.total.trues}</Text>
            <TouchableOpacity style={styles.backBtn} onPress={goBack}>
                <Text style={styles.backText}>Geri</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}
export {FinishScreen}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        textAlign: 'center',
        alignItems: 'center'
    },
    true:{
        fontFamily: 'Roboto-Medium',
        fontSize: 21,
        color: 'tomato',
        marginBottom: 10
    },
    false:{
        fontFamily: 'Roboto-Medium',
        fontSize: 21,
        color: 'tomato',
        marginBottom: 10
    },
    backText:{
        fontFamily: 'Roboto-Medium',
        fontSize: 21,
        color: 'tomato',
        textAlign: 'center',
        
    },
    backBtn:{
        marginTop:100,
        borderWidth: 1,
        borderColor:'tomato',
        width: windowWidth * 0.5,
        height: windowWidth * 0.1,
        justifyContent: 'center'
        
    }
})