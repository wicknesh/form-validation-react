import { useState } from 'react';
import './App.css'
import FormInput from './components/FormInput'

function App() {
  const [ values, setValues ] = useState({
    fullname: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const inputs = [
    {
      id:1,
      name: "fullname",
      type: "text",
      placeholder: "Full Name",
      label: "Full Name",
      errorMessage: "Enter full name!",
      required: true
    },
    {
      id:2,
      name: "username",
      type: "text",
      placeholder: "Username",
      label: "Username",
      errorMessage: "Must be at least 6 characters, letters and numbers only!",
      pattern: '^[A-Za-z0-9]{6,}$',
      required: true
    },
    {
      id:3,
      name: "email",
      type: "text",
      placeholder: "Email Address",
      label: "Email Address",
      errorMessage: "Enter a valid email address!",
      pattern: '^[a-zA-Z0-9._%+\\-]+@[a-zA-Z0-9.\\-]+\\.[a-zA-Z]{2,}$',
      required: true
    },
    {
      id:4,
      name: "password",
      type: "password",
      placeholder: "Password",
      label: "Password",
      errorMessage: "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!",
      pattern: '^(?=.*[A-Za-z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,20}$',
      required: true
    },
    {
      id:5,
      name: "confirmPassword",
      type: "text",
      placeholder: "Confirm Password",
      label: "Confirm Password",
      errorMessage: "Passwords do not match. Enter again!",
      pattern: values.password,
      required: true
    },
  ]

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value })
  }

  return (
    <div className='flex flex-col items-center justify-center h-screen'>
      <form className='bg-[#272A37] py-6 px-16 rounded-3xl' onSubmit={handleSubmit}>
        <h1 className='font-bold text-[3rem] text-center text-[#EDEDEE] my-8'>Register</h1>
        {inputs.map((input) => (
          <FormInput
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={onChange}
          />
        ))}
        <button className='p-4 my-2.5 mt-10 rounded-2xl hover:bg-blue-700 text-white bg-blue-600 w-[30rem] active:bg-blue-800 font-bold text-lg'>Submit</button>
      </form>
    </div>
  )
}

export default App
