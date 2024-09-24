import React from 'react'

function Contact() {
  return (
    <div className='contain'>
     <h1>Contact Form</h1>
     <div className="A">
        <label>Name : </label>
        <input type='text' placeholder='Enter Your Name'></input>
         <br></br><br></br>
        <label>Contact No : </label>
        <input type='number' placeholder='Enter Your Name'></input>
        <br></br><br></br>
        <label>Email : </label>
        <input type='email' placeholder='Enter Your Email'></input>
        <br></br><br></br>
        <label>Message : </label>
        <input type='text' placeholder='Enter Your Message'></input>
        <br></br><br></br>
        <button>Submit</button>
</div>
    </div>
  )
}

export default Contact