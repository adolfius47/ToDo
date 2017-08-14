import {EDIT_STATE_TENDER_FAILURE} from '../../actions'

export default payload => {
    return {
        type: EDIT_STATE_TENDER_FAILURE,
        payload
    }
}