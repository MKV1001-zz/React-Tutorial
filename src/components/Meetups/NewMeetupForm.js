import classes from "./NewMeetup.module.css";
import { useRef } from "react";
import Card from "../ui/Card";
function NewMeetupForm(props) {

    const titleInputRef=    useRef();
    const imageInputRef=    useRef();
    const AddressInputRef=    useRef();
    const descriptionInputRef=    useRef();

    function submitHandler(e){
        e.preventDefault();
        const enteredTitle = titleInputRef.current.value;
        const enteredImage = imageInputRef.current.value;
        const enteredaddress = AddressInputRef.current.value;
        const entereddescription = descriptionInputRef.current.value;

        const MeetupData ={
            title:enteredTitle,
            image:enteredImage,
            address:enteredaddress,
            description:entereddescription
        }
        props.onaddMeetup(MeetupData);
    }
  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="title">Meetup Title</label>
          <input type="text" required id="title" ref={titleInputRef}></input>
        </div>
        <div className={classes.control}>
          <label htmlFor="image">Image</label>
          <input type="url" required id="image" ref={imageInputRef}></input>
        </div>
        <div className={classes.control}>
          <label htmlFor="address">Address</label>
          <input type="text" required id="address" ref={AddressInputRef}></input>
        </div>
        <div className={classes.control}>
          <label htmlFor="description">Description</label>
          <textarea required id="description" rows="5" ref={descriptionInputRef}></textarea>
        </div>
        <div className={classes.actions}>
          <button>Add</button>
        </div>
      </form>
    </Card>
  );
}

export default NewMeetupForm;
