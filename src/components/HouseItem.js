import React from 'react';
import '../HousesApp.css'

const externalUrl = "https://www.property24.co.mu/Content/Images/South%20Africa/ImageNotFound/NoPropertyPhoto.png"
export const HouseItem = ({name, url}) => {
    return (
        <div className="card">
            <h2 className="card__title" >{name}</h2>           
            {
                (url===("") || url===null) 
                ? 
                    <img src={externalUrl} alt={name} width="100%"  height='80%'/>
                :   
                    <img src={url} alt={name} width="100%" height='80%'/>
            }
        </div>
    )
}

