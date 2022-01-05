import React , {useState , useEffect} from "react";
import './CovidTable.css';
import {Loading} from '.././loading'
import axios from 'axios'

export default function CovidTable({serachCountry}){
    const [loading,setloading] = useState(true);
    const [codata , setcodata] = useState([]);

    useEffect(() => {
        const covidData =  async() => {
            try{
                setloading(true)
                console.log("hey try")
                await axios.get('https://corona.lmao.ninja/v2/countries?yesterday&sort')
                .then((res)=>{
                    if(res){
                        setcodata(res.data)
                        console.log(codata)
                    }
                })
            }catch(err){
                console.log(err, "Something went wrong!");
            }
            setloading(false)
        };
        covidData();
    }, [])


    return(
        <>
        <div className="table-container">
            <table className="table ">
                <thead className="table-header ">
                    <tr >
                    <th scope="col">Country</th>
                    <th scope="col">Total Cases</th>
                    <th scope="col">Today Cases</th>
                    <th scope="col">Total Deaths</th>
                    <th scope="col">Today Deaths</th>
                    <th scope="col">Recovered</th>
                    <th scope="col">Today Recovered</th>
                    <th scope="col">Active Cases</th>
                    <th scope="col">Critical Cases</th>
                    </tr>
                </thead>
                <tbody className="table-body">
                    {loading && <Loading />}
                    {codata
                        ?.filter((post) => {
                            if(serachCountry == undefined){
                                return post;
                            }
                            else if (serachCountry === "") {
                               return post;
                            } else if (post.country?.toLowerCase().includes(serachCountry.toLowerCase())) {
                               return post;
                            }
                            
                        })
                        .map((val,index)=>{
                            return(
                            <tr key={index}>
                                <td><b>{val.country ? <div>{val.country}</div> : "NA"}</b></td> 
                                <td>{val.cases ?  <div>{val.cases}</div> : "NA"}</td>
                                <td>{val.todayCases ? <div>{val.todayCases}</div> : "NA"}</td>
                                <td>{val.deaths ? <div>{val.deaths}</div> : "NA"}</td>
                                <td>{val.todayDeaths ? <div>{val.todayDeaths}</div> : "NA"}</td>
                                <td>{val.recovered ? <div>{val.recovered}</div> : "NA"}</td>
                                <td>{val.todayRecovered ? <div>{val.todayRecovered}</div> : "NA"}</td>
                                <td>{val.active ?  <div>{val.active}</div> : "NA"}</td>
                                <td>{val.critical ? <div>{val.critical}</div> : "NA"}</td>
                            </tr>
                            )
                        })
                    }    
                </tbody>
            </table>
        </div>
        
        </>
    )
}