import React from 'react'
import {View, Text, Platform} from 'react-native'
import Color from '../constant/Color'

const BasketScreen = (props) =>{
    return(
       <View>
           <Text>BasketScreen</Text>
       </View>
    )
}

export const BasketScreenOption = (navData) => {
    return{
        headerTitle: "My Basket", 
        headerStyle: {
            backgroundColor: Platform.OS === "android" ? Color.primaryColor : "",
        },
        headerTintColor: Platform.OS === "android" ? "white" : Color.primaryColor,
        headerLeft: null,
        headerTitleStyle: {
            fontFamily: "open-sans-bold",
        },
        headerBackTitleStyle: {
            fontFamily: "open-sans"
        },
    };
};

export default BasketScreen