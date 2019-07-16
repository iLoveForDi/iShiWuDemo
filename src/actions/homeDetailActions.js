// http://food.boohee.com/fb/v1/foods?kind=group&value=1&order_by=1&page=1&order_asc=0&sub_value=''

module.exports.fetchFoodDetailList = ()=>{
    return  dispatch => {
        fetch('http://food.boohee.com/fb/v1/foods?kind=group&value=1&order_by=1&page=1&order_asc=0')
        .then(response =>  response.json())
        .then(responseJson=>{
            console.log(responseJson)
            dispatch({
                type:'FETCH_FOODSDETAIL_LIST',
                data : responseJson
            })
        })
       
    }
}


// 常见： http://food.boohee.com/fb/v1/foods/sort_types 