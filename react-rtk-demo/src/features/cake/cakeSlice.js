const createSlice = require('@reduxjs/toolkit').createSlice

const initialState = {
    numberofCake: 10,
}

const cakeSlice = createSlice({
    name: 'cake',
    initialState,
    reducers: {
        order: (state) => {
            state.numberofCake--
        },

        restock: (state, action) => {
            state.numberofCake += action.payload
        },
    }
})

module.exports = cakeSlice.reducer
module.exports.cakeActions = cakeSlice.actions