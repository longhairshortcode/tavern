import style from "./ContactForm.module.css"

function ContactForm() {
  return (
    <div className={style.componentContainer}>
      <form className={style.formContainer}>
        <div className={style.formTitleContainer}>
            <p className={style.formTitle}>Ask Us Anything:</p>
        </div>
        <div className={style.formLeftAndRightInputs}>
            <div className={style.formLeftInputs}>
                <input type="text" className={style.firstName} placeholder="First Name:"></input>
                <input type="text" className={style.lastName} placeholder="Last Name:"></input>
                <input type="email" className={style.email} placeholder="Email:"></input>
                <input type="tel" className={style.number} placeholder="Number:"></input>
            </div>
            <div className={style.formRightInputs}>
                <select className={style.selectLocation}>
                        <option className={style.selectLocationShow}>Choose Location:</option>
                        <option>East Valley Location</option>
                        <option>West Valley Location</option>
                        <option>Not Specific To Location</option>
                </select>
                <textarea className={style.questionSpace}>Ask Question Here...</textarea>
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
