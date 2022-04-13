import React from 'react'



export const Componentdisplay = ({Contacts,deleteContact}) => {
    
    return Contacts.map(Contact=>(
        
        <tr key={Contact.id}>
            <td>{Contact.id}</td>
            <td>{Contact.username}</td>
            <td>{Contact.email}</td>
            <td>{Contact.address}</td>
            <td>{Contact.mobilenumber}</td>
            <td>{Contact.dateofvisit}</td>
            <td className='delete-btn' onClick={()=>deleteContact(Contact.id)}>
              Delete
            </td>           
        </tr>            
    
))
}