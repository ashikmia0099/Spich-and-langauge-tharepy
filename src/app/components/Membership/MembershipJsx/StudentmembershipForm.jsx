import React from 'react'

function StudentmembershipForm() {
    return (
        <div>
            {/* form field */}
            <div className='px-[10%] mb-40'>
                <div className=' border-2 rounded-2xl px-20 pb-10 shadow-xl shadow-[#91aab4]'>
                    <h1 className={`text-4xl font-extrabold uppercase leading-28 text-center px-[20%] pt-16 text-[#84C2DB]`}>
                        Student Membership Form
                    </h1>
                    <form >

                        {/* nam phone  */}
                        <div className=''>
                            <div>
                                <legend className="text-lg font-semibold pt-5">Full Name</legend>
                                <input type="text" name='authorname' className="input w-full bg-white border-2 border-black text-lg" placeholder="Author Name" required />

                            </div>


                        </div>
                        {/* nam phone  */}
                        <div className='grid grid-cols-2 gap-3'>

                            <div>
                                <legend className="text-lg font-semibold pt-5">Phone Name</legend>
                                <input type="text" name='authorname' className="input w-full bg-white border-2 border-black text-lg" placeholder="Author Name" required />

                            </div>

                            <div>
                                <legend className="text-lg font-semibold pt-5">Student Id</legend>
                                <input type="text" name='authorname' className="input w-full bg-white border-2 border-black text-lg" placeholder="Author Name" required />

                            </div>


                        </div>

                        {/* father mother */}
                        <div className='grid grid-cols-2 gap-3'>
                            <div>
                                <legend className="text-lg font-semibold pt-5">Father Name</legend>
                                <input type="text" name='authorname' className="input w-full bg-white border-2 border-black text-lg" placeholder="Author Name" required />

                            </div>
                            <div>
                                <legend className="text-lg font-semibold pt-5">Mother Number</legend>
                                <input type="text" name='authorname' className="input w-full bg-white border-2 border-black text-lg" placeholder="Author Name" required />

                            </div>
                        </div>


                        {/* Student id or phone  */}
                        <div className='grid grid-cols-2 gap-3'>


                            <div>
                                <legend className="text-lg font-semibold pt-5">NID or Birth Certificate ( Image or PDF )</legend>
                                <input type="file" className="file-input w-full bg-white border-2 border-black text-lg" />
                            </div>
                            <div>
                                <legend className="text-lg font-semibold pt-5">Your Passport size Image </legend>
                                <input type="file" className="file-input w-full bg-white border-2 border-black text-lg" />
                            </div>
                        </div>





                        {/* ssc and hsc certificate */}
                        <div className='grid grid-cols-2 gap-3'>
                            <div>
                                <legend className="text-lg font-semibold pt-5">SSC Certificate ( Image or PDF )</legend>
                                <input type="file" className="file-input w-full bg-white border-2 border-black text-lg" />
                            </div>
                            <div>
                                <legend className="text-lg font-semibold pt-5">HSC Certificate ( Image or PDF )</legend>
                                <input type="file" className="file-input w-full bg-white border-2 border-black text-lg" />
                            </div>
                        </div>





                        <div className=' flex items-center justify-center'>
                            <button type="submit" className='btn px-10 w-[50%] h-16 rounded-full bg-[#84C2DB] shadow-none border-none text-black mt-10 text-2xl font-bold '>
                                Submit
                            </button>
                        </div>

                    </form>
                </div>
            </div>

        </div>
    )
}

export default StudentmembershipForm