const initialState = 
    {   
        id:1,
        name: 'MyTeam',
        content:'My Team content goes here'
    };


const ContentSection = (state = initialState, action) => {
    switch(action.type){
        case 'LOGIN_DATA':
            return action.payload.ContentSection;
        case 'MYTEAM_DATA': 
            return action.payload.ContentSection;
        case 'TEAMALLOCATION_DATA':
            return action.payload.ContentSection;
        default:
            return state;
    }
}

export default ContentSection;