import React,{useEffect} from 'react'
import { actionCreators as signActions } from '../redux/modules/sign';
import { useSelector, useDispatch } from 'react-redux';
import SignInScreen from './SignInScreen';
import MainPage from './MainPage';
const CheckLoginPage = () => {
    const dispatch = useDispatch();
    const isLogin= useSelector(state=>state.sign.checkLogin)
    useEffect(()=>{
       dispatch(signActions.checkLoginMD())
    }, [isLogin])
    console.log(isLogin)
    return (
       isLogin?<MainPage/>:<SignInScreen/>
    )
}

export default CheckLoginPage
