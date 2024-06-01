import React from 'react';

const Loader = () => {
  return (
    <div className="relative flex items-center justify-center w-12 h-12 cursor-not-allowed rounded-full border-2 border-gray-700 shadow-spinner animate-rot55">
      <div className="absolute w-6 h-6 border-2 border-gray-700 rounded-full transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"></div>
    </div>
  );
}

export default Loader;
