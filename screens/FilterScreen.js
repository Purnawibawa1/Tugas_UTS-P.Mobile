import { DrawerActions } from '@react-navigation/native'
import React from 'react'
import {View, Text, Platform} from 'react-native'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import HeaderButton from '../components/HeaderButton'
import Color from '../constant/Color'

const FilterScreen = (props) =>{
    return(
       <View>
           <Text>FilterScreen</Text>
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

export default FilterScreen