
import React from "react";
import {data} from "../../../data";
import "../../../App.css";

const UseStateArray = () =>
 {
    const [people,setPeople] = React.useState(data); // If we use React.useState, then no need again to import useState
    
    const handleRemove = (id) =>{
        alert(id);
        const filtered = people.filter((item)=>
        item.id !== id);
        console.log(id);
        console.log(people);
        console.log(filtered);
        setPeople(filtered);

       
    };

    const handleClear = ()=>{
        setPeople([]);
    }

    return (
        <section>
           {
            people.map((person)=>{
                return(
                <div key = {person.id}>
                    <h3>Id:{person.id}</h3>
                    <h3>Name:{person.name}</h3>
                    {/* <button type = "button" onClick = {(id)=>console.log(id)}>Remove</button> //shorter syntax using arrow function */}
                    <button type = "button" onClick = {()=>handleRemove(person.id)}>Remove Single Item</button> 
                    {/* Here every element has a unique Id. Base on that we will filter and remove the single item. */}
                </div>
            )
            
        })
       
           }
            <button type = "button" onClick = {handleClear} style = {{"marginTop":"2rem"}}>Clear all</button>
        </section>
    
    );
}

export default UseStateArray;

// return(
//     <div>
//         {
//             people.map((person)=>{
//                 const {id,name} = person;
//                 //console.log(person);
//                 return(
//                     <div key = {id}>
//                         <h4>{name}</h4> 
//                         </div>
//                 )
//             })
//         }
//     </div>
// )