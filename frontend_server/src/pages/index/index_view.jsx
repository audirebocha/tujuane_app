import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Contact_conainer from "./components/contact_container";
import Search_n_contact from "./main_components/search_n_contacts";

export default function Index_view(props) {
    const navigate = useNavigate()
    const [page, set_page] = useState('index')

    return (
        <div className="body">
            <div className="mv_main">
                <Search_n_contact chat_with_individual={props.chat_with_individual} />
                <div className="control_bar">
                    <div>
                        <img onClick={() => { navigate('/chat') }} src="./assets/groups.svg" alt="" />
                    </div>
                    <div>
                        <img src="./assets/settings.svg" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}