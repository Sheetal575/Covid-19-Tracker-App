import React , {useState} from 'react'

export default function Searchbar(props){
    
    const [query, setQuery] = useState("");

    props.query(query)
    return(
        <>
           <input type="text" className='form-control w-30' placeholder='Type Country Name Here'  onChange={(e) => setQuery(e.target.value)}/>
        </>
    )
}
