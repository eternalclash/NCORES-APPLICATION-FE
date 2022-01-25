import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import axios from "axios";
import AsyncStorage from '@react-native-community/async-storage'
import { actionCreators as cosActions} from "./cosmetics";
import { actionCreators as myActions} from "./myPage";
const MARK_COSMETIC = "MARK_COSMETIC";
const markCosmetic=createAction(MARK_COSMETIC,(cosmetic)=>({cosmetic}))
const markElement=createAction(MARK_COSMETIC,(element)=>({element}))

const initialState = {
    cosmetic: "",
    element:"",
}


const markCosmeticAPI = (id) => {
  return async function  (dispatch, navigation) {
     await axios({
      method: "POST",
      url: `http://54.180.134.111/cosmetic/mark/${id}`,
       data: {},
         headers: {
            // "Content-Type": "multipart/form-data",
        //   Accept: "application/json",
        //    "Access-Control-Allow-Origin": "*",
          "Authorization": await AsyncStorage.getItem("token"),
        },
      })
        .then(async(res) => { //바디 부분
         await dispatch(cosActions.mainCosmeticAPI())
         await dispatch(myActions.userCosmeticAPI())
         
      
      })
         .catch(async (err) => {
           
        console.log("홈 화장품 에러")
      
        throw new Error(err);
      });
  };
};
const markElementAPI = (element) => {
    return async function  (dispatch, navigation) {
       await axios({
        method: "POST",
        url: `http://54.180.134.111/elements/mark/${element}`,
         data: {},
           headers: {
              // "Content-Type": "multipart/form-data",
          //   Accept: "application/json",
          //    "Access-Control-Allow-Origin": "*",
            "Authorization": await AsyncStorage.getItem("token"),
          },
        })
          .then(async(res) => { //바디 부분
           
           
       
        })
           .catch(async (err) => {
             
          console.log("카테고리 화장품 에러")
        
          throw new Error(err);
        });
    };
  };

export default handleActions(
    {
        [MARK_COSMETIC]: (state, action) =>
        produce(state, (draft) => {
          draft.cosmetic = action.payload.cosmetic
        }),
       
        
    },
  
    initialState
  );

  export const actionCreators = {
      markCosmeticAPI,
      markElementAPI,
   
  };