import { useAuthContext } from "./useAuthContext";
import { useWorkoutsContext } from "./useWorkoutContext";

export const useLogout = () => {
  const { dispatch: authDispatch } = useAuthContext();
  const { dispatch: workoutDispatch } = useWorkoutsContext();

  const logout = () => {
    localStorage.removeItem("user");
    authDispatch({ type: "LOGOUT" });
    workoutDispatch({ type: "SET_WORKOUTS", payload: null });
  };

  return { logout };
};
