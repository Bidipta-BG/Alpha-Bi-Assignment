import React, {useState } from 'react'
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from './firebase'
// import { useNavigate } from 'react-router-dom';


const Signup = () => {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    // let navigate = useNavigate()

    const submit = async () => {
        console.log(name, email, password);
        if (!email || !password || !name) {
            alert("All field required");
            return;
        }
        createUserWithEmailAndPassword(auth, email, password)
        .then(res => {
            console.log(res)
            // navigate("/login")
        })
        .catch(err => alert(err.message))
    }



    function submitAction(x) {
        x.preventDefault()
    }

  return (
    <div>
          <div className="row">

              <div className="w-50 mx-auto mt-5">
                  <h1>SignUp</h1>
                  <form onSubmit={submitAction}>
               
                      <div className="mt-4">
                          <label className="form-label">First Name</label>
                          <input className="form-control" type="text" placeholder="Enter Your Name"
                              value={name} onChange={(e) => setName(e.target.value)} />
                      </div>
           
                      <div className="mt-4">
                          <label className="form-label">Email address</label>
                          <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"
                              value={email} onChange={(e) => setEmail(e.target.value)} />
                      </div>
                      <div className="mt-4">
                          <label className="form-label">Password</label>
                          <input type="password" className="form-control" id="exampleInputPassword1"
                              value={password} onChange={(e) => setPassword(e.target.value)} />
                      </div>
                      <div className="mt-4">
                          <button onClick={submit} type="submit" className="btn btn-primary">Submit</button>
                      </div>
                  </form>
              </div>

          </div>
    </div>
  )
}

export default Signup