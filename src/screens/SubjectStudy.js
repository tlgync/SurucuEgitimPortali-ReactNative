import React from 'react'
import { SafeAreaView, View, Text, TouchableOpacity, Dimensions, StyleSheet } from 'react-native'

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const SubjectStudy = props => {
    const getSubject = () => {
        props.navigation.navigate("ilk yardım")
    }
    const getTrafikvecevre = () => {
        props.navigation.navigate("trafik ve çevre")
    }
    const getMotor = () => {
        props.navigation.navigate("motor ve araç tekniği")
    }
    const getTrafikadabi = () => {
        props.navigation.navigate("trafik adabı")
    }
    
    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.btnContainer}>
                <TouchableOpacity style={styles.btn} onPress={getSubject}>
                    <Text style={styles.btnText}>İlk Yardım</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.btnContainer}>
                <TouchableOpacity style={styles.btn} onPress={getTrafikvecevre}>
                    <Text style={styles.btnText}>Trafik ve Çevre</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.btnContainer}>
                <TouchableOpacity style={styles.btn} onPress={getMotor}>
                    <Text style={styles.btnText}>Motor ve Araç Tekniği</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.btnContainer}>
                <TouchableOpacity style={styles.btn} onPress={getTrafikadabi}>
                    <Text style={styles.btnText}>Trafik Adabı</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}
export {SubjectStudy} 

const styles = StyleSheet.create({
    container: {
        flex:1,
        width: windowWidth,
        height: windowHeight,
        flexDirection: 'column',
        backgroundColor: '#fff'
    },
    btnContainer:{
        borderColor: 'tomato',
        fontFamily: 'Roboto-Medium',
        alignItems: 'center',
        textAlign: 'center',
        marginVertical: 20
        
    },
    btn:{
        borderWidth: 1,
        borderRadius: 5,
        borderColor: 'tomato',
        width: windowWidth * 0.8,
        height: windowHeight * 0.05,
        alignItems: 'center',
        justifyContent: 'center',
    },
    btnText: {
        justifyContent: 'center',
        alignItems: 'center',
        fontFamily: 'Roboto-Black',
        fontSize: 15,
        color: 'tomato',
        letterSpacing: 1.3
    }
})