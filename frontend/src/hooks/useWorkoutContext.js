import { WorkoutContext } from "../context/WorkoutContext";
import { useContext } from "react";

// Hook returns the value of WorkoutContext
// Method is invoked whenever we want to use our workout data
export const useWorkoutContext = () => {
    const context = useContext(WorkoutContext)

    if (!context) {
        throw Error('useWorkoutContext must be used inside an WorkoutContextProvider')
    }

    return context
}