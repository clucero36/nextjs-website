'use client'

import React, { useState } from 'react';
import styles from './contactpage.module.css';
import '../globalstyle.css';

export default function Contact() {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => { 
    e.preventDefault()
    console.log('Sending')

    let data = {
      name, 
      email,
      message
    }

    fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }).then((res) => {
      setName('');
      setEmail('');
      setMessage('');
      setSubmitted(true);
    })
  }
  
  return (
    <>
      {
        submitted === true ? (
          <div className={styles.main}>
            <div className='title' style={{paddingTop: '5rem'}}>
              Thanks for reaching out! I will get back to you asap.
            </div>
          </div>
        ) : (
          <div className={styles.main}>

            <div className='title'>
              Send me an email! Lets get to work!
            </div>

            <form className={styles.formContainer} onSubmit={(e) => handleSubmit(e)}>
              <div className={styles.textarea}>
                <label htmlFor='name'>Name: </label>
                <input onChange={(e)=>{setName(e.target.value)}} type='text' name='name' id={styles.name} required/>
              </div>
              
              <div className={styles.textarea}>
                <label htmlFor='email'>Email: </label>
                <input onChange={(e)=>{setEmail(e.target.value)}} type='email' name='email' id={styles.email} required />
              </div>
              
              <div className={styles.textarea}>
                <label htmlFor='message'>Message: </label>
                <textarea onChange={(e)=>{setMessage(e.target.value)}} rows="5" id={styles.message} required/>
              </div>
              {
                (name === '' || message === '' || email === '') ? (
                  <></>
                ) : (
                  <input type='submit' className={styles.button} />
                )
              }
            </form>
          </div>
        )
      }
    </>
  )

};