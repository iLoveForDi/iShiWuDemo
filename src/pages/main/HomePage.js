import React, { Component } from 'react'
import {
    View,
    Text,
    TextInput,
    Image,
    Button,
    StatusBar,
    StyleSheet,
    Dimensions,
    ScrollView,
    TouchableOpacity,
    NativeModules
} from 'react-native'

import { StackActions, NavigationActions } from 'react-navigation'
import FoodHandle from './component/FoodHandle'
import FoodCategory from './component/FoodCategory'
import { connect } from 'react-redux'
const { bindActionCreators } = require('redux')

import homeActions from '../../actions/homeActions'
const commonDefine = require('../common/commonDefine');

var nativeModule = NativeModules.OpenNativeModule;

const size = Dimensions.get('window')
const ScreenWidth = size.width;
const ScreenHeight = size.height;


const foodItemData = [{
    id: '1',
    name: '饮食分析',
    image: require('../../image/ic_home_analyse.png')
}, {
    id: '2',
    name: '搜索对比',
    image: require('../../image/ic_search_compare.png')
}, {
    id: '3',
    name: '扫码对比',
    image: require('../../image/ic_scan_compare.png')
}]

class LogoTitle extends Component {
    
    render() {
        return (
            <View style={{ width: commonDefine.SCREENWIDTH, height: 64, alignItems: 'center' }}>
                <TouchableOpacity style={{
                    backgroundColor: 'white',
                    marginTop: 8,
                    width: commonDefine.SCREENWIDTH - 16 * 2,
                    borderRadius: 3,
                    height: 40,
                    flexDirection: "row",
                    alignItems: "center"
                }} onPress={() => {
                    console.log('哈哈哈');
                }}>
                    <Image source={require('../../image/ic_home_search.png')}
                        style={{ width: 20, height: 20, marginLeft: 10 }}></Image>
                    <Text style={{
                        color: 'rgba(222, 113, 56, 0.8)',
                        fontSize: 15, marginLeft: 5
                    }} >请输入食物名称</Text>
                </TouchableOpacity>
            </View>

        )
    }
}

class HomePage extends Component {
    _jumpToNative=()=>{
        nativeModule.openNativeVC('1')
    }

    componentWillMount() {
        this.props.actions.fetchHomeList()
    }
    static navigationOptions = ({ navigation }) => {
        const { params = {} } = navigation.state

        return {
            // title: '食物派',
            headerTitle: <LogoTitle />,
            // headerTitle: <View />,
            // headerRight: (<Button title='save' onPress={() => {

            // }} />),
            // headerBackground:'blue'
            // header: null,
            headerStyle: {
                backgroundColor: 'rgba(231,139,86,1)',
                opacity: params.opacity ? params.opacity : 0.0
            },
            headerTransparent: true,

        }

    }

    componentDidMount() {
        this._navListener = this.props.navigation.addListener('didFocus', () => {
            StatusBar.setBarStyle('light-content');
        })
    }

    componentWillUnmount() {
        this._navListener.remove();
    }

    render() {
        // const { setParams } = this.props.navigation;
        const { group } = this.props.listData
        console.log('---------------',group)
        console.log(typeof(group))
        return (
            // <SafeAreaView >
            <ScrollView
                style={styles.container}
                onScroll={this._onScroll}
                scrollEventThrottle={16}
            >
                {
                    this._renderForNavHeaderView()
                }

                <FoodHandle itemData={foodItemData} />

                {
                    // test
                    // commonDefine.Foods.map((item) => {
                    //     return (<FoodCategory itemData={item} key={item.kind} navigation={this.props.navigation}></FoodCategory>)
                    // })

                    group ? group.map((item) => {
                        return (<FoodCategory itemData={item} key={item.kind} navigation={this.props.navigation}></FoodCategory>)
                    }) : <View />
                }

                <Image source={require('../../image/logo.png')} style={{ width: 29, height: 29 }} />
                <Text style={{ bottom: 20 }}>welcome to HomePage</Text>

                <Button onPress={() => {
                    this._jumpToNative();
                    // this.props.navigation.navigate({routeName:'Details'})
                    // this.props.navigation.navigate('Details', {
                    //     itemId: 111,
                    //     otherParam: 'this is test param'
                    // })
                    // this.props.navigation.dispatch(StackActions.reset({
                    //     index: 0,
                    //     actions: [
                    //         NavigationActions.navigate({ routeName: 'Details' })
                    //     ]
                    // }))
                }} title='jump to native page'></Button>
            </ScrollView>

        )
    }

    _renderForNavHeaderView() {
        return (
            <View style={{ flex: 1 }}>
                <Image source={require('../../image/img_home_bg.png')} style={styles.headerContainer}>
                </Image>
                <Image source={require('../../image/ic_head_logo.png')} style={styles.headerLogo} />
                <View style={{
                    position: 'absolute',
                    marginTop: 128, height: 92, width: ScreenWidth
                }}>
                    <Text style={{ color: 'white', fontSize: 15, textAlign: 'center' }}>查 询 食 物 信 息</Text>
                    <TouchableOpacity style={{
                        backgroundColor: 'white',
                        margin: 16, borderRadius: 3,
                        height: 40,
                        flexDirection: "row",
                        alignItems: "center"
                    }}>
                        <Image source={require('../../image/ic_home_search.png')}
                            style={{ width: 20, height: 20, marginLeft: 10 }}></Image>
                        <Text style={{
                            color: 'rgba(222, 113, 56, 0.8)',
                            fontSize: 15, marginLeft: 5
                        }} >请输入食物名称</Text>
                    </TouchableOpacity>
                </View>

            </View>
        )

    }

    _onScroll = (e) => {
        const { contentOffset, contentSize } = e.nativeEvent;

        console.log(contentOffset.y)
        const { setParams } = this.props.navigation;
        if (contentOffset.y <= 5) {
            setParams({ opacity: 0.0 })
        } else if (contentOffset.y <= 64) {
            setParams({ opacity: (contentOffset.y / 64) })
        } else {
            setParams({ opacity: 1.0 })
        }

    }

}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5'

    },
    headerContainer: {
        height: 220,
        width: ScreenWidth,
        alignItems: 'center',
        justifyContent: 'space-between',
        // paddingTop: __IOS__ ? 20 + 15 : 15,
        paddingBottom: 28,
        paddingHorizontal: 16,
        backgroundColor: 'rgba(1,1,1,0)',
        overflow: 'hidden',
        // position:'absolute'
    },
    headerLogo: {
        width: 66,
        height: 24,
        // justifyContent:"center",
        // alignItems:"center",
        position: "absolute",
        marginTop: (40 - 24) * 0.5 + 20,
        marginLeft: (ScreenWidth - 66) * 0.5


    }
})

const mapStateToProps = (state) => {
    console.log('**************');
    return {
        listData: state.home.listData
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators({
            ...homeActions
        }, dispatch)
    }


}
module.exports = connect(mapStateToProps, mapDispatchToProps, undefined, { withRef: true })(HomePage)