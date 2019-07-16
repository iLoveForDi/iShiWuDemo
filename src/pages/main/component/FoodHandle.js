import React, { Component } from 'react'
import {
    View,
    Text,
    Button,
    Image,
    SafeAreaView,
    StatusBar,
    StyleSheet,
    Dimensions,
    ScrollView,
    TouchableOpacity
} from 'react-native'

const size = Dimensions.get('window')
const ScreenWidth = size.width;
const ScreenHeight = size.height;

export default class FoodHandle extends Component {


    render() {
        var itemData = this.props.itemData;
        return (
            <View style={{
                margin: 16, height: 60,
                backgroundColor: 'white',
                marginTop: 10,
                flexDirection: 'row',
                shadowRadius: 3,
                shadowOpacity: 0.5,
                marginBottom:0
                // borderWidth:0.5
            }}>
                {
                    this._renderItemView(itemData)

                }

            </View>

        )
    }

    _renderItemView(itemData) {
        return (
            itemData.map((item) => {
                return (
                    <TouchableOpacity key={`FoodHandle-${item.id}`} onPress={() => {
                        alert(item.name)
                    }}>
                        <View style={{
                            width: (ScreenWidth - 32) / 3, height: 60,
                            // backgroundColor: 'red',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            // borderWidth: 1
                        }}>
                            <Image source={item.image} style={{ width: 28, height: 28 }}></Image>
                            <Text style={{ textAlign: 'center' }}>{item.name}</Text>
                        </View>
                    </TouchableOpacity>

                )
            })
        )


    }
}