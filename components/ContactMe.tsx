import React from 'react';
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from '@heroicons/react/24/solid';

import { useForm, SubmitHandler } from 'react-hook-form';
type Inputs = {
  name: string;
  email: string;
  message: string;
  subject: string;
};
type Props = {};

const ContactMe = (props: Props) => {
  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    window.location.href = `mailto:michele.carmagnani@gmail.com?subject=${formData.subject}&body=Hi, my name is ${formData.name}. ${formData.message}[${formData.email}]`;
  };
  return (
    <div className="h-screen flex relative flex-col text-center md:text-left md:flex-row  max-w-7xl px-10 justify-center items-center mx-auto">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        ContactMe
      </h3>
      <div className="flex flex-col space-y-10">
        <h4 className="text-4xl font-semibold text-center">
          I have got just you need{' '}
          <span className="decoration-[#F7AB0A]/60 underline">Lets talk.</span>
        </h4>
        <div className="space-y-10">
          <div className="flex items-center justify-center space-x-5">
            <PhoneIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
            <p>+46704913712</p>
          </div>
          <div className="flex items-center justify-center space-x-5">
            <MapPinIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
            <p> Västra Frölund _ Sweden </p>
          </div>
          <div className="flex items-center justify-center space-x-5">
            <EnvelopeIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
            <p>michele.carmagnani@gmail.com</p>
          </div>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col space-y-10 w-fit mx-auto"
        >
          <div className="flex space-x-2">
            <input
              {...register('name')}
              placeholder="Name"
              className="contactInput"
              type="text"
            />
            <input
              {...register('email')}
              placeholder="Email"
              className="contactInput"
              type="email"
            />
          </div>
          <input
            {...register('subject')}
            placeholder="Subject"
            className="contactInput"
            type="text"
          />
          <textarea
            {...register('message')}
            placeholder="Message"
            className="contactInput"
          />
          <button className="bg-[#F7AB0A] hover:bg-yellow-400 py-5 px-10 transition-all  active:scale-95 duration-75 rounded-md text-black font-bold text-lg">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactMe;
