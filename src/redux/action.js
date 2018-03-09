export const saveNote = notes => ({ type: "SAVE_NOTE", payload: notes })

// creation for evidence form
export const saveLog = evidence => ({ type: "SAVE_EVIDENCE", payload: evidence })

export const savePerson = person => ({ type: "SAVE_PERSON", payload: person })