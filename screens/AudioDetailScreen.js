import React,{useState, useEffect, useCallback} from 'react'
import {View,Text, Platform, ScrollView, Image, StyleSheet} from 'react-native'
import HeaderButton from "../components/HeaderButton"
import {HeaderButtons, Item} from 'react-navigation-header-buttons' 
import Color from '../constant/Color'
import { DrawerActions } from '@react-navigation/native' 
import { CATEGORIES, SPECIFICATION } from '../data/dummy-data'
import DefaultText from '../components/DefaultText'
import { Ionicons,Feather, FontAwesome, MaterialIcons } from "@expo/vector-icons";
import {useSelector, useDispatch} from 'react-redux'
import { State } from 'react-native-gesture-handler'

const ListItem = (props) =>{
    return(
        <View style={styles.listItem}>
            <DefaultText>{props.children}</DefaultText>
        </View>
    )
}

const AudioDetailScreen = (props) =>{
    const catid = props.route.params?.categoriId ?? null
    const category = useSelector(state => state.categori.categori.find(cat => cat.id === catid))   
  
    // CATEGORIES.find((cat) => cat.id === catid)

    const specification =    useSelector(state => state.specification.specification.filter(spec =>spec.categoriId === category.id))
  
    /*SPECIFICATION.filter((spec) => spec.categoriId === category.id)*/

    const merge = [...specification,category]
    const [urlImage,setUrlImage] = useState("")
    const [isBasket, setIsBasket] = useState(false)

    const toogleBasketHandle = useCallback(() =>{
      setIsBasket((prevState) => !prevState)
    }, [isBasket])

    useEffect(()=>{
        if(merge[1]){
            props.navigation.setOptions({
              headerRight: () => {
                return(
                  <HeaderButtons HeaderButtonComponent={HeaderButton}>
                      <Item
                        title="Basket"
                        iconName={isBasket ? "ios-checkmark-circle" : "ios-checkmark-circle-outline"}
                        onPress={toogleBasketHandle}
                      />
                  </HeaderButtons>
                )
              }
            })
            setUrlImage(merge[1].urlImage)
        }
    })

    if (!merge[0].complexity) {
        return (
          <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
             <Image source={{uri:'https://weeblr.com/images/products/sh404sef/2015-10-14/medium/joomla-404-error-page.png'}} style={{width:400,height:400}}/>
          </View>
        );
      }
    
      return (
        <ScrollView>
          {!urlImage ? (
            <Text>WAITING</Text>
          ) : (
            <Image source={{ uri: urlImage }} style={styles.image} />
          )}
    
          <View>
            <View style={styles.details}>
              <DefaultText>{merge[0].duration}m</DefaultText>
              <DefaultText>{merge[0].complexity.toUpperCase()}</DefaultText>
            </View>
            <Text style={styles.title}>Specification Audio</Text>
            {merge[0].ingredients.map((ingredients) => (
              <ListItem key={ingredients}>{ingredients}</ListItem>
            ))}
            <Text style={styles.title}>Product Description</Text>
            {merge[0].steps.map((step) => (
              <ListItem key={step}>{step}</ListItem>
            ))}
          </View>
        </ScrollView>
      );    
}

const styles = StyleSheet.create({
    image:{
        width:"100%",
        height:200,
        marginBottom:20,
    },

    details:{
        flexDirection:"row",
        padding: 15,
        justifyContent:"space-around"
    },

    title:{
      fontFamily:"open-sans-bold",
      fontSize:22,
      textAlign:"center", 
      fontWeight: "bold",
    },

    listItem:{
        marginVertical:10,
        marginHorizontal:20,
        borderColor: "#ccc",
        borderWidth:1,
        padding:10,
    },
    
   
})

export const AudioDetailScreenOption = (navData) => {
    return{
        headerTitle: "Specification", 
        headerStyle: {
            backgroundColor: Platform.OS === "android" ? Color.primaryColor : "",
        },
        headerTintColor: Platform.OS === "android" ? "white" : Color.primaryColor,
        headerTitleStyle: {
            fontFamily: "open-sans-bold",
        },
        headerBackTitleStyle: {
            fontFamily: "open-sans"
        },
    };
};

export default AudioDetailScreen