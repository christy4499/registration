import { Col, Row } from 'react-bootstrap';
import './App.css';
import  img from './assests/img.jpeg'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function App() {
  /* username */
const [username,setusername] = 
useState('')
const [isusername,setisusername] = useState(true)
/* email */
const [email,setemail] = useState('')
const [isemail,issetemail] = useState(true)
/* password */
const [password,setpassword] = useState('')
const [ispassword,setispassword] = useState(true)

/* cpass */
const[phno,setphno]=useState('')
const[isphno,setisphno]=useState(true)

/* username */
const getvalidate = (e)=>{
const  {name ,value} = e.target
/* console.log(name,value);
setusername(value) */
if(name==='email')
if(value.match(/^[a-zA-Z0-9]+@+[a-zA-Z0-9]+.+[A-z]/)){
  setemail(value)
  issetemail(true)
}
else{
  setemail(value)
  issetemail(false)
}
else if(name==='username'){
  if(!!value.match(/^[a-zA-Z]$/)){
    setusername(value)
    setisusername(true)
  }
  else{
    setusername(value)
    setisusername(false)
  }
  }
  else if(name==='password'){
    if(!!value.match(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/)){
      setpassword(value)
      setispassword(true)
     
    }
    else{
      setpassword(value)
      setispassword(false)
   
    }
    }
   

    else if(name==='phno'){
      if(!!value.match(/^[0-9]{10,}$/)){
        setphno(value)
        setisphno(true)
      }
      else{
        setphno(value)
        setisphno(false)
      }
    }



      }

      const handleCalculate=(e)=>{
       
        if(!password || !email || !username ||!phno)
        {
          alert('please fill the form')
        }
        else{
       alert(`${username} your are registered successfully`)
        }
      }







  return (
    <>
    <Row >
      
   
        <Col lg={6} className=''>
        <div className="ms-4 mt-5" >
        <h1 className='text-primary text-center'>Register here</h1>
        <Form onSubmit={handleCalculate}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label > USERNAME</Form.Label>
        <Form.Control name='username' value={username || ""}  onChange={(e)=>getvalidate(e)} type="text" placeholder="Enter your username" />
        {!isusername &&
         <p> username should contain only alphabets </p>}
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label   >EMAIL ID</Form.Label>
        <Form.Control value={email || ""} name='email' onChange={(e)=>getvalidate(e)} type="email" placeholder="enter your password" />
       {
        !isemail &&<p>invalid input</p>}
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>PASSWORD</Form.Label>
        <Form.Control value={password || ""} name='password' onChange={(e)=>getvalidate(e)}  type="password" placeholder="Enter your password" />
        {
        !ispassword &&<p  >Minimum eight characters, at least one letter and one number:</p>}
       
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
      <label htmlFor="phno">PHONE NUMBER</label>
      <input value={phno || ''} onChange={(e)=>getvalidate(e)} type="text" className="form-control mt-2 mb-3" id="phno"  placeholder="Enter Your Phone number" name='phno' required/>
      {
              !isphno &&
                <div>
                <p className='text-danger'>Phone Number should countain 10 numbers and doesn't contain any Alphabets</p>
              </div>
             }
      </Form.Group>
      <Button className='mb-4' variant="primary" type="submit">
        Submit
      </Button>
    </Form>
          </div>
  
        </Col>
        <Col lg={6}>
       <div className=''> 
            <img className=' ' style={{width:'100%', height:'732px'}} src={img} alt="" />
    
       </div>
        </Col>
    
    </Row>

    </>
  );
}

export default App;
