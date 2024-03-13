import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'

let initialState = {
    user:'',
    token:'',
    loading:false
}

const loginUser = createAsyncThunk('username',async(body)=>{
    let res = await fetch('',{
        method:'post',
        headers:{
            'Content-Type': 'application/json',
            Authorization: localStorage.getItem('token')
        },
body:JSON.stringify(body)
    })
    return await res.json();
})

const authSlice = createSlice({
    name:'username',
    initialState,
    reducers:{
        addToken:(state,action)=>{
            state.token = localStorage.getItem('token')
        },
        addUsername:(state,action)=>{
            state.username = localStorage.getItem('username')
        }
    },
    extraReducers:{
        [loginUser.pending]:(state,action)=>{
            state.loading = true
        },
        [loginUser.fulfilled]:(state,{payload:[username,token]})=>{
            state.loading = false
            state.token = token;
            state.username = username;
            localStorage.setItem('token',JSON.stringify(token))
            localStorage.setItem('token',JSON.stringify(username))
        }, [loginUser.pending]:(state,a)=>{
            state.loading = true
        }
    }
})

export const {addToken,addUsername} = authSlice.actions
export default authSlice.reducer