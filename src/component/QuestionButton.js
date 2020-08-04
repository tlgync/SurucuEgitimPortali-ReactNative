import React, {useContext} from 'react'
import { View, TouchableOpacity, Text, Image, StyleSheet, Dimensions } from 'react-native'
import Context from '../context/store';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const QuestionButton = props => {
    const {state, dispatch} = useContext(Context);
    return (
        <View style={styles.container} >
            <TouchableOpacity
                style={
                    [state.right === 0 ?
                        { backgroundColor: props.buttonData.correct === true ? "#65dde6" : "tomato" }
                       : null, styles.btn]
                }
                onPress={()=>props.setInd(props.buttonData.correct)} >
                    {props.buttonData.Text !== undefined ? 
                    <Text style={styles.soru}>
                    {props.buttonData.Text}
                    </Text>:
                    <View>
                        {console.log(props.buttonData.img)}
                        <Image style={styles.img} source={{uri:props.buttonData.img}} />
                    </View>
                }
                
            </TouchableOpacity>
        </View>
        
    )
}
export { QuestionButton }

const styles = StyleSheet.create({
    container: {
        
        marginTop: 5,
        justifyContent:"center",
        alignItems:"center",
        marginLeft: 15
    },
    img:{
        width:75,
        height:75,
        justifyContent:"center",
        alignItems:"center"
    },
    btn:{
        flexDirection: 'row',
        width: windowWidth * 0.3,
        height: windowWidth * 0.25,
        margin: 25,
        justifyContent:"center",
        alignItems:"center",
        borderWidth: 1,
        borderRadius: 5,
        borderColor: 'tomato',
        
        
    },
    soru: {
        fontSize:14,
        fontFamily: 'Roboto-Medium'
    }
})