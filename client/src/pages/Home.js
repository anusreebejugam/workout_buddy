import { useEffect} from "react";
import { useWorkoutContext } from "../hooks/useWorkoutContext";

//components
import WorkoutDetials from '../components/WorkoutDetails'
import WorkoutForm  from "../components/WorkoutForm";

const Home = () => {

    //const [workouts, setWorkouts] = useState(null);
    const {workouts, dispatch} = useWorkoutContext();

    useEffect(() => {
        const fetchWorkout = async () => {
            const response = await fetch('http://localhost:4000/api/workouts');
            const json = await response.json()

            if(response.ok) {
                //setWorkouts(json);
                dispatch({type: 'SET_WORKOUTS', payload: json})
            }
        }
        fetchWorkout();
    }, []);

    return (
        <div className="home">
            <div className="workouts">
                {workouts && workouts.map((workout) => (
                    <WorkoutDetials key={workout._id} workout = {workout}/>
                ))}
            </div>
            <WorkoutForm/>
        </div>
    )
}

export default Home;