import React, {useCallback, useEffect} from 'react'
import {View,Text,Platform, FlatList} from 'react-native'
import HeaderButton from "../components/HeaderButton"
import {
    HeaderButtons,
    Item
}from 'react-navigation-header-buttons';
import Color from "../constant/Color";
import {DrawerActions} from '@react-navigation/native'
import CategoriGridTile from "../components/CategoriGridTile"
import {CATEGORIES} from "../data/dummy-data"
import {useDispatch,useSelector} from 'react-redux'
import * as CategoriAction from '../store/actions/categori'

const AudioCategoriScreen = props => {

    const dispatch = useDispatch()

    const categori = useSelector((state) => state.categori.categori)

    const loadCategori = useCallback(async() => {
        dispatch(CategoriAction.fetchCategori())
    },[dispatch])

    useEffect(() =>{
        loadCategori()
    },[loadCategori])

    const renderGridItem = (ItemData) => {
        return(
            <CategoriGridTile 
                title={ItemData.item.title}
                onSelect={()=>{
                    props.navigation.navigate("AudioDetailScreen", {
                        categoriId:ItemData.item.id
                    });
                }}
                image={ItemData.item.urlImage}
            /> 
        )
    }

    return(
       <FlatList
       numColumns={2}
       data={!categori ? CATEGORIES : categori}
       renderItem={renderGridItem}
       keyExtractor={(item,index) => item.id}
       />
    )
}

export const AudioScreenOptions = (navData) =>{
    return{
        headerTitle:"Audio & Accessories",
        headerStyle: {
            backgroundColor: Platform.OS === "android" ? Color.primaryColor: "",
        },
        headerTintColor: Platform.OS === "android" ? "white" : Color.primaryColor,
        headerLeft: () => {
            return (
                <HeaderButtons HeaderButtonComponent={HeaderButton}>
                    <Item
                        title="Menu"
                        iconName="ios-menu"
                        onPress={() => { 
                            navData.navigation.dispatch(DrawerActions.openDrawer());
                        }}
                        color="white"
                    />
                </HeaderButtons>
            );
        },
        headerTitleStyle: {
            fontFamily: "open-sans",
        },
        headerBackTitleStyle: {
            fontFamily: "open-sans"
        },
    }
}

export default AudioCategoriScreen