const redux = require('redux')
const createStore = redux.createStore           //const createStore = redux.createStore
const BindActionCreator = redux.bindActionCreators
const combineReducers = redux.combineReducers


const CAKE_ORDER = 'CAKE_ORDER';
const CAKE_UNORDER = 'CAKE_UNORDER';
const ICREAM_ORDER = 'ICREAM_ORDER';
const ICREAM_UNORDER = 'ICREAM_UNORDER';

function ordercake(qty = 1) {
    return {
        type: CAKE_ORDER,
        payload: qty
    }
}
function unordercake(qty = 1) {
    return {
        type: CAKE_UNORDER,
        payload: qty
    }
}
function icreamorder(qty = 1) {
    return {
        type: ICREAM_ORDER,
        payload: qty
    }
}
function icreamUnorder(qty = 1) {
    return {
        type: ICREAM_UNORDER,
        payload: qty
    }
}

// initial state for cake
const CakeInitialstate =
{
    numberofcake: 10,
}

//initial state for ice cream
const IcreamInitialstate =
{
    numberoficream: 15,
}

/// reducer for cake
const CakeReducer = (state = CakeInitialstate, action) => {
    switch (action.type) {

        case CAKE_ORDER:
            return {
                ...state,
                numberofcake: state.numberofcake + action.payload,
            }
        case CAKE_UNORDER:
            return {
                ...state,
                numberofcake: state.numberofcake - action.payload,
            }

        default:
            return state
    }

}

/// reducer for ice cream
const IcreamReducer = (state = IcreamInitialstate, action) => {

    switch (action.type) {

        case ICREAM_ORDER:
            return {
                ...state,
                numberoficream: state.numberoficream + action.payload,
            }

        case ICREAM_UNORDER:
            return {
                ...state,
                numberoficream: state.numberoficream - action.payload,
            }

        default:
            return state
    }

}

///////////// combine reducer
const combine_reducer = combineReducers({
    cake: CakeReducer,
    icream: IcreamReducer,
})


const store = createStore(combine_reducer)

console.log('initial state : ', store.getState())

const final = store.subscribe(() => {
    console.log("update state : ", store.getState())
})


const action = BindActionCreator({ ordercake, unordercake, icreamorder, icreamUnorder }, store.dispatch)

action.ordercake()
action.unordercake(2)

action.icreamorder(1)
action.icreamorder(2)
action.icreamorder(5)
action.unordercake(3)

final()




// const cakeShop= createStore(CakeReducer)
// console.log('Initial State of CAKE : ', cakeShop.getState())

// const resultOfCake=cakeShop.subscribe(()=>{
//     console.log("UPDATED STATE OF CAKE : ", cakeShop.getState())
// })

// const CakeAction =BindActionCreator({ordercake, unordercake}, cakeShop.dispatch)

// CakeAction.ordercake(2)
// CakeAction.ordercake(20)

// CakeAction.unordercake(22)

// resultOfCake()


