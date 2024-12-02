import { useState } from 'react';
import './formInput.css';

const FormInput = (props) => {

    const [ focused, setFocused ] = useState(false);
    const {label, errorMessage, onChange, id, ...inputProps} = props;

    const handleFocus = (e) => {
        setFocused(true);
    }
    
  return (
    <div className="flex flex-col w-[30rem]">
        <label className='text-sm text-[#EDEDEE]'>{ label }</label>
        <input className='bg-[#323644] p-4 my-2.5 mx-0 rounded-2xl text-[#EDEDEE]'
            { ...inputProps }
            onChange={onChange}
            onBlur={handleFocus}
            onFocus={ () => 
                inputProps.name==="confirmPassword" && setFocused(true)
            }
            focused={focused.toString()}
        />
        <span className='text-xs text-red-600 text-wrap hidden'>{errorMessage}</span>
    </div>
  )
}

export default FormInput