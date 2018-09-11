export const fetchData = (arg) => dispatch => {
        dispatch({
                type: 'LOGIN_DATA',
                payload : {
                    ContentSection: {
                        content : 'LOGIN DATA'
                    }
                }
            });
}

export const myTeamData = (arg) => dispatch => {
    dispatch({
            type: 'MYTEAM_DATA',
            payload : {
                ContentSection: {
                    content : 'MYTEAM_DATA'
                }
            }
        });
}


export const myTeamAllocation = (arg) => dispatch => {
    dispatch({
            type: 'TEAMALLOCATION_DATA',
            payload : {
                ContentSection: {
                    content : 'MYTEAM_ALLOCATION_DATA'
                }
            }
        });
}