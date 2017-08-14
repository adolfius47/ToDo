import $ from 'jquery'

import Failure from './Failure'
import Before from './Before'
import Success from './Success'

export default () => dispatch => {
    $.ajax({
        method: 'GET',

  url: 'https://randomuser.me/api/',

            beforeSend: () => {
            dispatch(Before())
        },
        success: (model) => {
            dispatch(Success(model))
        },
        error: (error) => {
            dispatch(Failure({
                code: error.status,
                response: error.responseJSON
            }))
        }
    })
}