import uniqid from 'uniqid'

const initialState =  {
    notes: [ 
        // {
        //     id: uniqid(),
        //     where: 'Test City CA',
        //     when: '01.01.2018',
        //     what: 'Test notes. test note. test this'
        // }
    ],
    evidence: [
        
    ],
    person: [
        {
            name: 'Prison Mike',
            lastSeen: '02/01/2018',
            dateSeen: '01/01/2018',
            image: 'https://ih1.redbubble.net/image.330825939.9863/poster%2C210x230%2Cf8f8f8-pad%2C210x230%2Cf8f8f8.lite-1.jpg'
        },
        {
            name: 'Ron Swanson',
            lastSeen: '03/01/2018',
            dateSeen: '02/01/2018',
            image: 'https://ih0.redbubble.net/image.69141097.8710/st%2Csmall%2C215x235-pad%2C210x230%2Cf8f8f8.lite-1.jpg'
        }
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
    
    // Saves an evidence entry
    if (action.type == "SAVE_EVIDENCE") {
        state = {
            ... state,
            evidence: action.payload
        }
    }

    // Saves a person
    if (action.type == "SAVE_PERSON"){
        state = {
            ... state,
            person: action.payload
        }
    }


    return state;
}

export default rootReducer