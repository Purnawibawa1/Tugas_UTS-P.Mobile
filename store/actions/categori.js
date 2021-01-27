import {CATEGORIES} from "../../data/dummy-data"
export const SHOW_CATEGORI = "SHOW_CATEGORI"


const loadCategori = () =>{
     return new Promise((resolve) =>{
         const cat = CATEGORIES
         resolve(cat)
     })
}

export const fetchCategori = () =>{
    return async(dispatch) =>{
        const categori = await loadCategori()
        dispatch({
            type:SHOW_CATEGORI,
            data:categori

        })
    }
}