

import React,{useState, useEffect} from 'react'
import { Componentdisplay} from  './Components/Componentdisplay'
import './App.css';

// getting the values of local storage
const getDatafromLS=()=>{
  const data = localStorage.getItem('Contacts');
  if(data){
    return JSON.parse(data);
  }
  else{
    return []
  }
}

export const App = () => {

  // main array of objects state || books state || books array of objects
  const [Contacts, setContact]=useState(getDatafromLS());

  // input field states
  const [username, setusername]=useState('');
  const [email, setemail]=useState('');
  const [mobilenumber, setmobile]=useState('');
  const [address, setaddress]=useState('');
  const [dateofvisit, setvisit]=useState('');
  const [id, setid]=useState('');

  // form submit event
  const handleAddContactSubmit=(e)=>{
    e.preventDefault();
    // creating an object
    let Contact={
      id,
      username,
      email,
      mobilenumber,
      address,
      dateofvisit

    }
    setContact([...Contacts,Contact]);
    setusername('');
    setemail('');
    setmobile('');
    setaddress('');
    setvisit('');
    setid('');
  }

  // delete book from LS
  const deleteContact=(id)=>{
    const filteredContacts=Contacts.filter((element,index)=>{
      return element.id !== id
    })
    setContact(filteredContacts);
  }

  // saving data to local storage
  useEffect(()=>{
    localStorage.setItem('Contacts',JSON.stringify(Contacts));
  },[Contacts])

  return (<pre >
    <div className='wrapper'>
    
      <h1>Customer Registration form</h1>
      <p>Maintaining Customer Registration Information </p>
      <div className='main'>

        <div className='form-container'>
          <form autoComplete="off" className='form-group'
          onSubmit={handleAddContactSubmit}>
             <label>ID           </label>
            <input type="text" required
            onChange={(e)=>setid(e.target.value)} value={id}></input>

            <br></br>
            <br></br>
            <label>Username     </label>
            <input type="text"  required
            onChange={(e)=>setusername(e.target.value)} value={username}></input>
            <br></br>
            <br></br>

            <label>Email  ID    </label>
            <input type="email" required
            onChange={(e)=>setemail(e.target.value)} value={email}></input>
            <br></br>
            <br></br>

            <label>Mobile Number</label>
            <input type="number"  required
            onChange={(e)=>setmobile(e.target.value)} value={mobilenumber}></input>
            <br></br>
            <br></br>

            <label>Address      </label>
            <input type="textarea"  required
            onChange={(e)=>setaddress(e.target.value)} value={address}></input>
            <br></br>
            <br></br>
            <label>Date of Visit</label>
            <input type="text"  required
            onChange={(e)=>setvisit(e.target.value)} value={dateofvisit}></input>
            <br></br>
            <br></br>
            
            <button type="submit" className='btn btn-success btn-md'>
              ADD
            </button>
          </form>
        </div>

        <div className='view-container'>
        <b>Customer Visit Information </b>
          {Contacts.length>0&&<>
            <div className='table-responsive'>
              <table className='table'>
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Username</th>
                    <th>EmailID</th>
                    <th>Address</th>
                    <th>Mobile</th>
                    <th>Dateofvisit</th>
                    <th>Delete</th>
                  </tr>
                </thead>
                <tbody>
                 
                  <Componentdisplay Contacts={Contacts} deleteContact={deleteContact}/>
                </tbody>
              </table>
            </div>
            <button className='btn btn-danger btn-md'
            onClick={()=>setContact([])}>Delete All Contact</button>
          </>}
          {Contacts.length < 1 && <div>No Customer has visited till now !</div>}
        </div>

      </div>
    </div>
    </pre>
  )
}

export default App