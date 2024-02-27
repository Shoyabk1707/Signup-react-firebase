import React from 'react'

function InputControl(props) {
  return (
    <div className='flex flex-col gap-2'>
      {props.label && <label className='font-medium text-base text-gray-900'>{props.label}</label>}
    <input className='rounded-md border border-gray px-4 py-2 text-black hover:border-gray-400 focus:outline-violet-400 ' type="text" {...props} />
    </div>
  );
}

export default InputControl;
