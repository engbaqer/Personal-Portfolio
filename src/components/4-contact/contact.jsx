import React from 'react'
import './contact.css'
import { useForm, ValidationError } from '@formspree/react';
export default function contact() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [state, handleSubmit] = useForm("mleqnren");
  
  
  if (state.submitting) {
    return <p className='submit_don'>submitting......</p>;}
 if (state.succeeded) {
    return <p className='submit_don'>Your message has been submitted  &#129321;</p>;}
   return (
    <>
    <div className='contact_head flex' >
    <span className='icon-envelop'></span>
    <h1 style={{color:"var(--title)"}} className='contact_title'>Contact</h1>
    </div>
    <p className='p_in_head' >send me message </p>
    <section className='flex'>
      
      <form className='  ' action="" onSubmit={handleSubmit}>
        <div className='flex'>
        <label style={{color:"var(--title)"}} htmlFor="email">Your Email:</label>
        <input required type="email" id='email' name='email' />
        <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
        </div>
        <div className='flex'>
<label style={{color:"var(--title)"}} htmlFor="textarea">massege:</label>
        <textarea required name="message" id="textarea" cols="30" rows="10" ></textarea>
        <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
        </div>
        <button type="submit" disabled={state.submitting}>Submit</button>
      </form>
      {/* <div className='right_section testing'>anmation</div> */}
    </section>
    </>
  )
}
