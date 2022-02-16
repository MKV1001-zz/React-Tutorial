import MeetupItemList from "../components/Meetups/MeetupListItem";
import { useState, useEffect } from "react";
 
function AllMeetupsPage(){
  const [isloading,setIsLoading]=useState(true);
  const [loadedMeetups, setLoadedMeetups] = useState([]);

  useEffect(()=>{
    fetch('https://react-started-9f78b-default-rtdb.firebaseio.com/meetups.json'
  ).then(response=>{
    return response.json();
  }).then(data=>{
    setIsLoading(false);
    const meetups = []
    for(const key in data){
      const meetup = {
        id:key,
        ...data[key]
      }
      meetups.push(meetup)
    }
    setLoadedMeetups(meetups)
  });

  },[]);
   
  if (isloading){
    return <section>
      <p>Loading...</p>
    </section>
  }

    return  <section>
        <h1>All Meetups</h1>
        <MeetupItemList meetups={loadedMeetups}/>
    </section>
}

export default AllMeetupsPage;