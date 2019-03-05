import {
    FETCH_ERROR,
    FETCH_FINALLY,
    FETCH_START,
    FETCH_SUCCESS, SHOW_MODAL,
    TOGGLE_MODAL
} from "./actionTypes";

const initialState = {
    modalVisible: false,
    list: [],
    after: '',

};

const reducer = (state = initialState, action) => {

        switch (action.type) {

            case FETCH_START:
                return {
                    ...state,
                    modalVisible: true,
                };

            case FETCH_SUCCESS:
                if (state.after === action.after) return {...state, modalVisible: false};
                let copy = state.list;
                copy.push(...action.res);
                return {
                    ...state,
                    modalVisible: false,
                    list: copy,
                    after: action.after,
                };

            case FETCH_ERROR:
                return {
                    ...state,
                    modalVisible: false,
                    error: action.error
                };

            case FETCH_FINALLY:
                return {
                    ...state,
                    modalVisible: false,
                };

            case SHOW_MODAL:
                return {
                    ...state,
                    modalVisible: !state.modalVisible,
                };


            default:
                break;
        }
        return state;

    }
;

export default reducer;
