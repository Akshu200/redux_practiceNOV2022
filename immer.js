const redux = require('redux')
const produce = require('immer').produce
const createStore = redux.createStore



const initialState = {

    name: 'Akshay',
    address: {
        city: 'pune',
        country: 'india',
        landmark: 'delhi'
    }
}

const UPDATE_LANDMARK = 'UPDATE_LANDMARK'

const update = (landmark) => {
    return {
        type: UPDATE_LANDMARK,
        payload: landmark
    }

}

const reducer = (state = initialState, action) => {
    switch (action.type) {

        case UPDATE_LANDMARK:
            // return {
            //     ...state,
            //     address: {

            //         ...state.address,
            //         landmark: action.payload

            //     }
            // }
            return produce(state, (d) => {
                d.address.landmark = action.payload
            })
        default:
            return state
    }

}

const store = createStore(reducer)

console.log("Initial State : ", store.getState())

const final = store.subscribe(() => {
    console.log('Updated State : ', store.getState())
})

// store.dispatch(update('mumbai'))

store.dispatch(update('pune'))

final()



