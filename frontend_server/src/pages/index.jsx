import React from "react";
import { useState, useEffect } from "react";
//Firebase 
import { provider, auth } from "../global/config.js";
import { signInWithPopup } from "firebase/auth";
import { getAuth } from "firebase/auth";

//Pages
import Login_view from "./login/Login";
import Index_view from "./index/index_view";
import Chat_view from "./chat/chat_view.jsx";

//css
import './css/style.css'
import './css/login.css'
import './css/chat.css'


export default function Index() {
    const [page, set_page] = useState('index')
    const [my_details, set_my_details] = useState({ 'display_name': null, 'email': null, 'sid': null })

    window.history.pushState(null, null, document.URL);
    window.addEventListener('popstate', function (event) {
        set_page('index');
    });





    function get_user_details() {
        const auth = getAuth();
        const user = auth.currentUser;
        if (user) {
            // The user is authenticated.
            console.log(user)
            set_page('index')
        } else {
            // The user is not authenticated.
            //console.log(user)
            set_page('login')
        }
    }

    function auth_result_data(data) {
        console.log(data)
        set_my_details({ 'display_name': data['display_name'], 'email': data['email'], 'sid': null })
        set_page('index')
    }


    function chat_with_individual(user_data) {
        console.log(user_data)
        set_page('chat')

    }

    function navy(page) {
        set_page(page)
    }

    useEffect((() => {
        get_user_details()
        console.log('The page is now loaded')
    }), [])

    return (
        <>
            {(() => {
                if (page === 'login') {
                    return (<Login_view auth_result_data={auth_result_data} />)
                } else if (page === 'index') {
                    return (<Index_view chat_with_individual={chat_with_individual} />)
                } else if (page === 'chat') {
                    return (<Chat_view chat_with_individual={chat_with_individual} navy={navy} />)
                }
            })()}
        </>
    )

}