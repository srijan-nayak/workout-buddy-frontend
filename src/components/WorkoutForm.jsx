import { useState } from "react";
import { useWorkoutsContext } from "../hooks/useWorkoutContext";

const WorkoutForm = () => {
  const { dispatch } = useWorkoutsContext();
  const [title, setTitle] = useState(null);
  const [load, setLoad] = useState(null);
  const [reps, setReps] = useState(null);
  const [error, setError] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const workout = { title, load, reps };
    const response = await fetch(
      import.meta.env.VITE_API_URL + "/api/workouts",
      {
        method: "POST",
        body: JSON.stringify(workout),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const json = await response.json();
    if (!response.ok) {
      setError(json.error);
      return;
    }
    setTitle("");
    setLoad("");
    setReps("");
    setError("");
    console.log("new workout added", json);
    dispatch({ type: "CREATE_WORKOUT", payload: json });
  };

  return (
    <form className="create" onSubmit={handleSubmit}>
      <h3>Add a New Workout</h3>
      <label htmlFor="title">Exercise Title:</label>
      <input
        type="text"
        id="title"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
      />
      <label htmlFor="load">Load (in kg):</label>
      <input
        type="number"
        id="load"
        onChange={(e) => setLoad(+e.target.value)}
        value={load}
      />
      <label htmlFor="reps">Reps:</label>
      <input
        type="number"
        id="reps"
        onChange={(e) => setReps(+e.target.value)}
        value={reps}
      />
      <button>Add Workout</button>
      {error && <div className="error">{error}</div>}
    </form>
  );
};

export default WorkoutForm;
