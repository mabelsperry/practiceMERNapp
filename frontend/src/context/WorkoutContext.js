import { createContext, useReducer } from "react";

export const WorkoutContext = createContext()

// Params
// State: previous state
// Action: defined in dispatch function
export const workoutsReducer = (state, action) => {
    switch (action.type) {
        case 'SET_WORKOUTS': 
            return {
                workouts: action.payload
            }
        case 'CREATE_WORKOUT':
            // Returns array including new workout and a spread of the previous workouts
            return {
                workouts: [action.payload, ...state.workouts]
            }
        case 'DELETE_WORKOUT':
            return {
                workouts: state.workouts.filter((w) => w._id !== action.payload._id)
            }
        default:
            return state
    }
}

// Holds data to be shared across pages/components
export const WorkoutContextProvider = ( {children} ) => {

    // params: Reducer function (defined above), initial value for state
    // dispatch function updates state value (needs to be defined)
    // When dispatch is called, the reducer function is invoked
    // passes dispatch action into reducer function
    const [state, dispatch] = useReducer(workoutsReducer, {
        workouts: null
    })

    return (
        <WorkoutContext.Provider value={{...state, dispatch}}>
            { children }
        </WorkoutContext.Provider>
    )
}