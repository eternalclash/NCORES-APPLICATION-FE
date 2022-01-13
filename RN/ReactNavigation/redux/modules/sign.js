import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import axios from "axios";
import AsyncStorage from '@react-native-community/async-storage'

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
const initialState = {
    email: "",
    password: "",
    confirmPassword: "",
    nickName: "",
    check: false,
    login: false
}


const checkEmail=createAction(CHECK_EMAIL,(email)=>({email}))
const checkPassword=createAction(CHECK_PASSWORD,(password)=>({password}))
const checkConfirmPassword = createAction(CHECK_CONFIRMPASSWORD, (confirmPassword) => ({ confirmPassword }))
const check = createAction(CHECK, (check) => ({ check }))
const login = createAction(LOGIN, (login)=> ({login}))
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
            console.log(await AsyncStorage.getItem("token"))
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
          console.log(await AsyncStorage.getItem("token"))
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
          console.log(await AsyncStorage.getItem("token"))
        throw new Error(err);
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
          console.log(await AsyncStorage.getItem("token"))
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
         
              dispatch(login(res.data.ageExist && res.data.genderExist))
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
        [SET_GENDER]: (state, action) =>
        produce(state, (draft) => {
            draft.gender=action.payload.gender
        }),
        [SET_AGE]: (state, action) =>
        produce(state, (draft) => {
            draft.age=action.payload.age
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
      setGenderAPI,
      setAgeAPI,
    setIndicateAPI,
      setWorryAPI,
      check,
  };