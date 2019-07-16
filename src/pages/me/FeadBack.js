import React, { Component } from 'react'
import {
    View,
    Text,
    Button
} from 'react-native'

import { StackActions, NavigationActions } from 'react-navigation'

export default class FeedBack extends Component {
    static navigationOptions = ({ navigation }) => {
        return {
            // title: navigation.state.params.title,
            tabBarVisible: false
        }
    }
    render() {
        return (
            <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                <Text>welcome to feedBackPage</Text>
                {/* <Text>itemID is : {this.props.navigation.getParam('itemId','default itemId')}</Text> */}
                <Text>itemID is : {this.props.navigation.getParam('itemId', 'default itemId')}</Text>
                <Text>other param is : {this.props.navigation.getParam('otherParam', 'default otherParam value')}</Text>
                <Button onPress={() => {
                    console.log(this.props.navigation.state.params.itemId)
                    // this.props.navigation.navigate({routeName:'Details'})
                    // this.props.navigation.navigate('Details')
                    // this.props.navigation.dispatch(StackActions.reset({
                    //     index: 0,
                    //     actions: [
                    //         NavigationActions.navigate({ routeName: 'Details' })
                    //     ]
                    // }))
                }} title='jump to DetailPage'></Button>
            </View>
        )
    }
}