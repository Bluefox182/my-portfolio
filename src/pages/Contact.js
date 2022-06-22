import React, { useState } from 'react';
import styled from 'styled-components';

function Contact() {
  const [status, setStatus] = useState('Send Message!');
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');
    const { name, email, message } = e.target.elements;
    let details = {
      name: name.value,
      email: email.value,
      message: message.value,
    };
    let response = await fetch('http://localhost:5000/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify(details),
    });
    setStatus('Submit');
    let result = await response.json();
    alert(result.status);
  };
  return (
    <StyledContact>
      <div className='ContactForm-Container'>
        <div className='contact-content'>
          <div>
            <h1 className='title'>Let's Talk</h1>
            <h2 className='paragraph-text'>
              Whether it's just to say Hi 👋 or if you have a question or
              proposal, send me a message!
            </h2>
          </div>
          <div>
            <form className='form' onSubmit={handleSubmit}>
              <div className='form-container'>
                <div className='form-field'>
                  <input
                    className='form-input'
                    type='text'
                    id='name'
                    placeholder='Name'
                    required
                  />
                </div>
                <div className='form-field'>
                  <input
                    className='form-input'
                    type='email'
                    id='email'
                    placeholder='Email'
                    required
                  />
                </div>
              </div>
              <div className='form-textarea'>
                <textarea
                  name='textarea'
                  id='message'
                  cols='30'
                  rows='10'
                  placeholder='Your Message'
                  required
                ></textarea>
              </div>
              <div className='form-button'>
                <button className='button-contact'>{status}</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </StyledContact>
  );
}

export default Contact;

const StyledContact = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;

  .ContactForm-Container {
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    width: 95%;
    height: 80%;
    padding: 20px;
    box-sizing: border-box;
    align-items: center;
    justify-content: space-between;
    color: var(--font-light-color);
    border: 3px solid var(--border-color);
    border-radius: 0.5rem;
    box-shadow: 0.5rem 0.5rem 1rem rgba(0, 0, 0, 0.3);
    transition: all 0.5s ease-in-out;

    @media (max-width: 479px) {
      margin: 0 20px;
    }
    @media (min-width: 480px) and (max-width: 768px) {
      width: 75%;
    }
    @media (min-width: 768px) and (max-width: 1200px) {
      margin-right: 70px;
      margin-left: 200px;
    }
    @media (min-width: 1201px) {
      width: 80%;
    }
  }

  .contact-content {
    display: flex;
    width: 100%;
    max-width: 700px;
    flex-direction: column;
    justify-content: space-evenly;
    height: 100%;
  }

  .title {
    font-size: 2.5rem;
    font-weight: 700;
    margin-bottom: 20px;
    color: var(--primary-color-light);
  }

  .paragraph-text {
    font-size: 1.2rem;
    font-weight: 300;
    margin-bottom: 20px;
  }

  .form-container {
    display: flex;
    gap: 50px;
    margin-bottom: 30px;
  }

  .form-field {
    width: 100%;
    height: 40px;
    border-bottom: 1px solid var(--border-color);
    color: var(--font-light-color-2);
    transition: all 0.5s ease-in-out;
  }

  input {
    width: 100%;
    height: 40px;
    background-color: transparent;
    border: none;
    font-size: 1.2rem;
    font-weight: 300;
    color: var(--font-light-color-2);
    font-family: 'Montserrat', sans-serif;

    &:focus {
      outline: none;
      border-bottom: 3px solid var(--primary-color-light);

      &::placeholder {
        color: var(--font-light-color-2);
      }
    }
  }

  textarea {
    border: 3px solid var(--border-color);
    background: transparent;
    outline: none;
    margin-bottom: 30px;
    color: var(--font-light-color-2);
    width: 100%;
    padding: 0.8rem 1rem;
    border-radius: 8px;
    font-family: 'Montserrat', sans-serif;
    ::placeholder {
      color: var(--font-light-color-2);
      opacity: 1; /* Firefox */
    }
    :focus {
      border: 3px solid var(--primary-color-light);
      /* border-radius: 8px; */
    }
  }

  .button-contact {
    width: 100%;
    color: var(--white-color-2);
    height: 60px;
    border: none;
    background: var(--primary-color);
    font-size: 20px;
    justify-content: center;
    align-items: center;
    border-radius: 8px;
    font-family: 'Montserrat', sans-serif;
    cursor: pointer;
    :hover {
      background: var(--primary-color-light);
      border-radius: 8px;
      transition: 0.5s all ease;
    }
  }
`;
