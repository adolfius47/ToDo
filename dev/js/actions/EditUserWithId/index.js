import $ from 'jquery'

import Failure from './Failure'
import Before from './Before'
import Success from './Success'

export default (model) => dispatch => {
    const data = {...model}
    const method = 'POST'
    $.ajax({
        method,
        url: GosTenderRouter[method].stateTender,
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