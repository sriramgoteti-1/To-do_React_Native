import React from "react";
import {View, Text, StyleSheet ,TouchableOpacity} from "react-native";

const Task=()=>{
    return(
        <View style={styles.item}>
            <View style={styles.itemLeft}>
            <View style={styles.square}></View>
            <Text style={styles.text}>This is a task</Text>
            </View>
            <View style={styles.circular}></View>
        </View>
    )
}

const styles=StyleSheet.create({
    item:{
        backgroundColor:"#fff",
        padding: 15,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20
    },
    itemLeft:{
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap'
    },
    square:{
        width: 24,
        height:24,
        backgroundColor:"grey",
        opacity: 0.4,
        borderRadius: 5,
        marginRight: 15,
    },
    text:{
        maxWidth: '80%'
    },
    circular:{
        width: 12,
        height: 12,
        borderColor:"grey",
        borderWidth: 2,
        borderRadius: 5,
    }
});
export default Task;