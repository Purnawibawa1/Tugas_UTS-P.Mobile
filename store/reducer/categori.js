import { FILTER, SHOW_CATEGORI } from "../actions/categori"
import {CATEGORIES} from "../../data/dummy-data"

const initialState = {
    categori:[],
    filtercategori:CATEGORIES
}


const CategoriReducer = (state = initialState,action) =>{
    switch (action.type) {
        case SHOW_CATEGORI:
            return {
                ...state,categori:action.data
            }
        case FILTER:
            const idcategori = action.id
            const filtercategori = state.filtercategori.filter(cat => cat.id !== idcategori)
            return{
                ...state,
                categori:filtercategori
            }
        default:
            return state
    }
}

export default CategoriReducer