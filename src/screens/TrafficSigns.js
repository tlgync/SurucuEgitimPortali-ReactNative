import React from 'react'
import { SafeAreaView, View, Text,TouchableOpacity, StyleSheet,Dimensions } from 'react-native'

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height

const TrafficSigns = props => {
    const getTrafficSigns = () => {
        props.navigation.navigate("Tehlike Uyari İşaretleri")
    }
    const getTrafficSignsTwo = () => {
        props.navigation.navigate("TrafficScreenTwo")
    }
    const getTrafficSignsThree = () => {
        props.navigation.navigate("TrafficScreenThree")
    }
    const getTrafficSignsFour = () => {
        props.navigation.navigate("TrafficScreenFour")
    }
    const getTrafficSignsFive = () => {
        props.navigation.navigate("TrafficScreenFive")
    }
    return(
        <SafeAreaView style={styles.container}>
            <View>
                <TouchableOpacity style={styles.btn} onPress={getTrafficSigns}>
                    <Text style={styles.btnText}>Trafik Uyarı İşaretleri</Text>
                </TouchableOpacity>
            </View>
            <View>
                <TouchableOpacity style={styles.btn} onPress={getTrafficSignsTwo}>
                <Text style={styles.btnText}>Trafik Tanzim İşaretleri</Text>
                </TouchableOpacity>
            </View>
            <View>
                <TouchableOpacity style={styles.btn} onPress={getTrafficSignsThree}>
                <Text style={styles.btnText}>Trafik Bilgi İşaretleri</Text>
                </TouchableOpacity>
            </View>
            <View>
                <TouchableOpacity style={styles.btn} onPress={getTrafficSignsFour}>
                <Text style={styles.btnText}>Durma ve Park Etme İşaretleri</Text>
                </TouchableOpacity>
            </View>
            <View>
                <TouchableOpacity style={styles.btn} onPress={getTrafficSignsFive}>
                <Text style={styles.btnText}>Yatay İşaretleme</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}
export {TrafficSigns} 


const styles = StyleSheet.create({
    container: {
        flex:1,
        width: windowWidth,
        height: windowHeight,
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginTop: 100,
        
    },
    btn: {
        width: windowWidth * 0.8,
        borderWidth:1,
        marginBottom: 20,
        padding: 15,
        borderRadius: 5,
        borderColor: 'tomato'
    },
    btnText:{
        textAlign: 'center',
        fontFamily: 'Roboto-Black',
        fontSize: 13,
        color: 'tomato',
        letterSpacing: 0.5
    }
})