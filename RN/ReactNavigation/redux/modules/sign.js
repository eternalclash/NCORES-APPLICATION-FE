import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import axios from "axios";
import AsyncStorage from '@react-native-community/async-storage'

//login상태인지 CHECK
const WORRY_LOGIN = "WORRY_LOGIN"
const CHECK_LOGIN ="CHECK_LOGIN"
const CHECKL = "CHECKL"
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
const DELETE_USER = "DELETE_USER"
const LOGIN_ERROR = "LOGIN_ERROR"
const EMAIL_ERROR = "EMAIL_ERROR"
const PASSWORD_ERROR = "PASSWORD_ERROR"
const NICKNAME_ERROR = "NICKNAME_ERROR"
const GENDER_ERROR = "GENDER_ERROR"
const AGE_ERROR = "AGE_ERROR"
const WORRY_ERROR = "WORRY_ERROR"
const INDICATE_ERROR = "INDICATE_ERROR" 
const DELETE_ERROR = "DELETE_ERROR"
const HEAD_ERROR = "HEAD_ERROR"
const initialState = {
  worryLogin:"",
  email: "",
  password: "",
  confirmPassword: "",
  nickName: "",
  check: false,
  checkL: false,
  login: false,
  loginError: "",
  emailError: "",
  passwordError: "",
  nickNameError: "",
  genderError: "",
  ageError: "",
  worryError: "",
  indicateError: "",
  checkLogin: false,
  deleteUser: false,
  deleteError: false,
}
const worryLogin = createAction(WORRY_LOGIN,(worryLogin)=>({worryLogin}))
const checkL = createAction(CHECKL, (checkL)=>({checkL}))
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
const checkLogin = createAction(CHECK_LOGIN, (checkLogin) => ({ checkLogin }))
const deleteUser = createAction(DELETE_USER, (deleteUser) => ({ deleteUser }))
const deleteError = createAction(DELETE_ERROR, (deleteError)=>({deleteError}))
// const signUp=createAction(CHECK_EMAIL,(email)=>({email}))
// const logIn=createAction(CHECK_EMAIL,(email)=>({email}))
const checkLoginMD = (check) => {
   return async function (dispatch) {
    dispatch(checkLogin(check))
  }
 

};


const kakaoLoginAPI = (email,password,nickname) => {
  return async function  (dispatch, navigation) {
  
    await axios({
      method: "POST",
      url: "https://plaluvs-backend.me/user/kakao/login",
       data: { email,password,nickname },
       headers: {
          Accept: "application/json",
           "Access-Control-Allow-Origin": "*",
         
        },
      })
        .then(async(res) => { //바디 부분
          console.log(res.data)
          dispatch(loginError(""))
          await AsyncStorage.setItem('token',res.data.token)
          await dispatch(login(res.data.ageExist && res.data.genderExist))  
          await dispatch(check(true))
      })
         .catch(async (err) => {
           
        console.log("카카오 에러")
      
        throw new Error(err);
      });
  };
};
const worryLoginMD = (check) => {
  return async function (dispatch) {
   dispatch(worryLogin(check))
 }


};


const deleteUserAPI = (password) => {
  return async function  (dispatch, navigation) {
    await axios({
      method: "POST",
      url: "https://plaluvs-backend.me/user/delete",
       data: { password },
       headers: {
          Accept: "application/json",
           "Access-Control-Allow-Origin": "*",
          "Authorization": await AsyncStorage.getItem("token"),
        },
      })
        .then((res) => { //바디 부분
        dispatch(deleteUser(true))
      
      })
         .catch(async (err) => {
          dispatch(deleteError(err.response.data))  
        console.log("회원 탈퇴 에러")
      
        throw new Error(err);
      });
  };
};



const checkEmailAPI = (email) => {
    return function (dispatch, { navigation }) {
      axios({
        method: "POST",
        url: "https://plaluvs-backend.me/user/email/check",
        data: { email },
        headers: {
          Accept: "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      })
        .then((res) => {
            dispatch(checkEmail(email));
            dispatch(check(true))
       
          
        })
        .catch((err) => {
           console.log(err)
            dispatch(emailError(err.response.data))
       
           
        });
    };
};

const checkPasswordAPI = (password,confirmPassword) => {
    return function (dispatch, navigation) {
      axios({
        method: "POST",
        url: "https://plaluvs-backend.me/user/password/check",
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
        url: "https://plaluvs-backend.me/user/gender",
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
      url: "https://plaluvs-backend.me/user/age",
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
      url: "https://plaluvs-backend.me/skin/now/status",
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
      url: "https://plaluvs-backend.me/skin/worry",
       data: {id:worry},
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
const setHeadAPI = (worry) => {
  return async function  (dispatch, navigation) {
     await axios({
      method: "POST",
      url: "https://plaluvs-backend.me/skin/worry",
       data: {id:worry},
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
        url: "https://plaluvs-backend.me/user",
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
      url: "https://plaluvs-backend.me/user/login",
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
      [CHECKL]: (state, action) =>
      produce(state, (draft) => {
        draft.checkL = action.payload.checkL
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
      [WORRY_LOGIN]: (state, action) =>
      produce(state, (draft) => {
        draft.worryLogin = action.payload.worryLogin
      }),
      [DELETE_USER]: (state, action) =>
      produce(state, (draft) => {
        draft.deleteUser = action.payload.deleteUser
      }),
      [DELETE_ERROR]: (state, action) =>
      produce(state, (draft) => {
        draft.deleteError = action.payload.deleteError
      }),
    [CHECK_LOGIN]: (state, action) =>
      produce(state, (draft) => {
        draft.checkLogin= action.payload.checkLogin
      })
     
    },
  
    initialState
  );

export const actionCreators = {
  worryLoginMD,
  kakaoLoginAPI,
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
    deleteUser,
    deleteUserAPI,

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