const initialState = 
    {   
        id:1,
        name: 'MyTeam',
        content:'My Team content goes here'
    };


const ContentSection = (state = initialState, action) => {
    switch(action.type){
        case 'TEST':
            return 'TEST';
        default:
            return state;
    }
}

export default ContentSection;