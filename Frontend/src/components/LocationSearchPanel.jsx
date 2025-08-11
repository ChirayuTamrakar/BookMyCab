import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios';

function LocationSearchPanel({ setPanelOpen, setVehiclePanel, inputValue, setInputValue }) {

        const [locations, setLocations] = useState([]);

        useEffect(() => {
                async function fetchLocations() {
                        try {
                                if(inputValue != "") {
                                        const response = await axios.get(`http://localhost:4000/maps/get-suggestions?input=${inputValue}`);
                                        setLocations(response.data.data);
                                        } 
                        } catch (error) {
                                console.error("Error fetching locations:", error);
                        }
                }
                fetchLocations();
        }, [inputValue]);


        return (
        <>  
                {
                locations.map( function(element, idx){
                        return(
                                <div key={idx} onClick={()=>{
                                setInputValue(element);
                                }} className='flex item-center border-2 border-white active:border-gray-500 justify-center bg-[#eee] mx-4 my-2 rounded-lg py-2 '>
                                        <h2 className='bg-[#eee] px-3 w-[10%] rounded-full'><i className='ri-map-pin-fill'></i></h2>
                                        <h4 className='px-2 text-sm w-[90%]'>{element}</h4>
                                </div>
                        )
                })
                }
        </>
        )
}

export default LocationSearchPanel;