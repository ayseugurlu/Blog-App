import React from 'react'
import { useDispatch } from 'react-redux'
import { fetchFail, fetchStart } from '../features/blogSlice'
import useAxios, { axiosPublic } from './useAxios'
import { loginSuccess, logoutSuccess, registerSuccess } from '../features/authSlice'
import { toastErrorNotify, toastSuccessNotify } from '../helper/ToastNotify'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

const useAuthCall = () => {
const dispatch = useDispatch()
const navigate =useNavigate()
const {token} =useSelector((state)=>state.auth)
const axiosWithToken = useAxios()


    const register = async(userInfo) => {
        
        dispatch(fetchStart())
        try {
            const {data} = await axiosPublic.post("users/",userInfo)

            dispatch(registerSuccess(data))
            toastSuccessNotify("Sign up is successfully")
            navigate("/")
        } catch (error) {
            dispatch(fetchFail())
            toastErrorNotify(error.message)
        }

    }

    const login = async(userInfo) => {
        dispatch(fetchStart())

        try {
            const {data} = await axiosPublic.post("auth/login/",userInfo)

            console.log("login:",data);
            dispatch(loginSuccess(data))
            toastSuccessNotify("Login is successfully")
            navigate("/")


        } catch (error) {
            dispatch(fetchFail())
            toastErrorNotify("Login can not be performed")
        }
    }

    const logout = async () => {
        dispatch(fetchStart())
        try {
            await axiosWithToken("auth/logout/")
            dispatch(logoutSuccess())
            toastSuccessNotify("Logout is successfully")
            navigate("/")
        } catch (error) {
            dispatch(fetchFail())
            toastErrorNotify("Logout can not be performed")
            
        }
    }

    const updateProfile = async (id,info,bearer) => {
        dispatch(fetchStart())
        try {
            const {data} = await axiosWithToken.put(`users/${id}`,info)
            toastSuccessNotify(`${endpoint} is successfully updated!`)
        } catch (error) {
            dispatch(fetchFail())
            toastErrorNotify(`${endpoint} can not be updated`)
            
        }finally{
            await axiosWithToken.post("/auth/refresh",bearer)
        }
    }
  return {register,login,logout,updateProfile}
}

export default useAuthCall