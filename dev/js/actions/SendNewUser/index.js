import $ from 'jquery'

import Failure from './Failure'
import Before from './Before'
import Success from './Success'

export default (model, id) => dispatch => {
    const data = {...model}
    const method = 'PUT'
    const URL = GosTenderRouter[method].stateTender.replace("__id__", id)
    $.ajax({
        method,
        url: URL,
        data: JSON.stringify(data),
        contentType: 'application/json',
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