import React from 'react'

function Title({title,text}) {
  return (
    <div className="flex justify-center mx-5">
      <div className="lg:w-2/3 space-y-5 text-center">
        <h1 className="text-2xl text-gray-800 uppercase tracking-widest dark:text-white">
          {title}
        </h1>
        <div className="h-0.5 bg-red-500 w-14 mx-auto" />
        {title && (
          <p className="text-gray-400 dark:text-gray-300/60">
           {text} 
          </p>
        )}
      </div>
    </div>
  );
}

export default Title