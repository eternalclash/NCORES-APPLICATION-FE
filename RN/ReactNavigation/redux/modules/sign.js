import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import axios from "axios";
import AsyncStorage from '@react-native-community/async-storage'

//login상태인지 CHECK
const CHECK_LOGIN ="CHECK_LOGIN"

const CHECK_EMAIL = "CHECK_EMAIL";
const CHECK_PASSWORD = "CHECK_PASSWORD";
const CHECK_CONFIRMPASSWORD = "CHECK_CONFIRMPASSWORD";
const CHECK_NICKNAME = "CHECK_NICKNAME";
const SET_GENDER = "SET_GENDER"
const SET_AGE = "SET_AGE"
const SIGN_UP = "SIGN_UP";
const LOG_IN = "LOG_IN";
const CHECK="CHECK"
const LOGIN = "LOGIN"
const ERROR = "ERROR"
const LOGIN_ERROR = "LOGIN_ERROR"
const EMAIL_ERROR = "EMAIL_ERROR"
const PASSWORD_ERROR = "PASSWORD_ERROR"
const NICKNAME_ERROR = "NICKNAME_ERROR"
const GENDER_ERROR = "GENDER_ERROR"
const AGE_ERROR = "AGE_ERROR"
const WORRY_ERROR = "WORRY_ERROR"
const INDICATE_ERROR = "INDICATE_ERROR" 
const initialState = {
  email: "",
  password: "",
  confirmPassword: "",
  nickName: "",
  check: false,
  login: false,
  loginError: "",
  emailError: "",
  passwordError: "",
  nickNameError: "",
  genderError: "",
  ageError: "",
  worryError: "",
  indicateError: "",
  checkLogin:false,
}


const checkEmail=createAction(CHECK_EMAIL,(email)=>({email}))
const checkPassword=createAction(CHECK_PASSWORD,(password)=>({password}))
const checkConfirmPassword = createAction(CHECK_CONFIRMPASSWORD, (confirmPassword) => ({ confirmPassword }))
const check = createAction(CHECK, (check) => ({ check }))
const login = createAction(LOGIN, (login)=> ({login}))
const checkNickName = createAction(CHECK_NICKNAME, (nickName) => ({ nickName }))
const loginError =createAction(LOGIN_ERROR, (loginError)=>({loginError}))
const emailError =createAction(EMAIL_ERROR, (emailError)=>({emailError}))
const passwordError =createAction(PASSWORD_ERROR, (passwordError)=>({passwordError}))
const nickNameError =createAction(NICKNAME_ERROR, (nickNameError)=>({nickNameError}))
const genderError =createAction(GENDER_ERROR, (genderError)=>({genderError}))
const ageError = createAction(AGE_ERROR, (ageError) => ({ ageError }))
const indicateError = createAction(INDICATE_ERROR, (indicateError)=>({indicateError}))
const worryError = createAction(WORRY_ERROR, (worryError) => ({ worryError }))
const checkLogin = createAction(CHECK_LOGIN, (checkLogin)=>({checkLogin}))
// const signUp=createAction(CHECK_EMAIL,(email)=>({email}))
// const logIn=createAction(CHECK_EMAIL,(email)=>({email}))
const checkLoginMD = () => {
   return async function (dispatch) {
    if (await AsyncStorage.getItem("token"))
    {
      console.log(true)
      dispatch(checkLogin(true))
    }
    else
      await dispatch(checkLogin(false))
  }
 

};


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
            dispatch(emailError(err.response.data))
            dispatch(check(false))
           
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
            dispatch(passwordError(err.response.data))
        });
    };
};
const setGenderAPI = (gender) => {
    return async function  (dispatch, navigation) {
       await axios({
        method: "PATCH",
        url: "http://54.180.134.111/user/gender",
         data: { gender },
         headers: {
            Accept: "application/json",
             "Access-Control-Allow-Origin": "*",
            "Authorization": await AsyncStorage.getItem("token"),
          },
        })
          .then(async(res) => {
            
            console.log(await AsyncStorage.getItem("token"))
            dispatch(check(true))
        })
        .catch(async(err) => {
            dispatch(check(false))
            dispatch(genderError(err.response.data))
          throw new Error(err);
        });
    };
};

