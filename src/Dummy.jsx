import React,{useState,useEffect} from 'react'
import axios from 'axios'
import {Input,Card} from 'antd'  
const Dummy = () => {
    const [countries, setCountries]=useState([])
    const [countyMatch, setCountryMatch]=useState([])

    useEffect(()=>{
        const loadcountries = async (e) => {
            const response = await axios.get("http://edxkart.com/api/get-institution?search=ism dhanbad");
            setCountries(response.data);
        }
        loadcountries();
    },[])
    console.log(countries);

    const searchcountries = (text) =>{
        if(!text){
            setCountryMatch([]);
        }
        else{
        let matches = countries.filter((country)=>{
            const regex= new RegExp(`${text}`,"gi");
            return country.institution.match(regex)
        })
        setCountryMatch(matches);
        }
    }
    return (
        <div>
            <Input
            placeholder="name"
            onChange={(e)=>{searchcountries(e.target.value)}}
            />

            {countyMatch && countyMatch.map((item,index)=>(
                <div>
                    <Card title={item.institution}> </Card>
                </div>
            ))}
        </div>
    )
}

export default Dummy
