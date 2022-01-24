import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import axios from "axios";
import AsyncStorage from '@react-native-community/async-storage'

const GET_COSMETICS = "GET_COSMETICS"
const GET_ELEMENTS = "GET_ELEMENTS"
const getCosmetics = createAction(GET_COSMETICS, (cosmetics) => ({ cosmetics }))
const getElements = createAction(GET_ELEMENTS, (elements) => ({ elements }))
const initialState = {
  cosmetics: "",
  elements:"",
}


const userElementsAPI = (cosmetic) => {
  return async function  (dispatch, navigation) {
     await axios({
      method: "GET",
      url: "http://54.180.134.111/user/elements/0",
       data: {},
         headers: {
            // "Content-Type": "multipart/form-data",
        //   Accept: "application/json",
        //    "Access-Control-Allow-Origin": "*",
          "Authorization": await AsyncStorage.getItem("token"),
        },
      })
        .then(async(res) => { //바디 부분
         
         dispatch(getElements(res.data.data))
        console.log(res.data.data)
      })
         .catch(async (err) => {
           
        console.log("유저 성분 에러")
      
        throw new Error(err);
      });
  };
};
const userCosmeticAPI = (cosmetic) => {
    return async function  (dispatch, navigation) {
       await axios({
        method: "GET",
        url: "http://54.180.134.111/user/cosmetics/0",
         data: {},
           headers: {
              // "Content-Type": "multipart/form-data",
          //   Accept: "application/json",
          //    "Access-Control-Allow-Origin": "*",
            "Authorization": await AsyncStorage.getItem("token"),
          },
        })
          .then(async(res) => { //바디 부분
           
            dispatch(getCosmetics(res.data.data))
            console.log(res.data.data)
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
       
        
    },
  
    initialState
  );

  export const actionCreators = {
      userCosmeticAPI,
      userElementsAPI
  };