const initialState = [
    {   
        id:1,
        name: 'MyTeam',
        url:'/MyTeam'
    },
    {
        id:2,
        name: 'My Team Allocations',
        url:'/MyTeamAllocations'
    },
    {
        id:3,
        name: 'My Login Details',
        url:'/MyLogin'
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