
const createSlice= require('@reduxjs/toolkit').createSlice

const initialState = {
    numberoficecream:15,
}

const icecreamslice = createSlice({
    name:'icecream',
    initialState,
    reducers:{
        order: (state)=>{
        state.numberoficecream --
        },
         
        restock:(state, action)=>{
            state.numberoficecream += action.payload
        },

    },
})

module.exports =icecreamslice.reducer

module.exports.icecreamActions= icecreamslice.actions