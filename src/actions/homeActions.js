module.exports.fetchHomeList = ()=>{
    return  dispatch => {
        fetch('http://food.boohee.com/fb/v1/categories/list')
        .then(response =>  response.json())
        .then(responseJson=>{
            console.log(responseJson)
            dispatch({
                type:'FETCH_HOME_LIST',
                data : responseJson
            })
        })
       
    }
}