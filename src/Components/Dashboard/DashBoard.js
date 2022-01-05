import React , {useState} from 'react'
import CovidTable from '../CovidTable/CovidTable'
import Searchbar from '../SearchBar/SearchBar'
import './DashBoard.css'
export default function DashBoard(){
    const [search,setSearch] = useState("")
    
    const pull_data = (data) =>{
        setSearch(data);
    }
    
    return(
        <div className='h-100'>
            <div className='row text-center p-4 justify-content-center'>
                <div className="col-md-4 col-xs-12">
                    <Searchbar query={pull_data} />
                </div>
            </div>
            <div className='row text-center p-4 justify-content-center h-100'>
                <div className="col-md-10 col-xs-12">
                    <CovidTable serachCountry = {search}/>
                </div>
            </div>
        </div>
    )
}