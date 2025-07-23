import React from 'react'
import { useEffect } from 'react'

function LocationSearchPanel(props) {

        
        //Sample of locations:
        const locations = [
                "24B, Near Kapoor's Cafe, Bhopal, Somewhere We want lorum epson things. 24B, Near Kapoor's Cafe, Bhopal, Somewhere We want lorum epson things. 24B, Near Kapoor's Cafe, Bhopal, Somewhere We want lorum epson things.",
                "24c, Near Kapoor's Cafe, Bhopal, Somewhere We want lorum epson things. 24B, Near Kapoor's Cafe, Bhopal, Somewhere We want lorum epson things. 24B, Near Kapoor's Cafe, Bhopal, Somewhere We want lorum epson things.",
                "24B, Near Kapoor's Cafe, Bhopal, Somewhere We want lorum epson things. 24B, Near Kapoor's Cafe, Bhopal, Somewhere We want lorum epson things. 24B, Near Kapoor's Cafe, Bhopal, Somewhere We want lorum epson things.",
                "24B, Near Kapoor's Cafe, Bhopal, Somewhere We want lorum epson things. 24B, Near Kapoor's Cafe, Bhopal, Somewhere We want lorum epson things. 24B, Near Kapoor's Cafe, Bhopal, Somewhere We want lorum epson things.",
        ]
  return (
    <>  
        {
                locations.map( function(element, idx){
                        return(
                                <div key={idx} onClick={()=>{
                                props.setVehiclePanel(true)
                                props.setPanelOpen(false)

                                }} className='flex item-center border-2 border-white active:border-gray-500 justify-center bg-[#eee] mx-4 my-2 rounded-lg py-2 '>
                                        <h2 className='bg-[#eee] px-3 w-[10%] rounded-full'><i className='ri-map-pin-fill'></i></h2>
                                        <h4 className='px-2 text-sm w-[90%] '>{element}</h4>
                                </div>
                        )

                })
        }

    </>
  )
}

export default LocationSearchPanel;