import React from 'react';

function Resources() {
  return (
    <div className=""> {/* Full screen height to control overall size */}
      <div className="px-5 py-5 grid grid-cols-6 h-full">
        <div className="col-span-4  overflow-y-auto overflow-hidden h-[76vh]">
          <h1 className="text-2xl font-semibold text-black border-b-2 border-black pb-2.5">
            Our All Blogs
          </h1>

          {/* This is the scrollable area */}
          <div className="py-6   pr-2"> {/* <- Enable vertical scroll */}
            <ul className="grid grid-cols-3 gap-x-5 gap-y-2 text-black">
              {Array.from({ length: 500 }).map((_, idx) => (
                <li key={idx} className=' text-xl font-semibold'><span className=' text-2xl font-semibold'>{idx + 1}.</span> col h5 {idx + 1}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="col-span-2">
          {/* Sidebar or extra content here */}
        </div>
      </div>
    </div>
  );
}

export default Resources;
