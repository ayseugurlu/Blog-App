import React from 'react'
import { useDispatch } from 'react-redux'
import { fetchFail, fetchStart } from '../features/blogSlice'
import { axiosPublic } from './useAxios'
import { registerSuccess } from '../features/authSlice'
import { toastErrorNotify, toastSuccessNotify } from '../helper/ToastNotify'

const useAuthCall = () => {
const dispatch = useDispatch()

    const register = async(userInfo) => {
        
        dispatch(fetchStart())
        try {
            const {data} = await axiosPublic.post("users/",userInfo)

            dispatch(registerSuccess(data))
            toastSuccessNotify("Sign up is successfully")
            Navigate("/")
        } catch (error) {
            dispatch(fetchFail())
            toastErrorNotify(error.message)
        }

    }
  return {register}
}

export default useAuthCall