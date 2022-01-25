import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import axios from "axios";
import AsyncStorage from '@react-native-community/async-storage'
const MAINCOS = "MAINCOS";
const SIMPLECOS = "SIMPLECOS"
const mainCos=createAction(MAINCOS,(main)=>({main}))
const simpleCos = createAction(SIMPLECOS,(simple)=>({simple}))
const initialState = {
  main: "",
  simple:"",
}


const mainCosmeticAPI = (cosmetic) => {
  return async function  (dispatch, navigation) {
     await axios({
      method: "GET",
      url: "http://54.180.134.111/cosmetic/worry-recommends",
       data: {},
         headers: {
            // "Content-Type": "multipart/form-data",
        //   Accept: "application/json",
        //    "Access-Control-Allow-Origin": "*",
          "Authorization": await AsyncStorage.getItem("token"),
        },
      })
        .then(async(res) => { //바디 부분
         dispatch(mainCos(res.data.data))

      
      })
         .catch(async (err) => {
           
        console.log("홈 화장품 에러")
      
        throw new Error(err);
      });
  };
};
const categoryCosmeticAPI = (cosmetic) => {
    return async function  (dispatch, navigation) {
       await axios({
        method: "GET",
        url: "http://54.180.134.111/cosmetic/detail-recommends/617/1",
         data: {},
           headers: {
              // "Content-Type": "multipart/form-data",
          //   Accept: "application/json",
          //    "Access-Control-Allow-Origin": "*",
            "Authorization": await AsyncStorage.getItem("token"),
          },
        })
          .then(async(res) => { //바디 부분
           
           
          console.log(res.data)
        })
           .catch(async (err) => {
             
          console.log("카테고리 화장품 에러")
        
          throw new Error(err);
        });
    };
  };
  const simpleCosmeticAPI = (cosmetic) => {
    return async function  (dispatch, navigation) {
       await axios({
        method: "GET",
        url: "http://54.180.134.111/cosmetic/simple-recommends",
         data: {},
           headers: {
              // "Content-Type": "multipart/form-data",
          //   Accept: "application/json",
          //    "Access-Control-Allow-Origin": "*",
            "Authorization": await AsyncStorage.getItem("token"),
          },
        })
          .then(async(res) => { //바디 부분
          dispatch(simpleCos(res.data.data))
           
          console.log(res.data.data)
        })
           .catch(async (err) => {
             
          console.log("simple 화장품 에러")
        
          throw new Error(err);
        });
    };
  };
  const elementCosmeticAPI = (cosmetic) => {
    return async function  (dispatch, navigation) {
       await axios({
        method: "GET",
        url: "http://54.180.134.111/cosmetic/elements-recommend/161/617/0",  //page 0부터 시작
         data: {},
           headers: {
              // "Content-Type": "multipart/form-data",
          //   Accept: "application/json",
          //    "Access-Control-Allow-Origin": "*",
            "Authorization": await AsyncStorage.getItem("token"),
          },
        })
          .then(async(res) => { //바디 부분
           
           
          console.log(res.data)
        })
           .catch(async (err) => {
             
          console.log("simple 화장품 에러")
        
          throw new Error(err);
        });
    };
  };
export default handleActions(
    {
        [MAINCOS]: (state, action) =>
        produce(state, (draft) => {
          draft.main = action.payload.main
        }),
        [SIMPLECOS]: (state, action) =>
        produce(state, (draft) => {
          draft.simple = action.payload.simple
        }),
       
        
    },
  
    initialState
  );

  export const actionCreators = {
      mainCosmeticAPI,
      categoryCosmeticAPI,
      simpleCosmeticAPI,
      elementCosmeticAPI,
  };