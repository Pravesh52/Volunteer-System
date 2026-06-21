import React from 'react'

const Signup = () => {
  return (
    <div>
      <form>
        <h2>Signup</h2>
        <label>Full Name:</label>
        <input type='text' placeholder='Enter full name..'></input>
        <br/>
        <br></br>
        <label>Email:</label>
        <input type='email' placeholder='example@gmail.com'></input>
        <br/>
        <br/>
        <label>Mobile number:</label>
        <input type="number" placeholder='Enter mobile number' />
        <br/>
        <br/>
        <label>Gender:</label>
        <input type='radio' name='gender' value="Male"></input>
        <label>Male</label>
        <input type='radio' name='gender' value="Female"></input>
        <label>Female</label>
        <input type='radio' name='gender' value="others"></input>
        <label>Others</label>
        <br></br>
        <br></br>
        <label>Date of birth:</label>
        <input type="date"></input>
        <br></br>
        <br></br>
        <label>State:</label>
        <input types="text"></input>
        <br></br>
        <br></br>
        <label>City:</label>
        <input type="text"></input>
        <br></br>
        <br></br>
        

      </form>

    </div>
  )
}

export default Signup