import React, { Component } from 'react'
import {
    View,
    Text,
    Button,
    Image,
    StatusBar,
    SafeAreaView,
    FlatList,
    TouchableOpacity,
    Modal,
    Animated,
    StyleSheet,
} from 'react-native'
import { connect } from 'react-redux'
const { bindActionCreators } = require('redux')

const homeDetailActions = require('../../actions/homeDetailActions');
const commonDefine = require('../common/commonDefine');

class HeaderRightView extends Component {
    constructor(props) {
        super(props)
        this.state = { isSubCategoryVisibile: false }
    }

    render() {
        return (
            <View>
                <Modal
                    visible={this.state.isSubCategoryVisibile}
                    transparent={true}
                    animationType={"fade"}
                    onRequestClose={() => {
                        alert('Modal has close')
                    }} >
                    <TouchableOpacity style={{ backgroundColor: 'rgba(0,0,0,0.2)', flex: 1 }} onPress={() => {
                        this.setState({ isSubCategoryVisibile: false })
                    }}>
                        <Text style={{ alignItems: 'center', marginTop: 100 }}>哈哈哈哈哈</Text>
                    </TouchableOpacity>

                </Modal>

                <TouchableOpacity style={{ flexDirection: 'row', marginRight: 15, alignItems: 'center' }} onPress={() => {
                    this.setState({ isSubCategoryVisibile: !this.state.isSubCategoryVisibile })
                }}>
                    {/* <Text style={{color: 'gray', fontSize: 12, marginRight: 3}}>{subCategory}</Text> */}
                    <Text style={{ color: 'gray', fontSize: 12, marginRight: 3 }}>全部</Text>
                    <Image source={require('../../image/ic_bullet_down_gray.png')} style={{ width: 13, height: 16 }} resizeMode="contain" />

                </TouchableOpacity>

            </View>

        )
    }



}


export default class Detail extends Component {

    constructor(props) {
        super(props);
        this.state = { isShow: false }
    }
    static navigationOptions = ({ navigation }) => {
        return {
            title: navigation.state.params.title,
            // title: '详情页',
            headerTintColor: '#666',
            tabBarVisible: false,
            headerStyle: {
                backgroundColor: 'white',
            },
            headerRight: <HeaderRightView />,

        }
    }

    componentWillMount() {
        this.props.actions.fetchFoodDetailList()
    }
    componentDidMount() {

        console.log('**********', this.props.navigation.state.params.title);

        this._navListener = this.props.navigation.addListener('didFocus', () => {
            StatusBar.setBarStyle('dark-content');
        })


    }

    componentWillUnmount() {
        this._navListener.remove();
    }

    render() {
        const defaultImg = require('../../image/img_default_food_thumbnail.png')
        const rotate = this.state.isShow ? '180deg' : '0deg'
        // const imgSrc = food.thumb_image_url ? {uri: food.thumb_image_url} : defaultImg
        // const orderAscSrc = orderAsc == 1 ? require('../../resource/ic_food_ordering_down.png') : require('../../resource/ic_food_ordering_up.png')
        return (
            <SafeAreaView>
                <View style={[styles.siftWrapper,this.state.isShow && {borderBottomWidth: StyleSheet.hairlineWidth}]}>
                    <TouchableOpacity activeOpacity={0.75}
                        style={styles.siftCell}
                        onPress={this._show}>
                        <Text style={styles.orderByFont}>常见</Text>
                        <Image source={require('../../image/ic_food_ordering.png')} style={{ width: 16, height: 16,transform:[{rotate}] }} />
                    </TouchableOpacity>
                </View>
                {
                    this.state.isShow &&
                    <Animated.View style={[styles.animatedCover]}>
                        <TouchableOpacity activeOpacity={1} style={{ flex: 1 }} onPress={this._show}>
                            <Animated.View style={[styles.animatedContent, 
                                // { top: contentYPosition, height: contentHeight }
                                ]}>
                                <Text>hhhhhhhhhhhhhhhhhhh</Text>
                                <Text>hhhhhhhhhhhhhhhhhhh</Text>
                                <Text>hhhhhhhhhhhhhhhhhhh</Text>
                                <Text>hhhhhhhhhhhhhhhhhhh</Text>
                                <Text>hhhhhhhhhhhhhhhhhhh</Text>
                                <Text>hhhhhhhhhhhhhhhhhhh</Text>
                                <Text>hhhhhhhhhhhhhhhhhhh</Text>
                                <Text>hhhhhhhhhhhhhhhhhhh</Text>
                            </Animated.View>
                        </TouchableOpacity>
                    </Animated.View>

                }

                <FlatList
                    data={this.props.listData.foods}
                    renderItem={({ item }) =>
                        <TouchableOpacity onPress={() => {
                            
                        }}>
                            <View key={0} style={{ flexDirection: 'row', height: 60, alignItems: 'center' }}>
                                <Image source={{ url: item.thumb_image_url }} defaultSource={defaultImg} style={{
                                    height: 40,
                                    width: 40,
                                    marginLeft: 16,
                                    borderRadius: 3
                                }}></Image>
                                <View style={{ marginLeft: 10, height: 60 }}>
                                    <View style={{ height: 59, flexDirection: 'column', justifyContent: 'center' }}>
                                        <Text style={{ color: '#666' }}>{item.name}</Text>
                                        <Text style={{ color: '#666', marginTop: 5 }}>{item.calory}千卡</Text>
                                    </View>
                                    <View style={{ height: 1, backgroundColor: 'black', width: commonDefine.SCREENWIDTH - 66 }}></View>
                                </View>

                            </View>
                        </TouchableOpacity>


                    }
                    keyExtractor={(item, index) => { index + '_' }}
                />
            </SafeAreaView>


        )


    }
    heightValue = new Animated.Value(0)
    _show = () => {
        this.setState({ isShow: !this.state.isShow }, () => {
            Animated.spring(this.heightValue, {
                toValue: 1,
                duration: 500,
            }).start()
        })
    }


}

const styles = StyleSheet.create({
    siftWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        backgroundColor: '#fff',
        height: 60 + 44,
        marginTop: -60,
        paddingTop: 60,
        borderBottomColor: '#d5d5d5'
    },
    siftCell: {
        height: 44,
        flexDirection: 'row',
        alignItems: 'center',
    },
    orderByFont: {
        fontSize: 13,
        marginRight: 5
    },
    animatedCover: {
        position: 'absolute',
        top: 44,
        left: 0,
        right: 0,
        height: commonDefine.SCREENHEIGHT -60 - 44,
        zIndex:1,
        backgroundColor:'rgba(1,1,1,0.3)',
        
    },
    animatedContent: {
        position: 'absolute',
        left: 0,
        right: 0,
        backgroundColor:'#fff'
    },
})

const mapStateToProps = (state) => {
    console.log('**************');
    return {
        listData: state.homeDetail.listData
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators({
            ...homeDetailActions
        }, dispatch)
    }
}
module.exports = connect(mapStateToProps, mapDispatchToProps, undefined, { withRef: true })(Detail)