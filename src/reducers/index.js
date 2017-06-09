import { ADD_REMAINDER } from '../constants';


const reminder = (action) => {
    return {
        text: action.text,
        id: Math.random()
    }
}

const reminders = (state = [], action) => {
    let reminders = null
    switch (action.type) {
        case ADD_REMAINDER:
            reminders = [...state, reminder(action)]
            console.log('reminders', reminders)
            return reminders;

        default:
            return state;
    }
}

export default reminders;