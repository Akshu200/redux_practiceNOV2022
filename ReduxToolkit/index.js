const store = require('./app/store')

const cakeActions = require('./features/cake/cakeSlice').cakeActions
const icecreamActions = require('./features/icecream/icecreamSlice').icecreamActions
const fetchUser = require('./features/user/userSlice').fetchUser

console.log("Initial State : ", store.getState())

const unsubscribe = store.subscribe(() => {
    console.log('Updated state : ', store.getState())
})

store.dispatch(fetchUser())
// store.dispatch(cakeActions.order())
// store.dispatch(cakeActions.order())
// store.dispatch(cakeActions.order())
// store.dispatch(cakeActions.order())
// store.dispatch(cakeActions.restock(5))

// store.dispatch(icecreamActions.order())
// store.dispatch(icecreamActions.order())
// store.dispatch(icecreamActions.order())
// store.dispatch(icecreamActions.restock(2))

unsubscribe()
