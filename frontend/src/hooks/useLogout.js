import { useAuthContext } from "./useAuthContext"
import { useWorkoutContext } from "./useWorkoutContext"

export const useLogOut = () => {

    const { dispatch } = useAuthContext()
    const { dispatch: workoutsDispatch } = useWorkoutContext()
    
    const logout = () => {
        // Remove user from storage
        localStorage.removeItem('user')

        // Dispatch Logout action
        dispatch({type: "LOGOUT"})
        workoutsDispatch({type: "SET_WORKOUTS", payload: null})
    }

    return {logout}
}