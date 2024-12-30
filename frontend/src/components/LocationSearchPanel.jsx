import React from 'react'

const LocationSearchPanel = (props) => {

    console.log(props);

    const locations = [
        "5304 Drexel Ave Chicago",
        "1343 Regency Pl Lawrence",
        "123 Main St New York",
        "211 Park Ave Boston",
    ]

  return (
    <div>
        {/* this is just sample data */}
        {
            locations.map(function (elem, idx ) {
                return <div
                key={idx}
                onClick={() =>{
                    props.setVehiclePanel(true);
                    props.setPanelOpen(false);
                }} 
                className='flex gap-4 border-2 p-3 border-grey-100 active:border-black rounded-xl items-center justify-start my-4 gap-4'>
                <h2 className='bg-[#eee] h-8 flex items-center justify-center w-12 rounded-full'><i className="ri-map-pin-fill "></i></h2>
                <h4 className='font-medium'>{elem}</h4>
            </div>
             })
        }
        

       

        
    </div>
  )
}

export default LocationSearchPanel