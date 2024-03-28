import style from "./ContactForm.module.css"
import { useState } from "react"
import axios from "axios"
import host from "../../assets/host.webp"


function ContactForm() {
//below is creating the state for all the inputs (each input has unique name and name is the props here)
const [userContactData, setUserContactData] = useState({
  firstName: "",
  lastName: "",
  email: "",
  tel: "",
  selectLocation: "",
  question: "",
})

//handleChange function is triggered onClick and deconstructs the name and value from e.target, then setter function with prev
function handleChange(e){
  const {name, value} = e.target
  setUserContactData(prev => ({
    ...prev, 
    [name] : value
  }))
}

//can also do above like  this without destructuring:

// function handleChange(e) {
//   setUserContactData(prev => ({
//     ...prev, 
//     [e.target.name]: e.target.value
//   }));
// }

//0. const name of handler and make it an arrow function with async first and (e)
const handleSubmit = async (e) => {
  //1. prevent default
  e.preventDefault()
  // 2. not mandatory but destructured to see it when sending it to api
  const {firstName, lastName, email, selectLocation, question} = userContactData
 //3. try, then in {} console log a response which is awaited, which is an axios.post() to the apiurl in "" and what you are sending
  try { 
    const response = await axios.post("https://apiurl.com", {firstName, lastName, email, selectLocation, question} )
    console.log(response)
  //4. catch the error, then {console.log it inside braces}
  }catch(error) {
    console.log(error)
    // console.log(error.message) //for user if put in UI
  }
}

//HW OF REDOING ABOVE, DELETE BOTTOM 
// const handleSubmit = async (e) => {
//   e.preventDefault()
//   const {firstName, lastName, email, selectLocation, question} = userContactData
//   try{
//       const response = await axios.post("apiurl",  {firstName, lastName, email, selectLocation, question}  )
//       console.log(response)
//   }catch(error){
//     console.log(error)
//   }
// }
  return (
    <div className={style.componentContainer}>
      {/* <div className={style.leftThirdOrange}></div>
      <div className={style.rightTwoThirds}> */}
      <div className={style.h1AndParagraphAndPicContainer}>
        <div className={style.h1AndParagraphContainer}>
          <h1 className={style.titleAboveForm}>Contact Us</h1>
          <p className={style.paragraphAboveForm}>Thank you for your interest in Tavern Restaurant. We appreciate your business and love all of our loyal customers. Please fill out the form below. One of our restaurant admin staff will happily reach out to you via email and/or phone to answer any questions. We look forward to serving you!</p>
        </div>
        <div className={style.hostPicContainer}>
          <img className={style.hostPic} src={host} alt="hostess smiling at front of restaurant"/>
        </div>
      </div>
      <form className={style.formContainer} onSubmit={handleSubmit}>
        <div className={style.formTitleContainer}>
            <h2 className={style.formTitle}>Your Details:</h2>
        </div>
        <div className={style.formLeftAndRightInputs}>
            <div className={style.formLeftInputs}>
                <input 
                  type="text" 
                  className={style.firstName} 
                  name="firstName"
                  value={userContactData.firstName} 
                  onChange={handleChange}
                  placeholder="First Name:"
                  required/>

                <input 
                  type="text"
                  className={style.lastName}
                  name="lastName"
                  value={userContactData.lastName}  
                  onChange={handleChange}
                  placeholder="Last Name:"
                  required/>

                <input 
                  type="email" 
                  className={style.email}
                  name="email"
                  value={userContactData.email}  
                  onChange={handleChange} 
                  placeholder="Email:"
                  required/>

                <input 
                  type="tel"
                  className={style.number}
                  name="tel"
                  value={userContactData.tel} 
                  onChange={handleChange}
                  placeholder="Number:"
                  required/>

            </div>

            <div className={style.formRightInputs}>
                <select 
                    className={style.selectLocation}
                    value={userContactData.selectLocation}
                    onChange={handleChange}
                    required>
                        <option className={style.selectLocationShow}>Choose Location:</option>
                        <option>East Valley Location</option>
                        <option>West Valley Location</option>
                        <option>Not Specific To Location</option>
                </select>
                <textarea 
                className={style.questionSpace}
                name="question"
                value={userContactData.question} 
                onChange={handleChange}
                placeholder="Ask Question Here..."
                required> 
                </textarea>
            </div>
        </div>
        <p className={style.paragraphAboveButton}>By clicking the button below you agree to be contacted by one of our staff members via email or phone.</p>
        <div className={style.formSubmitButtonContainer}>
            <button className={style.formSubmitButton}>Submit Question</button>
        </div>
      </form>
      {/* </div> */}
    </div>
  );
  }

export default ContactForm
