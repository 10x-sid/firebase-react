import { getDatabase ,ref,set} from "firebase/database" //one is ref of database and one to alter the db my connceting it through db
import {app} from "./firebase"


const db = getDatabase(app) //get db from app config and connect to real time db usign config url


export default function App(){
  

  const insert = async()=>{
      set(ref(db, 'user/test-object2'),{
      id:2,
      name:"sid"
    })

    //set used to alter the tabel adn ref take two argument of ref of db and second on has tabel ref  and naem of the obj  that you wanna save
    
  }
  
  return(
    <>
      <button onClick={()=>insert()}>PUT</button>
      
    </>
  )
}