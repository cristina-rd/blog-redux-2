export const openAlert = (openedAlert) => {
    return {
        type: 'OPEN_ALERT',
        openedAlert,
    }
}

export const closeAlert = (openedAlert) => {
    return {
        type: 'CLOSE_ALERT',
        openedAlert,
    }
}