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
        singleBlog:[],
        

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
           state[payload.endpoint] = payload.data
        },
        getMyBlogSuccess: (state,{payload})=>{
            state.loading = false;
           state.myBlogs = payload.data.data
        },
        postBlogSuccess: (state,{payload})=>{
            state.loading = false;
            state[payload.endpoint] = payload.data.data
        },
        getSingleSuccess : (state,{payload}) => {
            state.loading= false
            state.singleBlog = payload.data
        },
        getLikeSuccess:(state,{payload}) => {
            state.loading = false
            state.like = payload
        }
       
    }
})

export const {fetchStart,fetchFail,getBlogSuccess,postBlogSuccess,getMyBlogSuccess, getSingleSuccess,getLikeSuccess} = blogSlice.actions;

export default blogSlice.reducer;