const setAgeAPI = (age) => {
  return async function  (dispatch, navigation) {
     await axios({
      method: "PATCH",
      url: "http://54.180.134.111/user/age",
       data: { age },
       headers: {
          Accept: "application/json",
           "Access-Control-Allow-Origin": "*",
          "Authorization": await AsyncStorage.getItem("token"),
        },
      })
        .then(async(res) => {
          
 
          dispatch(check(true))
      })
      .catch(async(err) => {
          dispatch(check(false))
          dispatch(ageError(err.response.data))
        throw new Error(err);
      });
  };
};
const setIndicateAPI = (indicate) => {
  return async function  (dispatch, navigation) {
     await axios({
      method: "POST",
      url: "http://54.180.134.111/skin/oil-indicate",
       data: { skinId:indicate },
       headers: {
          Accept: "application/json",
           "Access-Control-Allow-Origin": "*",
          "Authorization": await AsyncStorage.getItem("token"),
        },
      })
        .then(async(res) => {
          
 
          dispatch(check(true))
      })
      .catch(async(err) => {
          dispatch(check(false))
          dispatch(indicateError(err.response.data))    
     
      });
  };
};
const setWorryAPI = (worry) => {
  return async function  (dispatch, navigation) {
     await axios({
      method: "POST",
      url: "http://54.180.134.111/skin/worry",
       data: {skinWorryId:worry},
       headers: {
          Accept: "application/json",
           "Access-Control-Allow-Origin": "*",
          "Authorization": await AsyncStorage.getItem("token"),
        },
      })
        .then(async(res) => {
          
 
          dispatch(check(true))
      })
      .catch(async(err) => {
          dispatch(check(false))
          dispatch(worryError(err.response.data)) 
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
              
           
            dispatch(check(true))
            
        })
        .catch((err) => {
            dispatch(nickNameError(err.response.data))
            dispatch(checkNickName(nickname))
            dispatch(check(false))
          throw new Error(err);
        });
    };
};
const logInAPI =   (email,password) => {
    return function(dispatch) {
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
            await AsyncStorage.setItem('token',res.data.token)
              console.log(await AsyncStorage.getItem('token'))
              dispatch(checkNickName(await AsyncStorage.getItem('token')))
            //   const rawtoken = AsyncStorage.getItem('token')
            // //   const token = JSON.parse(AsyncStorage.getItem('token2'))
            //   console.log(JSON.parse(AsyncStorage.getItem('token')))
            //   console.log(token)
              dispatch(loginError(""))
             
             await dispatch(login(res.data.ageExist && res.data.genderExist))  
             await dispatch(check(true))
        
            
        })
        .catch((err) => {
            console.log(err)
            console.log(err.response)
            dispatch(loginError(err.response.data))
            dispatch(check(false))
         
        });
    };
};


  
export default handleActions(
  {
      
    [CHECK_EMAIL]: (state, action) =>
      produce(state, (draft) => {
        draft.email = action.payload.email
      }),
    [CHECK_PASSWORD]: (state, action) =>
      produce(state, (draft) => {
        draft.password = action.payload.password
            
      }),
    [CHECK_CONFIRMPASSWORD]: (state, action) =>
      produce(state, (draft) => {
        draft.confirmPassword = action.payload.confirmPassword
      }),
    [CHECK_NICKNAME]: (state, action) =>
      produce(state, (draft) => {
        draft.nickName = action.payload.nickName
      }),
    [SET_GENDER]: (state, action) =>
      produce(state, (draft) => {
        draft.gender = action.payload.gender
      }),
    [SET_AGE]: (state, action) =>
      produce(state, (draft) => {
        draft.age = action.payload.age
      }),
    [CHECK]: (state, action) =>
      produce(state, (draft) => {
        draft.check = action.payload.check
      }),
    [LOGIN]: (state, action) =>
      produce(state, (draft) => {
        draft.login = action.payload.login
      }),
        
    [LOGIN_ERROR]: (state, action) =>
      produce(state, (draft) => {
        draft.loginError = action.payload.loginError
      }),
    [EMAIL_ERROR]: (state, action) =>
      produce(state, (draft) => {
        draft.emailError = action.payload.emailError
      }),
    [PASSWORD_ERROR]: (state, action) =>
      produce(state, (draft) => {
        draft.passwordError = action.payload.passwordError
      }),
    [NICKNAME_ERROR]: (state, action) =>
      produce(state, (draft) => {
        draft.nickNameError = action.payload.nickNameError
      }),
    [GENDER_ERROR]: (state, action) =>
      produce(state, (draft) => {
        draft.genderError = action.payload.genderError
      }),
    [AGE_ERROR]: (state, action) =>
      produce(state, (draft) => {
        draft.ageError = action.payload.ageError
      }),
    [WORRY_ERROR]: (state, action) =>
      produce(state, (draft) => {
        draft.worryError = action.payload.worryError
      }),
    [INDICATE_ERROR]: (state, action) =>
      produce(state, (draft) => {
        draft.indicateError = action.payload.indicateError
      }),
    [CHECK_LOGIN]: (state, action) =>
      produce(state, (draft) => {
        draft.checkLogin= action.payload.checkLogin
      })
    },
  
    initialState
  );

export const actionCreators = {
    
   //로그인 체크
      checkLoginMD,
      checkEmailAPI,
      checkPasswordAPI,
      signUpAPI,
      logInAPI,
      setGenderAPI,
      setAgeAPI,
    setIndicateAPI,
    setWorryAPI,
    check,
      
    //에러
    loginError,
    emailError,
    nickNameError,
    passwordError,
    genderError,
    ageError,
    indicateError,
    worryError,
  };