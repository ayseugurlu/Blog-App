import { createSlice } from "@reduxjs/toolkit";

const blogSlice = createSlice({
    name: "blog",

    initialState: {
        loading: false,
        error: false,
        users: [],
        categories: [],
        blogs: [],
        comments: [],
        myBlogs:[],

    },
    reducers: {
        fetchStart : (state) => {
            state.loading = true;
            state.error = false;
        },
        fetchFail : (state) => {
            state.loading = false;
            state.error = true;
        },
        getBlogSuccess: (state,{payload})=>{
            state.loading = false;
           state[payload.endpoint] = payload.data.data
        },
        getMyBlogSuccess: (state,{payload})=>{
            state.loading = false;
           state.myBlogs = payload.data.data
        },
        postBlogSuccess: (state,{payload})=>{
            state.loading = false;
            state[payload.endpoint] = payload.data.data
        },
    }
})

export const {fetchStart,fetchFail,getBlogSuccess,postBlogSuccess,getMyBlogSuccess} = blogSlice.actions;

export default blogSlice.reducer;