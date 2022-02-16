import NewMeetupForm from "../components/Meetups/NewMeetupForm";
import {useNavigate} from "react-router-dom"
function NewMeetupsPage(){

   const navigate =useNavigate();

    function addMeetupHandler(MeetupData){
        fetch('https://react-started-9f78b-default-rtdb.firebaseio.com/meetups.json',
            {
                method:'POST',
                body: JSON.stringify(MeetupData), 
                headers:{
                    'Content-Type': 'application/json'
                }
            }
        ).then(()=>{
            navigate("/")
        });

    }
    return <div>
        <h1>Add New Meetup</h1>
        <NewMeetupForm onaddMeetup={addMeetupHandler}/>
    </div>

}

export default NewMeetupsPage;