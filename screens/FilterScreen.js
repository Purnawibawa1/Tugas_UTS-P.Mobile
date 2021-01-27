import { DrawerActions } from '@react-navigation/native'
import React, {useState, useEffect, useCallback} from 'react'
import {View, Text, Platform, Switch, StyleSheet} from 'react-native'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import HeaderButton from '../components/HeaderButton'
import Color from '../constant/Color'
import { CATEGORIES } from '../data/dummy-data'
import {useDispatch} from 'react-redux'
import * as CategoriAction from "../store/actions/categori"

const FilterSwitch = props => {
    return(
        <View style={styles.filterContainer}>
            <Text>{props.label}</Text>
            <Switch
                trackColor={{true:Color.primaryColor}}
                thumbColor = {Platform.OS == 'android' ? Color.primaryColor: ""}
                value={props.state}
                onValueChange={props.onChange}
            />
        </View>
    )
}

const FilterScreen = (props) =>{
    const dispatch = useDispatch()
    const [isGlutenFree, setIsisGlutenFree] = useState(null)
    const cat = CATEGORIES
    const filterCategori = (id) =>{
        const tes = cat.filter(categor => categor.id === id)
        if(isGlutenFree == null && tes[0].id==id){
            setIsisGlutenFree(tes[0].id)
        }else{
            setIsisGlutenFree(null)
        }
    }

    const saveFilters = useCallback(() =>{
        const appliedFilters = {
            filter: isGlutenFree
        }
       dispatch(CategoriAction.filterCategori(appliedFilters)) 
    }, [isGlutenFree])

   useEffect(() =>{
        props.navigation.setOptions({
            headerRight:()=>{
                return(
                    <HeaderButtons HeaderButtonComponent={HeaderButton}>
                        <Item
                            title="Menu"
                            iconName="ios-save"
                            onPress={saveFilters}
                            color="white"
                        />
                    </HeaderButtons>
                )
            }
        })      
   }) 

    return(
       <View style={styles.screen}>
           <Text style={styles.title}>Audio Category Filter</Text>
            {cat.map(cat =>(
                <FilterSwitch
                   key={cat.id}
                   label={cat.title}
                   state={cat.id === isGlutenFree ? true :false}
                    onChange={(newValue) => filterCategori(cat.id)}
                />
            ))}
       </View>
    )
}

export const FilterScreenOption = (navData) => {
    return {
        headerTitle: "Filter Screen",
        headerStyle: {
            backgroundColor: Platform.OS === "android" ? Color.primaryColor : "",
        },
        headerTintColor: Platform.OS === 'android' ? "white" : Color.primaryColor,
        headerLeft: () => {
            return(
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
            fontFamily: "open-sans-bold",
        },
        headerBackTitleStyle:{
            fontFamily: "open-sans"
        },
    };
};

const styles = StyleSheet.create({
    screen:{
        flex: 1,
        alignItems: "center"
    },
    title:{
        fontFamily:"open-sans-bold",
        fontSize: 22,
        marginTop: 30,
        margin: 20,
        textAlign: 'center'
    },
    filterContainer:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: "center",
        width: '80%',
        marginVertical: 10
    }
})

export default FilterScreen