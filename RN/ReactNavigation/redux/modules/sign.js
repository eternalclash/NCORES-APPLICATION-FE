import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import axios from "axios";
import AsyncStorage from '@react-native-community/async-storage'
const CHECK_EMAIL = "CHECK_EMAIL";
const CHECK_PASSWORD = "CHECK_PASSWORD";
const CHECK_CONFIRMPASSWORD = "CHECK_CONFIRMPASSWORD";
const CHECK_NICKNAME = "CHECK_NICKNAME";
const SIGN_UP = "SIGN_UP";
const LOG_IN = "LOG_IN";
const CHECK="CHECK"

const initialState = {
    email: "",
    password: "",
    confirmPassword: "",
    nickName: "",
    check:true
}

const checkEmail=createAction(CHECK_EMAIL,(email)=>({email}))
const checkPassword=createAction(CHECK_PASSWORD,(password)=>({password}))
const checkConfirmPassword = createAction(CHECK_CONFIRMPASSWORD, (confirmPassword) => ({ confirmPassword }))
const check = createAction(CHECK,(check)=>({check}))
const checkNickName=createAction(CHECK_NICKNAME,(nickName)=>({nickName}))
// const signUp=createAction(CHECK_EMAIL,(email)=>({email}))
// const logIn=createAction(CHECK_EMAIL,(email)=>({email}))

const checkEmailAPI = (email) => {
    return function (dispatch, { navigation }) {
      axios({
        method: "POST",
        url: "http://54.180.134.111/user/email/check",
        data: { email },
        headers: {
          Accept: "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      })
        .then((res) => {
            dispatch(checkEmail(email));
            dispatch(check(true))
            console.log(email)
          
        })
        .catch((err) => {
            console.log(email)
            dispatch(check(false))
          throw new Error(err);
        });
    };
};

const checkPasswordAPI = (password,confirmPassword) => {
    return function (dispatch, navigation) {
      axios({
        method: "POST",
        url: "http://54.180.134.111/user/password/check",
        data: { password,confirmPassword },
        headers: {
          Accept: "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      })
        .then((res) => {
          dispatch(checkPassword(password));
            dispatch(checkConfirmPassword(confirmPassword));
            dispatch(check(true))
         
        })
        .catch((err) => {
            dispatch(check(false))
          throw new Error(err);
        });
    };
};

const signUpAPI = (email,password,confirmPassword,nickname) => {
    return function (dispatch) {
      axios({
        method: "POST",
        url: "http://54.180.134.111/user",
        data: { email,password,confirmPassword,nickname},
        headers: {
          Accept: "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      })
          .then((res) => {
              
            dispatch(checkNickName(nickname))
            dispatch(check(true))
        
        })
          .catch((err) => {
            dispatch(checkNickName(nickname))
            dispatch(check(false))
          throw new Error(err);
        });
    };
};
const logInAPI =  (email,password) => {
    return function (dispatch) {
      axios({
        method: "POST",
        url: "http://54.180.134.111/user/login",
        data: { email,password},
        headers: {
          Accept: "application/json",
          "Access-Control-Allow-Origin": "*",
          
        },
      })
          .then(async (res) => {
              console.log(res.data)
           await AsyncStorage.setItem('token', JSON.stringify(res.data.token))
              const token = AsyncStorage.getItem('token')
              console.log(token)
            dispatch(check(true))
        
        })
          .catch((err) => {
           
            dispatch(check(false))
          throw new Error(err);
        });
    };
};


  
export default handleActions(
    {
      
       [CHECK_EMAIL]: (state, action) =>
        produce(state, (draft) => {
          draft.email=action.payload.email
        }),
        [CHECK_PASSWORD]: (state, action) =>
        produce(state, (draft) => {
            draft.password = action.payload.password
            
        }),
        [CHECK_CONFIRMPASSWORD]: (state, action) =>
        produce(state, (draft) => {
            draft.confirmPassword=action.payload.confirmPassword
        }),
        [CHECK_NICKNAME]: (state, action) =>
        produce(state, (draft) => {
            draft.nickName=action.payload.nickName
        }),
        [CHECK]: (state, action) =>
        produce(state, (draft) => {
            draft.check=action.payload.check
        }),
        
    },
  
    initialState
  );

  export const actionCreators = {
      checkEmailAPI,
      checkPasswordAPI,
      signUpAPI,
      logInAPI,
  };