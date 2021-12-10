import React from "react";
import { useNavigate } from "react-router-dom";

function Userinfo(){
 let navigat=useNavigate();
let userdetail = localStorage.getItem('user_mail')
   userdetail = JSON.parse(userdetail)
   console.log(userdetail)

   function onLogout(){
    
       alert("Logout Succesfully");
       navigat("/")
       localStorage.setItem('log',false)
   }

    return(
        <div className="userinfo">

              <h2>User Profile</h2>
             <div  className="userdetail">
                  <p><label>UserId: </label><span>{userdetail.users.userId}</span></p>
                  <p><label>UserName: </label><span>{userdetail.users.userName}</span></p>
                  <p><label>UserEmail: </label><span>{userdetail.users.userEmail}</span></p>
                  <p><label>Phone Number: </label><span>{userdetail.users.userPhone}</span></p>
             </div>
             <button onClick={onLogout}>LOGOUT</button>
         </div>
            
    
    )
}
 
 export default Userinfo;