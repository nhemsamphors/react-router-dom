import React from 'react';
import photo3 from '../img/photo3.jpg';

const Contact = () => {
    return(
        <div>
        <h1 className="p-3 bg-dark text-white">Contact</h1>
        <div className="row mt-5">
        <div className="col-md-6">
        <img src={photo3} alt="photo3" height="300"/>
        </div>
        <div className="col-md-6">
        <p className="mt-5">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
        when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
        It has survived not only five centuries, but also the leap into electronic typesetting,
        remaining essentially unchanged.
        It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
        and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
       </p>
        
        </div>
        </div>
        </div>
    )
}
export default Contact;