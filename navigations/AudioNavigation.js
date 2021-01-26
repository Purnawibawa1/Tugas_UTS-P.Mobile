import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'

import { createDrawerNavigator,DrawerItemList } from "@react-navigation/drawer";
import { Ionicons,Feather, FontAwesome } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {SafeAreaView, Button, View,Platform } from "react-native";

import LoginScreen from '../screens/LoginScreen'
import SignupScreen from '../screens/SignupScreen'
import AudioCategoriScreen,{AudioScreenOptions} from '../screens/AudioCategoriScreen'
import Color from "../constant/Color"
// import FavoriteScreen, {FavoriteScreenOption} from '../screens/FavoriteScreen'
// import FilterScreen, {FilterScreenOption} from '../screens/FilterScreen'
import ProfileScreen, {ProfileScreenOption} from '../screens/ProfileScreen'
import AudioDetailScreen, {AudioDetailScreenOption}  from '../screens/AudioDetailScreen'

const LoginStack = createStackNavigator()

const NavigationLogin = () => {
    return(
        <LoginStack.Navigator headerMode="none">
            <LoginStack.Screen name="LoginScreen" component={LoginScreen}/>
            <LoginStack.Screen name="SignupScreen" component={SignupScreen}/>
            <LoginStack.Screen name="container" component={ProfileTabNavigator}/>
        </LoginStack.Navigator>
    )
}

const Stack = createStackNavigator()

const Navigations = () => {
    return(
        <Stack.Navigator>
            <Stack.Screen name="AudioCategoriScreen" component={AudioCategoriScreen} options={AudioScreenOptions}/>
            <Stack.Screen name="AudioDetailScreen" component={AudioDetailScreen} options={AudioDetailScreenOption}
      />
        </Stack.Navigator>
    )
}


//stack
const ProfileStack = createStackNavigator()
const ProfileNavigation = () =>{
    return(
      <ProfileStack.Navigator>
          <ProfileStack.Screen name="Profiles" component={ProfileScreen} options={ProfileScreenOption} />
      </ProfileStack.Navigator>
    )
}

// const FilterStack = createStackNavigator();
// const filterNavigations = () => {
//   return (
//     <FilterStack.Navigator>
//       <FilterStack.Screen name="FilterStack" component={FilterScreen} options={FilterScreenOption} />
//     </FilterStack.Navigator>
//   );
// };

const StackProfile = createStackNavigator();
const ProfileNavigator = () => {
  return (
    <StackProfile.Navigator>
      <StackProfile.Screen name="ProfileScreen" component={ProfileScreen} options={ProfileScreenOption} />
      <StackProfile.Screen
        name="AudioDetailScreen"
        component={AudioDetailScreen}
      />
    </StackProfile.Navigator>
  );
};
//end stack


const Tab = createBottomTabNavigator();
const ProfileTabNavigator = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeColor: Color.accentColor,
        barStyle: {
          backgroundColor: Color.primaryColor,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={MainNavigator}
        options={{
          tabBarIcon: (tabInfo) => {
            return (
              <Ionicons
                name="ios-home"
                size={25}
                color={Color.primaryColor}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name=" Profile"
        component={ProfileNavigator}
        options={{
          tabBarIcon: (tabInfo) => {
            return (
              <FontAwesome name="user" size={25} color={Color.primaryColor} />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};


const Drawer = createDrawerNavigator();
const MainNavigator = () => {
  return (
    <Drawer.Navigator 
      drawerContent={(props) => {
      return (
        <View style={{ flex: 1, padding: 20 }}>
          <SafeAreaView forceInset={{ top: "always", horizontal: "never" }}>
            <DrawerItemList {...props} />
            <Button
              title="Logout"
              color={Color.primary}
              onPress={() => {
                 props.navigation.navigate("LoginScreen");
              }}
            />
          </SafeAreaView>
        </View>
      );
    }}
    >
      <Drawer.Screen name="Home" component={Navigations}  options={{
          drawerIcon: (props) => (
            <Ionicons
              name={Platform.OS === "android" ? "md-home" : "ios-home"}
              size={23}
              color={props.color}
            />
          ),
        }}/>
        
        {/* <Drawer.Screen name="Filter" component={filterNavigations} options={{
          drawerIcon: (props) => (
            <Ionicons
              name={Platform.OS === "android" ? "md-color-filter" : "ios-color-filter"}
              size={23}
              color={props.color}
            />
          ),
        }}/> */}
        <Drawer.Screen name="Profile" component={ProfileNavigation}  options={{
          drawerIcon: (props) => (
            <Feather name="user-check" size={23}  color={props.color} />
          ),
        }}/>
        
      </Drawer.Navigator>
  );
};

export default Navigator = () => {
    return(
        <NavigationContainer>
            <NavigationLogin/>
        </NavigationContainer>
    )
}