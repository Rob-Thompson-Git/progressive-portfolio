import React, { useState } from 'react';
import { EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/outline';
import {BsCheckCircleFill} from 'react-icons/bs';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';


const Result = () => {
  return (
    <div className='border-none'>
      <h1> <BsCheckCircleFill className='inline text-green-700 text-xl'/> Your message was sent. I will will contact you shortly. Thank you!</h1>
    </div>
  )
}

const Contact = () => {
  const [result, setShowResult] = useState(false)
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_nztmqug', 'template_a2vq8jc', form.current, 'KJlY6qN140TgRAysl')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      }
      );
      e.target.reset();
      setShowResult(true);
  };

  setTimeout(() => {
    setShowResult(false);
  }, 10000);

  return (
  <div name="contact" id="contact" className='w-full h-full bg-slate-900 grid grid-cols-1 pt-20 pb-40'>
<div className='w-3/4 place-self-center'>
    <div className="relative rounded-2xl border-8 hover:border-sky-300 px-10">
      <div className="absolute inset-0 bg-gray-50 rounded-md">
        <div className="absolute inset-y-0 left-0 w-1/2  bg-gray-50 rounded-md" />
      </div>
      <div className="relative mx-auto max-w-7xl lg:grid lg:grid-cols-5">
        <div className="bg-gray-100 py-16 px-4 sm:px-6 lg:col-span-2 lg:px-8 lg:py-10 xl:pr-12 rounded-2xl">
          <div className="mx-auto max-w-lg rounded-2xl">
            <h2 className="text-2xl font-bold tracking-tight text-slate-800 sm:text-3xl">Contact Me</h2>
            <p className="mt-2 text-lg leading-6 text-slate-800">
              Thank you for viewing! If you would like to contact me, please fill out the form and I will get back with you shortly.
            </p>
            <dl className="mt-8 text-base text-slate-900">
              <div className="mt-6">
                <dt className="sr-only">Phone number</dt>
                <dd className="flex">
                  <PhoneIcon className="h-6 w-6 flex-shrink-0 text-sky-400" aria-hidden="true" />
                  <span className="ml-3">+1 (614) 440-7141</span>
                </dd>
              </div>
              <div className="mt-3">
                <dt className="sr-only">Email</dt>
                <dd className="flex">
                  <EnvelopeIcon className="h-6 w-6 flex-shrink-0 text-sky-400" aria-hidden="true" />
                  <span className="ml-3">rob.thomp15@gmail.com</span>
                </dd>
              </div>
            </dl>
           
          </div>
        </div>
        <div className="bg-gray-50 py-8 px-4 sm:px-6 lg:col-span-3 lg:py-10 lg:px-8 xl:pl-12">
          <div className="mx-auto max-w-lg lg:max-w-none">
            <form action="#" ref={form} onSubmit={sendEmail} method="POST" className="grid grid-cols-1 gap-y-6">
              <div>
                <label htmlFor="full-name" className="sr-only">
                  Full name
                </label>
                <input
                  type="text"
                  name="from_name"
                  id="full-name"
                  autoComplete="name"
                  className="block w-full rounded-md border-gray-300 py-3 px-4 placeholder-gray-500 shadow-sm focus:border-sky-300 focus:ring-sky-300"
                  placeholder="Full name"
                />
              </div>
              <div>
                <label htmlFor="email" className="sr-only">
                  Email
                </label>
                <input
                  id="email"
                  name="from_email"
                  type="email"
                  autoComplete="email"
                  className="block w-full rounded-md border-gray-300 py-3 px-4 placeholder-gray-500 shadow-sm focus:border-sky-300 focus:ring-sky-300"
                  placeholder="Email"
                />
              </div>
              <div>
                <label htmlFor="message" className="sr-only">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="block w-full rounded-md border-gray-300 py-3 px-4 placeholder-gray-500 shadow-sm focus:border-sky-300 focus:ring-sky-300"
                  placeholder="Message"
                  defaultValue={''}
                />
              </div>
              <div className='grid grid-cols-2 gap-20'>
                <button
                  type="submit"
                  className="rounded-md border border-transparent bg-sky-400 py-3 px-6 text-base font-medium text-white shadow-sm hover:bg-sky-300 focus:outline-none focus:ring-2 focus:ring-sky-300 focus:ring-offset-2"
                >
                  Send
                </button>
                <span>{result ? <Result /> : null} </span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
</div>
</div>
    )
}


export default Contact;