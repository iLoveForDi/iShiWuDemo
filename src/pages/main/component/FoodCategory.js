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

const commonDefine = require('../../common/commonDefine');




export default class FoodCategory extends Component {

    render() {
        let foodCategory = this.props.itemData
        let title = '食物分类';
        if (foodCategory.kind === 'brand') {
            title = '热门品牌';
        } else if (foodCategory.kind === 'restaurant') {
            title = '连锁餐饮';
        }

        return (
            <View style={{
                marginLeft: 16, backgroundColor: 'white',
                width: commonDefine.SCREENWIDTH - 16 * 2,
                marginTop: 10
            }}>
                <View style={styles.groupHeader}>
                    <Text style={{ color: 'gray' }}>{title}</Text>
                    <Image source={require('../../../image/img_home_list_bg.png')} style={{
                        width: commonDefine.SCREENWIDTH - 16 * 2,
                        height: 14
                    }} ></Image>
                </View>
                <View style={styles.container}>
                    {
                        foodCategory.categories.map((item) => {
                            return (
                                <TouchableOpacity key={item.name} style={styles.items} onPress={() => {
                                    this._goCategoryDetail(item)
                                }}>
                                    <Image source={{ 'url': item.image_url }} style={styles.Icon} resizeMode="contain" />
                                    <Text style={styles.categoryTitle}>{item.name}</Text>
                                </TouchableOpacity>)
                        })
                    }
                </View>

            </View>
        )
    }

    _goCategoryDetail(itemData) {
        this.props.navigation.navigate('Details', {
            title:'食物分类',
            passProps: { itemData }
        })
    }
}

const styles = StyleSheet.create({

    groupHeader: {
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
    },
    container: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        width: commonDefine.SCREENWIDTH - 16 * 2
    },
    items: {
        flexDirection: 'column',
        alignItems: 'center',
        width: (commonDefine.SCREENWIDTH - 16 * 2) / 3,
        height: 65,
        marginBottom: 25
    },
    Icon: {
        width: 40,
        height: 40
    },
    categoryTitle: {
        color: 'gray',
        fontSize: 12,
        marginTop: 5,
    }
})