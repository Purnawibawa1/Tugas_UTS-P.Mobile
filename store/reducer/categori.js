import { SHOW_CATEGORI } from "../actions/categori"

const initialState = {
    categori:[]
}


const CategoriReducer = (state = initialState,action) =>{
    switch (action.type) {
        case SHOW_CATEGORI:
            return {
                ...state,categori:action.data
            }
        default:
            return state
    }
}

export default CategoriReducer