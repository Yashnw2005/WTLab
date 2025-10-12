import { useState } from 'react';

function Form() {
  let [fname, setFname] = useState(" ");
  let [lname, setLname] = useState(" ");
  let [email, setEmail] = useState(" ");

  let handeleValidation=()=>
    alert("Submited");

  return (
    <>
      <label>Enter First Name</label>
      <input type="text" value={fname} onChange={(e) => setFname(e.target.value)} />
      <br /> <br />

      <label>Enter Last Name</label>
      <input type="text" value={lname} onChange={(e) => setLname(e.target.value)} />
      <br /> <br />

      <label>Enter Email</label>
      <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
      <br />

      <button type="button" onClick={handeleValidation} >Submit</button>

      <p>Welcome To My Form</p>

      <div>
        {fname} {lname}
      </div>
    </>
  );
}

export default Form;