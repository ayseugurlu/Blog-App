import React from 'react'
import { useDispatch } from 'react-redux'
import { fetchFail, fetchStart, getBlogSuccess } from '../features/blogSlice'
import { axiosPublic } from './useAxios'
import { toastErrorNotify, toastSuccessNotify } from '../helper/ToastNotify'


const useBlogCall = () => {

const dispatch = useDispatch()



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

    const postBlogData = async(endpoint,info) => {
        dispatch(fetchStart())

        try {
            const {data} = await axiosPublic.post(endpoint,info)
            console.log(data);
          toastSuccessNotify(`${endpoint} is successfully recorded.`)
        } catch (error) {
            console.log(error);
            toastErrorNotify(error)
            dispatch(fetchFail())
        }

        
    }
  return {
    getBlogData,
    postBlogData
  }
}

export default useBlogCall