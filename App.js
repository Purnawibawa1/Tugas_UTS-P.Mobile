import * as React from 'react';
import {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import * as Font from 'expo-font'
import {AppLoading} from 'expo'
import {enableScreens} from 'react-native-screens'
import Navigation from './navigations/AudioNavigation'

import CategoriReducer from './store/reducer/categori'
import specificationReducer from './store/reducer/detail' 
//redux
import {createStore, combineReducers, applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import ReduxThunk from 'redux-thunk'

const rootReducer = combineReducers({
    categori:CategoriReducer,
    specification:specificationReducer
})

const store = createStore(rootReducer,applyMiddleware(ReduxThunk))


enableScreens()

const fetchFonts = () => {
  return Font.loadAsync({
    "open-sans":require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold":require("./assets/fonts/OpenSans-Bold.ttf"),
  })
}

export default function App() {
  const [fontLoaded,setFontLoaded] = useState(false)
  if(!fontLoaded){
    return(
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setFontLoaded(true)}
        onError={(err) =>{
          console.log(err)
        }}
      />
    )
  }

  return(
    <Provider store={store}>
    <Navigation/>
    </Provider>  
  ) 
}