import React from "react";
import { useNavigate } from "react-router-dom";

export default function Contact_conainer(props){
    const navigate=useNavigate()

    return (
        <div className="contact_container">
            <img src={props.profilepic_url} alt=""></img>

            <div className="chat_details" onClick={(e)=>{props.chat_with_individual(props.index)}}>
                <span>{props.display_name}</span>
                <span>Hello world</span>
            </div>
            <div>
                <span>1hr</span>
            </div>
        </div>
    )
}