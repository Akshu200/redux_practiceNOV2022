const redux = require('redux')
const createStore = redux.createStore
const BindActionCreator = redux.bindActionCreators

const CAKE_ORDER = 'CAKE_ORDER';
const CAKE_UNORDER = 'CAKE_UNORDER';
const ICREAM_ORDER = 'ICREAM_ORDER';
const ICREAM_UNORDER = 'ICREAM_UNORDER';

function ordercake() {
    return {
        type: CAKE_ORDER,
        payload: 1
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


const initialstate =
{
    numberofcake: 10,
}

const reducer = (state = initialstate, action) => {
    switch (action.type) {

        case CAKE_ORDER:
            return {
                ...state,
                numberofcake: state.numberofcake + 1,
            }
        case CAKE_UNORDER:
            return {
                ...state,
                numberofcake: state.numberofcake - action.payload,
            }
        
        case ICREAM_ORDER:
            return{
                ...state,
                numberofcake: state.numberofcake + action.payload,
            }

        case ICREAM_UNORDER:
                return{
                    ...state,
                    numberofcake: state.numberofcake - action.payload,
                }

        default:
            return state
    }

}


const store = createStore(reducer)

console.log('initial state : ', store.getState())

const final = store.subscribe(() => {
    console.log("update state : ", store.getState())
})


const action = BindActionCreator({ ordercake, unordercake  ,icreamorder ,icreamUnorder }, store.dispatch)

// action.ordercake()
// action.unordercake(2)

action.icreamorder(1)
action.icreamorder(2)
action.icreamorder(5)
action.unordercake(3)

final()