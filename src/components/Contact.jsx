import React from 'react';
import { Extenders } from '../Extenders';
Extenders.init();


function Contact(props) {
    function handleSubmit(event) {
        event.preventDefault();
        let formData = new FormData(event.currentTarget);
        const value = JSON.stringify(Object.fromEntries(formData));
        const json = JSON.tryParse(value);
        fetch("http://localhost:5000/contact", {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: "put",
            body: JSON.stringify(json)
        })
        .then(resp => resp.text()).then(text => {
            const json = JSON.tryParse(text);
            console.log(json);
        });
    }

    return (
        <div className='myForm'>
            <form id='ContactData' onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="firstname1" className="form-label text-light">firstname</label>
                    <input type="firstname" className="form-control" id="firstname1" name="firstname" aria-describedby="emailHelp" />
                    
                </div>
                <div className="mb-3">
                    <label htmlFor="lastname1" className="form-label text-light">lastname</label>
                    <input type="lastname" className="form-control" id="lastname1" name="lastname" aria-describedby="emailHelp" />
                    
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label text-light">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" name="email" aria-describedby="emailHelp" />
                    
                </div>
                
                <div className="mb-3">
                    <label htmlFor="exampleFormControlTextarea1" className="form-label text-light">Example textarea</label>
                    <textarea className="form-control" id="exampleFormControlTextarea1" name="message" rows="3"></textarea>
                </div>
                <input type="submit" className="btn btn-primary mySubmit" name="submit" value="submit"></input>
            </form>
        </div>
    );

};
export default Contact;

