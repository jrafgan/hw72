import {FETCH_ERROR, FETCH_FINALLY, FETCH_START, FETCH_SUCCESS, SHOW_MODAL} from "./actionTypes";
import axios from "../axios_url";

export const fetchStart = () => {
    return {type: FETCH_START}
};

export const fetchSuccess = (res, after) => {
    return {type: FETCH_SUCCESS, res, after}
};

export const fetchError = () => {
    return {type: FETCH_ERROR}
};

export const fetchFinally = () => {
    return {type: FETCH_FINALLY}
};

export const showModal = () => {
    return {type: SHOW_MODAL}
};

export const fetchList = () => {
    let url = 'r/pics.json';
    return (dispatch, getState) => {
        dispatch(fetchStart());
        const after = getState().after;
        if (after !== '') {
            url = 'r/pics.json?count=20&after=' + after;
        }

        axios.get(url).then(response => {
            dispatch(fetchSuccess(response.data.data.children, response.data.data.after));
        }, error => {
            console.log(error);
        });
    }
};