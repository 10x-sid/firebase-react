// import { getDatabase ,ref,set} from "firebase/database" //one is ref of database and one to alter the db my connceting it through db
import {app} from "./firebase"

import { createUserWithEmailAndPassword, getAuth } from "firebase/auth"
import { useState } from "react";
import SignIn from "./Signin"

// const db = getDatabase(app) //get db from app config and connect to real time db usign config url

const auth = getAuth(app);


// const insert = async()=>{
//   set(ref(db, 'user/test-object3'),{
//   id:2,
//   name:"sid"
// })

//set used to alter the tabel adn ref take two argument of ref of db and second on has tabel ref  and naem of the obj  that you wanna save


export default function App(){
  


  const [email,setEmail]= useState("")
  const [pass,setPass] = useState("")
 
const emailLogin = async ()=>{
  const res = await createUserWithEmailAndPassword(auth,email,pass);
  console.log(res);
  alert("logged in")
  setEmail("")
  setPass("")
  
  
}
  
  return(
    <div>
      <label>email</label><input type="text" placeholder="email" required value={email} onChange={e=>setEmail(e.target.value)}/>
    <label>password</label><input type="text" placeholder="password" value={pass}  required onChange={e=>setPass(e.target.value)}/>
    <button onClick={()=>emailLogin()}>PUT</button>

    <br /><br /><br />

     

    <SignIn/>
      
    </div>
  )
}