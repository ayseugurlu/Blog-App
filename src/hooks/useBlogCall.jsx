import React from 'react'
import { useDispatch } from 'react-redux'
import { fetchFail, fetchStart, getBlogSuccess, getLikeSuccess, getMyBlogSuccess, getSingleSuccess, postBlogSuccess } from '../features/blogSlice'
import useAxios, { axiosPublic } from './useAxios'
import { toastErrorNotify, toastSuccessNotify } from '../helper/ToastNotify'


const useBlogCall = () => {

const dispatch = useDispatch()

const axiosWithToken=useAxios()



    const getBlogData = async(endpoint,page) => {
        dispatch(fetchStart())

        try {
            const {data} = await axiosPublic.get(`${endpoint}/?limit=4&page=${page}`)
            console.log(data);
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
            // console.log(data);
          toastSuccessNotify(`${endpoint} is successfully recorded.`)
          dispatch(postBlogSuccess(endpoint,data))
         

        } catch (error) {
            console.log(error);
            toastErrorNotify(error)
            dispatch(fetchFail())
        }finally{
          getBlogData(endpoint)
        }

        
    }

    const addRemoveLike = async (id) => {
      dispatch(fetchStart())

      try {
        const {data} = await axiosWithToken.post(`blogs/${id}/postLike`)
        dispatch(getLikeSuccess(data))

      } catch (error) {
        dispatch(fetchFail())
        
      }finally{
       getSingleData("blogs",id)
      }
    }
    const getLike = async (id) => {
      dispatch(fetchStart())

      try {
        const {data} =  await axiosWithToken.get(`blogs/${id}/getLike`)

      } catch (error) {
        dispatch(fetchFail())
        
      }
    }

    const getSingleData = async (endpoint,id) =>{
      dispatch(fetchStart())

      try {
        
        const {data} = await axiosWithToken.get(`${endpoint}/${id}`)

        dispatch(getSingleSuccess(data))

      } catch (error) {
        dispatch(fetchFail())
      }
    }

    
  return {
    getBlogData,
    postBlogData,
    getMyBlogData,
    getDataWithToken,
    addRemoveLike,
    getSingleData,
    getLike
  }
}

export default useBlogCall