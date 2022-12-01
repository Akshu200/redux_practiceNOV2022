
const redux = require('redux')
const createStore = redux.createStore
const axios = require('axios')
const applyMiddlware = redux.applyMiddleware
const thunkmiddleware = require('redux-thunk').default


const initialState = {
    loading :false,
    users: [],
    error: '',
}

const FETCH_USER_REQ = 'FETCH_USER_REQ'
const FETCH_USER_SUCCESS = 'FETCH_USER_SUCCESS'
const FETCH_USER_FAILED = 'FETCH_USER_FAILED'

const fetch_req = ()=>{
return {
    type: FETCH_USER_REQ,
    loading: true
}
}

const fetch_success = (users)=>{
    return {
        type:FETCH_USER_SUCCESS,
        payload : users,
    }
}

const fetch_failed = (error) =>{
    return {
        type : FETCH_USER_FAILED,
        payload: error
    }

}


const reducer = (state =initialState, action)=>{

    switch(action.type){

        case FETCH_USER_REQ:
            return{
                ...state,
                loading: true
            }

        case FETCH_USER_SUCCESS:
            return{
                loading:false,
                users: action.payload
            }

        case FETCH_USER_FAILED:
            return{
                loading:false,
                error:action.payload
            }
    }

}

const fetchUSERS = ()=>{
    return function(dispatch){
        dispatch(fetch_req)
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then((res)=>{
            const d= res.data.map((dd)=>dd.id)
            dispatch(fetch_success(d))
        })
        .catch((error)=>{
           dispatch(fetch_failed(error.message))
        })

    }
}


const store = createStore(reducer , applyMiddlware(thunkmiddleware))

store.subscribe(()=>{
    console.log(store.getState())
})

store.dispatch(fetchUSERS())
