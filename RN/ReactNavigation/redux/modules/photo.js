import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import axios from "axios";
import AsyncStorage from '@react-native-community/async-storage'
import { actionCreators as CosmeticActions } from "./cosmetics";
import { actionCreators as ReportActions } from "./report"
 const CHECK_PHOTO = "CHECK_PHOTO"
const checkPhoto = createAction(CHECK_PHOTO,(checkPhoto)=>({checkPhoto}))

const initialState = {
   checkPhoto:""
}


const postImageAPI = (image) => {
  return async function  (dispatch, navigation) {
     await axios({
      method: "POST",
      url: "https://plaluvs-backend.me/photo",
       data: image,
         headers: {
            "Content-Type": "multipart/form-data",
        //   Accept: "application/json",
        //    "Access-Control-Allow-Origin": "*",
          "Authorization": await AsyncStorage.getItem("token"),
        },
      })
        .then(async(res) => { //바디 부분

         
          dispatch(ReportActions.cameraReportAPI())
          dispatch(CosmeticActions.mainCosmeticAPI())
        
        
         
        }).then(
          () => {
            dispatch(checkPhoto("success"))
        }
      )
         .catch(async (err) => {
            console.log(await AsyncStorage.getItem("token"))

         dispatch(checkPhoto("fail"))
        throw new Error(err);
      });
  };
};


export default handleActions(
    {
      
      [CHECK_PHOTO]: (state, action) =>
      produce(state, (draft) => {
        draft.checkPhoto = action.payload.checkPhoto
      }),
        
    },
  
    initialState
  );

  export const actionCreators = {
    postImageAPI,
    checkPhoto,
  };