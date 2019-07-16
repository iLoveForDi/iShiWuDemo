/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Image } from 'react-native';
import { createStackNavigator, createBottomTabNavigator, TabBarBottom, TabNavigator } from 'react-navigation'
import { Ionicons } from 'react-native-vector-icons/Ionicons'
import HomePage from './main/HomePage'
import Detail from './main/Detail'

import Shop from './shopping/ShoppingHome'

import Setting from './me/Setting'
import FeedBack from './me/FeadBack'

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

const HomeStack = createStackNavigator({
  HomePage: HomePage,
  Details: Detail
}, {
    initialRouteName: 'HomePage',
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#f4511e',
        // opacity:0.0
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
      headerBackImage:(<Image source={require('../image/ic_back_dark.png')} style={{ width: 20, height:20 }} />),
      // headerBackTitle: '返回'

    }
  })

  HomeStack.navigationOptions = ({ navigation }) => {
    let tabBarVisible = true;
    if (navigation.state.index > 0) {
      tabBarVisible = false;
    }
  
    return {
      tabBarVisible,
    };
  };

const ShoppingStack = createStackNavigator({
  ShopPage: Shop
})

const SettingStack = createStackNavigator({
  Setting: Setting,
  FeedBack: FeedBack
})


export default createBottomTabNavigator({
  '实物百科': HomeStack,
  '逛吃': ShoppingStack,
  '我的': SettingStack
}, {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === '实物百科') {
          // iconName = `${focused ? '../image/bar_MainPage_on.png' : '../image/bar_MainPage.png'}`;
          console.log(iconName)
          if (focused) {
            return <Image source={require('../image/ic_tab_search_select.png')} style={{ width: 26, height: 26, marginBottom: 2 }} />
          } else {
            return <Image source={require('../image/ic_tab_search.png')} style={{ width: 26, height: 26, marginBottom: 2 }} />
          }
        } else if (routeName === '逛吃') {
          // iconName = `${focused ? '../image/bar_Sight_on.png' : '../image/bar_Sight.png'}`;
          console.log(iconName)
          if (focused) {
            return <Image source={require('../image/ic_tab_homepage_select.png')} style={{ width: 26, height: 26, marginBottom: 2 }} />
          } else {
            return <Image source={require('../image/ic_tab_homepage.png')} style={{ width: 26, height: 26, marginBottom: 2 }} />
          }

        } else if (routeName === '我的') {
          // iconName = `${focused ? '../image/bar_Sight_on.png' : '../image/bar_Sight.png'}`;
          console.log(iconName)
          if (focused) {
            return <Image source={require('../image/ic_tab_my_select.png')} style={{ width: 26, height: 26, marginBottom: 2 }} />
          } else {
            return <Image source={require('../image/ic_tab_my.png')} style={{ width: 26, height: 26, marginBottom: 2 }} />
          }

        }

        // You can return any component that you like here! We usually use an
        // icon component from react-native-vector-icons
        // return <Ionicons name={iconName} size={25} color={tintColor} />;
        // return <Image source={require(iconName)} style = {{width:34,height:34}}/>
      },
    }),
    // tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
    tabBarOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
    },
    animationEnabled: false,
    swipeEnabled: false,

  })


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
