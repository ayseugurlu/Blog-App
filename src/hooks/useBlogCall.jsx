import React from 'react'
import { useDispatch } from 'react-redux'
import { fetchFail, fetchStart, getBlogSuccess, getMyBlogSuccess, postBlogSuccess } from '../features/blogSlice'
import useAxios, { axiosPublic } from './useAxios'
import { toastErrorNotify, toastSuccessNotify } from '../helper/ToastNotify'


const useBlogCall = () => {

const dispatch = useDispatch()

const axiosWithToken=useAxios()



    const getBlogData = async(endpoint) => {
        dispatch(fetchStart())

        try {
            const {data} = await axiosPublic.get(endpoint)
            // console.log(data);
            dispatch(getBlogSuccess({data, endpoint}))
        } catch (error) {
            console.log(error);
        }

        
    }
    const getMyBlogData = async(endpoint) => {
        dispatch(fetchStart())

        try {
            const {data} = await axiosWithToken.get(endpoint)
            // console.log(data);
            dispatch(getMyBlogSuccess({data, endpoint}))
        } catch (error) {
            console.log(error);
        }

        
    }
    const getDataWithToken = async(endpoint) => {
        dispatch(fetchStart())

        try {
            const {data} = await axiosWithToken.get(endpoint)
            // console.log(data);
            dispatch(getBlogSuccess({data, endpoint}))
        } catch (error) {
            console.log(error);
        }

        
    }

    const postBlogData = async(endpoint,info) => {
        dispatch(fetchStart())

        try {
            const {data} = await axiosWithToken.post(endpoint,info)
            console.log(data);
          toastSuccessNotify(`${endpoint} is successfully recorded.`)
         

        } catch (error) {
            console.log(error);
            toastErrorNotify(error)
            dispatch(fetchFail())
        }finally{
          getBlogData(endpoint)
        }

        
    }

    
  return {
    getBlogData,
    postBlogData,
    getMyBlogData,
    getDataWithToken
  }
}

export default useBlogCall