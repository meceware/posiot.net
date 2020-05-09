import React from 'react';

export default ( props ) => {
  return (
    <div id = 'site' className = 'flex flex-col min-h-screen relative px-4'>
      <div className = 'absolute inset-0 w-full h-full bg-black opacity-75'></div>
      <main className = 'relative flex flex-auto content-center flex-wrap -mx-4 p-4' >
        { props.children }
      </main>
    </div>
  );
};
