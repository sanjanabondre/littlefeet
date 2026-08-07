import React from 'react';

export default function Button({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  className = '', 
  ...props 
}) {
  const baseStyles = 'inline-flex items-center justify-center font-medium transition-all duration-200 rounded-full focus:outline-none';
  
  const variants = {
    primary: 'bg-[#FF4D80] text-white hover:bg-[#e03d6d] shadow-sm',
    outline: 'border-2 border-[#FF4D80] text-[#FF4D80] hover:bg-[#FF4D80] hover:text-white',
    secondary: 'bg-[#FFD166] text-[#6B4F1D] hover:bg-[#f2c355]',
    light: 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200',
  };

  const sizes = {
    sm: 'px-4 py-1.5 text-xs',
    md: 'px-6 py-2.5 text-sm',
    lg: 'px-8 py-3 text-base',
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}