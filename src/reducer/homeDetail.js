const initialState = {
    status: '点击登录',
    isSuccess: false,
    listData: {}
}

module.exports = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_FOODSDETAIL_LIST':
            return {
                ...state,
                isSuccess: true,
                listData: action.data
            }
            break;
        default:
            return state;
    }
}