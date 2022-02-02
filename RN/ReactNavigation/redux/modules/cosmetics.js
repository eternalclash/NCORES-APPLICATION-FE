import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import axios from "axios";
import AsyncStorage from '@react-native-community/async-storage'

const MAINCOS = "MAINCOS";
const SIMPLECOS = "SIMPLECOS"
const CATEGORY = "CATEGORY"
const DETAIL = "DETAIL"
const ELEMENT = "ELEMENT"
const mainCos=createAction(MAINCOS,(main)=>({main}))
const simpleCos = createAction(SIMPLECOS, (simple) => ({ simple }))
const category = createAction(CATEGORY, (category) => ({ category }))
const detail = createAction(DETAIL, (detail)=>({detail}))
const element = createAction(ELEMENT, (element)=>({element}))
const initialState = {
  main: "",
  simple: "",
  category: "",
  detail: "",
  element: "",
}


const mainCosmeticAPI = (cosmetic) => {
  return async function  (dispatch, navigation) {
    await axios.get("https://plaluvs-backend.me/cosmetic/worry-recommends", {
      headers: {
        // "Content-Type": "multipart/form-data",
    //   Accept: "application/json",
    //    "Access-Control-Allow-Origin": "*",
      "Authorization": await AsyncStorage.getItem("token"),
   },
    })
        .then((res) => { //바디 부분
         dispatch(mainCos(res.data.data))

      
      })
         .catch(async (err) => {
           
        console.log("홈 화장품 에러")
      
        throw new Error(err);
      });
  };
};

const categoryAllAPI = (cosmetic) => {
  return async function  (dispatch, navigation) {
    await axios.get("https://plaluvs-backend.me/category", {
    headers: {
      // "Content-Type": "multipart/form-data",
  //   Accept: "application/json",
  //    "Access-Control-Allow-Origin": "*",
    "Authorization": await AsyncStorage.getItem("token"),
 },
  })
        .then(async(res) => { //바디 부분
         
         dispatch(category(res.data.data))
        console.log(res.data)
      })
         .catch(async (err) => {
           
        console.log("카테고리 화장품 에러")
      
        throw new Error(err);
      });
  };
};

const categoryCosmeticAPI = (cosmetic) => {
    return async function  (dispatch, navigation) {
      await axios.get("https://plaluvs-backend.me/cosmetic/detail-recommends/617/0", {
    headers: {
      // "Content-Type": "multipart/form-data",
  //   Accept: "application/json",
  //    "Access-Control-Allow-Origin": "*",
    "Authorization": await AsyncStorage.getItem("token"),
 },
  })
          .then(async(res) => { //바디 부분
           
            dispatch(detail(res.data.data))
            dispatch(element(res.data.data))
          console.log(res.data)
        })
           .catch(async (err) => {
             
          console.log("카테고리 화장품 에러")
        
          throw new Error(err);
        });
    };
};
const detailCosmeticAPI = (id) => {
  return async function  (dispatch, navigation) {
    await axios.get(`https://plaluvs-backend.me/cosmetic/detail-recommends/${id}/0`, {
    headers: {
      // "Content-Type": "multipart/form-data",
  //   Accept: "application/json",
  //    "Access-Control-Allow-Origin": "*",
    "Authorization": await AsyncStorage.getItem("token"),
 },
  })
        .then(async(res) => { //바디 부분
          dispatch(detail(res.data.data))
         
        console.log(res.data)
      })
         .catch(async (err) => {
           
        console.log("디테일 화장품 에러")
      
        throw new Error(err);
      });
  };
};
  const simpleCosmeticAPI = (cosmetic) => {
    return async function  (dispatch, navigation) {
      await axios.get("https://plaluvs-backend.me/cosmetic/simple-recommends", {
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
  const elementCosmeticAPI = (elementsId,categoryId) => {
    return async function  (dispatch, navigation) {
      await axios.get(`https://plaluvs-backend.me/cosmetic/elements-recommend/${elementsId}/${categoryId}/0`, {
        headers: {
          // "Content-Type": "multipart/form-data",
      //   Accept: "application/json",
      //    "Access-Control-Allow-Origin": "*",
        "Authorization": await AsyncStorage.getItem("token"),
     },
      })
          .then(async(res) => { //바디 부분
           
           dispatch(element(res.data.data))
          console.log(res.data)
        })
           .catch(async (err) => {
             
          console.log("니면상 화장품 에러")
        
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
        [CATEGORY]: (state, action) =>
        produce(state, (draft) => {
          draft.category = action.payload.category
        }),
        [DETAIL]: (state, action) =>
        produce(state, (draft) => {
          draft.detail = action.payload.detail
        }),
        [ELEMENT]: (state, action) =>
        produce(state, (draft) => {
          draft.element = action.payload.element
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
    categoryAllAPI,
    detailCosmeticAPI,
      element
  };