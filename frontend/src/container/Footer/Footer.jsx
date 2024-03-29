import React, { useState, useRef } from 'react'
import emailjs from '@emailjs/browser';

import { images } from '../../constants'
import { AppWrap, MotionWrap } from '../../wrapper'
import './Footer.scss'

const Footer = () => {
	const form = useRef();

	const [formData, setFormData] = useState({ name: '', email: '', message: '' });
	const [isFormSubmitted, setisFormSubmitted] = useState(false);
	const [loading, setLoading] = useState(false);

	// Déstructure la variable formData dans les variable "name", "email, "message"
	const { name, email, message } = formData

	const handleChangeInput = (e) => {
		const { name, value } = e.target

		setFormData({ ...formData, [name]: value })
	}

	const sendEmail = (e) => {
		e.preventDefault();

		emailjs.sendForm('service_1wndcpm', 'template_1vi6b9h', form.current, 'qebYwCEj0leylm8H0')
			.then((result) => {
				setLoading(true);
				setTimeout(() => {
					console.log(result.text);
					setisFormSubmitted(true);
				}, 2000)
			}, (error) => {
				console.log(error.text);
			});
	};

	return (
		<>
			<h2 id="contact" className='head-text'>Contactez-moi</h2>

			<div className='app__footer-cards'>
				<div className='app__footer-card'>
					<img src={images.email} alt="email" />
					<a href="mailto: francoispaul.dinong@gmail.com"
						className='p-text'
					>francoispaul.dinong@gmail.com</a>
				</div>
				<div className='app__footer-card'>
					<img src={images.mobile} alt="mobile" />
					<a href="tel: +33 6 34 45 68 58"
						className='p-text'
					>+33 6 34 45 68 58</a>
				</div>
			</div>

			{!isFormSubmitted ? (
				<div className='app__footer-form app__flex'>
					<form ref={form} onSubmit={sendEmail}>

						<div className='app__flex'>
							<input
								className='p-text'
								type="text"
								placeholder="Votre nom"
								name='name'
								value={name}
								onChange={handleChangeInput}
							/>
						</div>
						<div className='app__flex'>
							<input
								className='p-text'
								type="email"
								placeholder="Votre email"
								name='email'
								value={email}
								onChange={handleChangeInput}
							/>
						</div>
						<div className='app__flex'>
							<textarea
								className='p-text'
								placeholder='Votre message'
								value={message}
								name="message"
								onChange={handleChangeInput}
							/>
						</div>
						<input type="submit" value="Send" />
					</form>
				</div>
			) : (
				<div>
					<h3 className='head-text'>
						Merci pour votre prise de contact
					</h3>
				</div>
			)}
		</>
	)
}

export default AppWrap(MotionWrap(Footer, 'app__footer'), 'contact', 'app__whitebg')