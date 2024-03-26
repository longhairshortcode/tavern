import style from "./ContactForm.module.css"
import { useState } from "react"
import axios from "axios"


function ContactForm() {

const [userContactData, setUserContactData] = useState({
  firstName: "",
  lastName: "",
  email: "",
  tel: "",
  selectLocation: "",
  question: "",
})

function handleChange(e){
  const {name, value} = e.target
  setUserContactData(prev => ({
    ...prev, 
    [name] : value
  }))
}

const handleSubmit = async (e) => {
  e.preventDefault()
  const {firstName, lastName, email, selectLocation, question} = userContactData
  try { 
    const response = await axios.post("https://apiurl.com", {firstName, lastName, email, selectLocation, question} )
    console.log(response)
  }catch(error) {
    console.log(error)
    console.log(error.message) //for user if put in UI
  }
}
  return (
    <div className={style.componentContainer}>
      <form className={style.formContainer} onSubmit={handleSubmit}>
        <div className={style.formTitleContainer}>
            <p className={style.formTitle}>Ask Us Anything:</p>
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
        <div className={style.formSubmitButtonContainer}>
            <button className={style.formSubmitButton}>Submit Question</button>
        </div>
      </form>
    </div>
  )
}

export default ContactForm
