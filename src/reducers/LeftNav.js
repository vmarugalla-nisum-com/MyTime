const initialState = [
    {   
        id:1,
        name: 'MyTeam',
    },
    {
        id:2,
        name: 'My Team Allocations',
    },
    {
        id:3,
        name: 'My Login Details'
    }
];

const LeftNav = (state = initialState, action) => {
    switch(action.type){
        case 'TEST':
            return 'TEST';
        default:
            return state;
    }
}

export default LeftNav;