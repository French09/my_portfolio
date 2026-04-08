import React, { useState } from 'react'
import { BsEnvelope, BsPhone } from 'react-icons/bs';

import { AppWrap, MotionWrap } from '../../wrapper'
import './Footer.scss'

const FORMSPREE_URL = `https://formspree.io/f/${process.env.REACT_APP_FORMSPREE_ID}`;

const Footer = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isFormSubmitted, setisFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const { name, email, message } = formData;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const sendEmail = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(FORMSPREE_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      });

      if (response.ok) {
        setisFormSubmitted(true);
      } else {
        const data = await response.json();
        setError(data?.errors?.[0]?.message || "Une erreur est survenue. Veuillez réessayer.");
      }
    } catch (err) {
      setError("Impossible d'envoyer le message. Vérifiez votre connexion internet.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <span className="section-eyebrow">04 — Contact</span>
      <h2 className='head-text'>
        Me <span>contacter</span>
      </h2>

      <div className='app__footer-cards'>
        <a href="mailto:francois.dinong@outlook.com" className='app__footer-card'>
          <BsEnvelope />
          <span>francois.dinong@outlook.com</span>
        </a>
        <a href="tel:+33634456858" className='app__footer-card'>
          <BsPhone />
          <span>+33 6 34 45 68 58</span>
        </a>
      </div>

      {!isFormSubmitted ? (
        <form onSubmit={sendEmail} className='app__footer-form'>
          <input
            type="text"
            placeholder="Votre nom"
            name='name'
            value={name}
            onChange={handleChangeInput}
            required
          />
          <input
            type="email"
            placeholder="Votre email"
            name='email'
            value={email}
            onChange={handleChangeInput}
            required
          />
          <textarea
            placeholder='Votre message'
            value={message}
            name="message"
            onChange={handleChangeInput}
            required
          />
          {error && <p className="app__footer-error">{error}</p>}
          <button type="submit" disabled={loading}>
            {loading ? 'Envoi en cours...' : 'Envoyer'}
          </button>
        </form>
      ) : (
        <div className="app__footer-success">
          <p>Merci pour votre message ! Je vous recontacterai bientôt.</p>
        </div>
      )}
    </>
  )
}

export default AppWrap(MotionWrap(Footer, 'app__footer'), 'contact')
