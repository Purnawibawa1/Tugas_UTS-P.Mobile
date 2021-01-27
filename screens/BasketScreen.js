import React from 'react'
import {View, Text, Platform, FlatList, StyleSheet} from 'react-native'
import { Item } from 'react-navigation-header-buttons'
import Color from '../constant/Color'
import {CATEGORIES, BASKET} from "../data/dummy-data"
import AudioDetailComponents from "../components/AudioDetailComponents"
import AudioDetailScreen from "../screens/AudioDetailScreen"

const BasketScreen = (props) =>{
    const basket = BASKET.map((pl) => CATEGORIES.filter((cat) => cat.id === pl.id_categori))
    
    return(
        <FlatList
           data={basket}
            keyExtractor={(item) => item[0].id}
            renderItem={(itemData)=>(
                <AudioDetailComponents
                    image={itemData.item[0].urlImage}
                    title={itemData.item[0].title}
                    onSelect={()=>{
                        props.navigation.navigate("AudioDetailScreen", {
                            categoriId:itemData.item[0].id
                        });
                    }}
                />
            )}
        />
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