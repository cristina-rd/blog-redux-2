const INITIAL_STATE = {
    openedAlert: false,
}

export function app(state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'OPEN_ALERT':
            return {
                ...state,
                openedAlert: action.openedAlert,
            }
        case 'CLOSE_ALERT':
            return {
                ...state,
                openedAlert: action.openedAlert,
            }
        default:
            return state
    }
}