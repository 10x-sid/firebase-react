import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { getAuth } from "firebase/auth";
import { app } from "./firebase";
const auth = getAuth(app)

export default function SignIn(){
    const [email,setEmail]= useState("")
    const [pass,setPass] = useState("")
    const sigin=()=>{
        signInWithEmailAndPassword(auth,email,pass).then(res=>{
            console.log(res);
            alert("sucess")
            setEmail("")
            setPass("")
            
        }).catch((e)=>{
            console.log((e)?.message || "something occured");
            
            alert("eroor occured")
        })
    }

    
    return(
        <div className="signin">
            <label>login</label>
            <input type="text" placeholder="email" value={email}  required onChange={e=>setEmail(e.target.value)}/>
            <input type="text" placeholder="password" value={pass} onChange={e=>setPass(e.target.value)}/>
            <button onClick={()=>sigin()}>signIN</button>

        </div>
    )
}