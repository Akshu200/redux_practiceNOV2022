const configureStore = require('@reduxjs/toolkit').configureStore
// const { getDefaultMiddleware } = require('@reduxjs/toolkit')
// const reduxlogger = require('redux-logger')

const cakeReducer = require('../features/cake/cakeSlice')
const icecreamReducer = require('../features/icecream/icecreamSlice')
// const logger = reduxlogger.createLogger()
const userReducer= require('../features/user/userSlice')

const store = configureStore({

    reducer: {
        cake: cakeReducer,
        icecream: icecreamReducer,
        user:userReducer, 
    },
    // middleware: (getDefaultMiddleware => getDefaultMiddleware().concat(logger))
})

module.exports = store