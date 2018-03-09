import uniqid from 'uniqid'

const initialState =  {
    notes: [ 
        // {
        //     id: uniqid(),
        //     where: 'Test City CA',
        //     when: '01.01.2018',
        //     what: 'Test notes. test note. test this'
        // }
    ]
}

const rootReducer = (state = initialState, action) => {


    // Saves a new note entry
    if (action.type == "SAVE_NOTE") {
        state = {
            ... state,
            notes: action.payload
        }
    }


    return state;
}

export default rootReducer