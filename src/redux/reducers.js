import uniqid from 'uniqid'

const initialState =  {
    notes: [ 
        {
            id: uniqid(),
            where: 'Test City CA',
            when: '01.01.2018',
            what: 'Test notes. test note. test this'
        }
    ],
    evidence: [
        {
            id: uniqid(),
            name: 'Someone',
            date: '1/1/12',
            location: 'test',
            found: 'test'
        },
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
    
    if (action.type == "SAVE_EVIDENCE") {
        state = {
            ... state,
            evidence: action.payload
        }
    }


    return state;
}

export default rootReducer