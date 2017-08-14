"use strict"
import {combineReducers} from 'redux'
import * as Action from '../actions';


const data = (previousState = null, action = {}) => {

    switch (action.type) {

        case Action.FETCH_USER_BY_ID_SUCCESS:
            return action.payload
        case Action.FETCH_USER_FAILURE:
            return null


        default:
            return previousState;


    }
}

const isLoading = (previousState = false, action = {}) => {

    switch (action.type) {
        case Action.FETCH_USER:
            return true
        case Action.FETCH_USER_SUCCESS:
        case Action.FETCH_USER_FAILURE:
            return false
        default:
            return previousState
    }
}

const errors = (previousState = null, action = {}) => {

    switch (action.type) {
        case Action.FETCH_USER:
        case Action.FETCH_USER_SUCCESS:
            return null
        case Action.FETCH_USER_FAILURE:
            return action.payload
        default:
            return previousState
    }
}

const isLoaded = (previousState = false, action = {}) => {

    switch (action.type) {
        case Action.FETCH_USER:
            return false
        case Action.FETCH_USER_SUCCESS:
        case Action.FETCH_USER_FAILURE:
            return true
        default:
            return previousState
    }
}


export default combineReducers({
    isLoading,
    isLoaded,
    errors,
    data,


})