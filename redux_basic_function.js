const redux = require('redux')
const createStore = redux.createStore

const CAKE_ORDER = 'CAKE_ORDER';
const CAKE_UNORDER= 'CAKE_UNORDER';

function ordercake() {
    return {
        type: CAKE_ORDER,
        payload: 1
    }
}
function unordercake(qty = 1){
   return{
    type:CAKE_UNORDER,
    payload:qty
   }
}
const initialstate =
{
    numberofcake: 10,
}

const reducer = (state = initialstate, action)=>{
    switch(action.type){

        case CAKE_ORDER:
            return{
                ...state,
                numberofcake: state.numberofcake + 1,
            }
        case CAKE_UNORDER:
            return{
                ...state,
                numberofcake : state.numberofcake - action.payload
            }

            default :
            return state
    }

}


const store = createStore(reducer)

console.log('initial state : ', store.getState())

const final = store.subscribe(()=>{
    console.log("update state : ", store.getState())
})

store.dispatch(ordercake())
store.dispatch(ordercake())
store.dispatch(unordercake(2))


final()



