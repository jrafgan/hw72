import {FETCH_ERROR, FETCH_FINALLY, FETCH_START, FETCH_SUCCESS} from "./actionTypes";

export const fetchStart = () => {
  return {type: FETCH_START}
};

export const fetchSuccess = (res) => {
    return {type: FETCH_SUCCESS, res}
};

export const fetchError = () => {
    return {type: FETCH_ERROR}
};

export const fetchFinally = () => {
    return {type: FETCH_FINALLY}
};