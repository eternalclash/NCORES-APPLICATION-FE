import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import axios from "axios";
import AsyncStorage from '@react-native-community/async-storage'

const GET_COSMETICS = "GET_COSMETICS"
const GET_ELEMENTS = "GET_ELEMENTS"
const GET_INFO = "GET_INFO"
const getCosmetics = createAction(GET_COSMETICS, (cosmetics) => ({ cosmetics }))
const getElements = createAction(GET_ELEMENTS, (elements) => ({ elements }))
const getInfo = createAction(GET_INFO, (info) => ({ info }))
const initialState = {
  cosmetics: "",
  elements: "",
  info:"",
}


const userElementsAPI = (cosmetic) => {
  return async function  (dispatch, navigation) {
    await axios.get("https://plaluvs-backend.me/user/elements", {
      headers: {
        // "Content-Type": "multipart/form-data",
    //   Accept: "application/json",
    //    "Access-Control-Allow-Origin": "*",
      "Authorization": await AsyncStorage.getItem("token"),
   },
    })
        .then(async(res) => { //바디 부분
         
         dispatch(getElements(res.data))
        console.log(res.data.data)
      })
         .catch(async (err) => {
           
        console.log("유저 성분 에러")
      
        throw new Error(err);
      });
  };
};
const userInfoAPI = (cosmetic) => {
  return async function  (dispatch, navigation) {
    await axios.get("https://plaluvs-backend.me/user/info", {
      headers: {
        // "Content-Type": "multipart/form-data",
    //   Accept: "application/json",
    //    "Access-Control-Allow-Origin": "*",
      "Authorization": await AsyncStorage.getItem("token"),
   },
    })
        .then((res) => { //바디 부분

         dispatch(getInfo(res.data.nickname))
      
      })
         .catch(async (err) => {
           
        console.log("userInfoAPI 에러")
      
        throw new Error(err);
      });
  };
};
const userCosmeticAPI = (cosmetic) => {
    return async function  (dispatch, navigation) {
      await axios.get("https://plaluvs-backend.me/user/cosmetic", {
    headers: {
      // "Content-Type": "multipart/form-data",
  //   Accept: "application/json",
  //    "Access-Control-Allow-Origin": "*",
    "Authorization": await AsyncStorage.getItem("token"),
 },
  })
          .then(async(res) => { //바디 부분
           
            dispatch(getCosmetics(res.data))
         
        })
           .catch(async (err) => {
             
          console.log("유저화장품 에러")
        
          throw new Error(err);
        });
    };
  };

export default handleActions(
    {
      [GET_COSMETICS]: (state, action) =>
      produce(state, (draft) => {
        draft.cosmetics = action.payload.cosmetics
      }),
      [GET_ELEMENTS]: (state, action) =>
      produce(state, (draft) => {
        draft.elements = action.payload.elements
      }),
      [GET_INFO]: (state, action) =>
      produce(state, (draft) => {
        draft.info = action.payload.info
      }),
        
    },
  
    initialState
  );

  export const actionCreators = {
      userCosmeticAPI,
    userElementsAPI,
    userInfoAPI,
  };