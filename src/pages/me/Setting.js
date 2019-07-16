import React, { Component } from 'react'
import {
    View,
    Text,
    Button,
    StatusBar
} from 'react-native'

import { StackActions, NavigationActions } from 'react-navigation'

export default class Setting extends Component {
    componentDidMount() {
        this._navListener = this.props.navigation.addListener('didFocus', () => {
            StatusBar.setBarStyle('light-content');
            
        })
    }

    componentWillUnmount() {
        this._navListener.remove();
    }

    render() {
        return (
            <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                <Text>welcome to SettingPage</Text>
                <Button onPress={() => {
                    // this.props.navigation.navigate({routeName:'Details'})
                    this.props.navigation.navigate('FeedBack', {
                        itemId: 111,
                        otherParam: 'this is test param'
                    })
                    // this.props.navigation.dispatch(StackActions.reset({
                    //     index: 0,
                    //     actions: [
                    //         NavigationActions.navigate({ routeName: 'Details' })
                    //     ]
                    // }))
                }} title='jump to FeedBack'></Button>
            </View>
        )
    }
}