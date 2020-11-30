import React from 'react'
import {View,Text, Platform, Image, SafeAreaView, StyleSheet, ScrollView} from 'react-native'
import {MaterialIcons} from '@expo/vector-icons'
import HeaderButton from "../components/HeaderButton"
import {HeaderButtons, Item} from 'react-navigation-header-buttons' 
import Color from '../constant/Color'
import { DrawerActions } from '@react-navigation/native' 
import {CATEGORIES, FAVORITE} from '../data/dummy-data'

const ProfileScreen = (props) =>{
    const favorite = FAVORITE.map((pl) =>
        CATEGORIES.filter((cat) => cat.id === pl.id_categori)
    );

    return (
        <SafeAreaView style={styles.container}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={{ alignSelf: "center" }}>
              <View style={styles.profileImage}>
                <Image
                  source={{ uri: "https://www.kindpng.com/picc/b/136/1369892.png" }}
                  style={styles.image}
                  resizeMode="center"
                ></Image>
              </View>
              <View style={styles.add}>
                <MaterialIcons
                  name="verified-user"
                  color="black"
                  size={48}
                  color="#DFD8C8"
                  style={{ marginTop: 6, marginLeft: 2 }}
                />
              </View>
            </View>
    
            <View style={styles.infoContainer}>
              <Text style={[styles.text, { fontWeight: "200", fontSize: 36 }]}>
                Ady Purnawibawa
              </Text>
              <Text style={[styles.text, { color: "#AEB5BC", fontSize: 14 }]}>
                Verified Account
              </Text>
            </View>
    
            <View style={styles.statsContainer}>
              <View
                style={[
                  styles.statsBox,
                  {
                    borderColor: "white",
                    borderLeftWidth: 1,
                    borderRightWidth: 1,
                  },
                ]}
              >
                <View style={styles.basket}>
                <MaterialIcons
                  name="shopping-cart"
                  color="black"
                  size={30}
                  color="#DFD8C8"
                  style={{ marginTop: 20, marginLeft: 2 }}
                />
              </View>
                <Text style={[styles.text, styles.subText]}>My Cart</Text>
              </View>
            </View>
    
            <View style={{ marginTop: 32 }}>
              <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                {favorite.map((fav) => (
                  <View style={styles.mediaImageContainer} key={fav[0].id}>
                    <Image
                      source={{ uri: fav[0].urlImage }}
                      style={styles.image}
                      resizeMode="cover"
                    ></Image>
                  </View>
                ))}
              </ScrollView>
            </View>
            <Text style={[styles.subText, styles.recent]}>Information</Text>
            <View style={{ alignItems: "center" }}>
              <View style={styles.recentItem}>
                <View style={styles.activityIndicator}></View>
                <View style={{ width: 250 }}>
                  <Text
                    style={[styles.text, { color: "#41444B", fontWeight: "300" }]}
                  >
                    Number Phone :
                    <Text style={{ fontWeight: "400" }}>08243400000</Text>
                  </Text>
                </View>
              </View>
    
              <View style={styles.recentItem}>
                <View style={styles.activityIndicator}></View>
                <View style={{ width: 250 }}>
                  <Text
                    style={[styles.text, { color: "#41444B", fontWeight: "300" }]}
                  >
                    Email:
                    <Text style={{ fontWeight: "400" }}>nungguin-ya@gmail.com</Text>
                  </Text>
                </View>
              </View>
            </View>
          </ScrollView>
        </SafeAreaView>
    );
};    


export const ProfileScreenOption = (navData) => {
    return{
        headerTitle: "My Profile", 
        headerStyle: {
            backgroundColor: Platform.OS === "android" ? Color.primaryColor : "",
        },
        headerTintColor: Platform.OS === "android" ? "white" : Color.primaryColor,
        headerLeft: () =>{
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
            fontFamily: "open-sans-bold",
        },
        headerBackTitleStyle: {
            fontFamily: "open-sans"
        },
    };
};

const styles = StyleSheet.create({

    activityIndicator:{
        backgroundColor:'#CABFAB',
        padding: 5,
        height: 15,
        width: 15,
        borderRadius: 8,
        marginTop:5,
        marginRight:22,
    },

    recent:{
        marginLeft:70,
        marginTop:35,
        marginBottom: 8,
        fontSize:12
    },

    recentItem:{
        flexDirection:"row",
        alignItems:"flex-start",
        marginBottom:18,
    },

    container:{
        flex:1,
        backgroundColor:"#fff"
    },

    profileImage:{
        width:200,
        height:200,
        borderRadius:100,
        overflow:"hidden",
    },

    image:{
        marginTop:15,
        flex:1,
        width: undefined,
        height: undefined,
    },

    add:{
        backgroundColor:'#41444B',
        position:"absolute",
        bottom: 0,
        right:0,
        width:60,
        height:60,
        borderRadius:30,
        alignItems:"center",
        justifyContent:"center",
    },

    basket:{
      position: "relative",
      bottom: 15,
      alignItems:"center",
      justifyContent:"center",
  },

    infoContainer:{
        alignSelf:"center",
        alignItems:"center",
        marginTop:16
    },
    
    text:{
        fontFamily:"HelveticaNeue",
        color:"#5257D"
    },

    statsContainer:{
        flexDirection:"row",
        alignSelf:"center",
        marginTop:32
    },
    
    statsBox:{
        flex:1,
        alignItems:"center",
    },

    subText:{
        fontSize:12,
        color:"AEB5BC",
        textTransform:"uppercase",
        fontWeight:"500"
    },

    mediaImageContainer:{
        width: 180,
        height: 200,
        borderRadius: 12,
        overflow:"hidden",
        marginHorizontal:10,
    },

})

export default ProfileScreen