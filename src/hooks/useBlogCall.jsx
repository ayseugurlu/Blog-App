import React from 'react'
import { useDispatch } from 'react-redux'
import { fetchStart, getBlogSuccess } from '../features/blogSlice'
import { axiosPublic } from './useAxios'


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
  return {
    getBlogData
  }
}

export default useBlogCall