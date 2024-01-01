import React from "react";
import { useState } from "react";
import Contact_conainer from "../components/contact_container";


export default function Search_n_contact(props) {
    const [search_item, set_search_item]=useState('')
    const [users_friends,set_friendly_users]=useState([{photo_url:'./assets/profile.png',display_name:'Peter Kimutai',last_seen:'1hr'},{photo_url:'./assets/profile.png',display_name:'Peter Kimutai',last_seen:'1hr'}])

    
    return (
        <>
            <div className="search_bar">
                <div className="search_container">
                    <input placeholder="search" type="text" onChange={(e)=>{console.log(e.target.value); set_search_item(e.target.value)}} value={search_item}></input>
                    <img src="./assets/search.svg" alt=""></img>
                </div>
            </div>

            <div className="contacted_contacts_container">

                {/* {<Contact_conainer profilepic_url={"./assets/profile.png"} display_name={'Peter Kimutai'} />}

                {<Contact_conainer profilepic_url={"./assets/profile.png"} display_name={'Peter Kimutai'} />}

                {<Contact_conainer profilepic_url={"./assets/profile.png"} display_name={'Peter Kimutai'} />} */}

                {(()=>{
                    return users_friends.map((user,index)=>{
                        return (
                            <Contact_conainer key={index} profilepic_url={user.photo_url} display_name={user.display_name} index={index}  chat_with_individual={ props.chat_with_individual}/>
                        )
                    })
                    
                })()}

            </div>
        </>
    )
}