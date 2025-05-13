'use client'

import { useState } from "react";
// import { useAuth } from "../../../../../../context/AuthContext";
// import uploadToImgBB from "@/app/ImageUploadSite/UploadImageBBImage";
import Swal from "sweetalert2";
import { TiPlus } from "react-icons/ti";



function GeneralmembershipForm() {




    //   const { blogallcategory, user } = useAuth();
    const blogallcategory = 10;
    const user = 10;
    const [increseDescripton, setincreseDescripton] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const createdOn = new Date().toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });

    console.log(blogallcategory)
    console.log(user.displayName)


    const addSection = () => {
        setincreseDescripton(prev => [...prev, { id: Date.now() }]);
    };





    const handleFormSubmit = async (e) => {
        e.preventDefault();
        const form = new FormData(e.target);

        const AuthorName = form.get('authorname');
        const AuthorEmail = form.get('authoremail');
        const PassionName = form.get('passonename');
        const BlogCategory = form.get('categorytype');
        const BlogTitle = form.get('blogtitle');



        const BlogImageFile = form.get('blogimage');
        const BlogImage = BlogImageFile ? await uploadToImgBB(BlogImageFile) : '';

        const DescriptionTitle = form.get('descriptiontitle');
        const DescriptionImageFile = form.get('descriptionimage');
        const DescriptionImage = DescriptionImageFile ? await uploadToImgBB(DescriptionImageFile) : '';
        const Description = form.get('description');

        

        const blogsData = {
            AuthorName,
            AuthorEmail,
            PassionName,
            BlogCategory,
            BlogTitle,
            BlogImage,
            DescriptionTitle,
            DescriptionImage,
            Description,
           
            createdOn
        };

        try {
            const response = await fetch("http://localhost:3000/api/blogsapi/Sec_1_2_half_Banner_Post_api", {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(blogsData),
            });

            const res = await response.json();

            if (res.insertedId) {
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Your Post Successfully Added!',
                    showConfirmButton: false,
                    timer: 1500
                });
                e.target.reset();
                setincreseDescripton([]);
            } else {
                Swal.fire({
                    title: 'Error!',
                    text: 'Something went wrong.',
                    icon: 'error',
                    confirmButtonText: 'Try again'
                });
            }
        } catch (error) {
            Swal.fire({
                title: 'Network Error!',
                text: error.message,
                icon: 'error',
                confirmButtonText: 'OK'
            });
        }
    };





    return (
        <div>
            {/* form field */}
            <div className='px-[10%] mb-40'>
                <div className=' border-2 rounded-2xl px-20 pb-10 shadow-xl shadow-[#91aab4]'>
                    <h1 className={`text-4xl font-extrabold uppercase leading-28 text-center px-[20%] pt-16 text-[#84C2DB]`}>
                        General Membership Form
                    </h1>
                    <form >


                        {/* nam phone  */}
                        <div className=''>
                            <div>
                                <legend className="text-lg font-semibold pt-5">Full Name</legend>
                                <input type="text" name='Full_Name' className="input w-full bg-white border-2 border-black text-lg" placeholder="Full Name" required />

                            </div>
                            <div>
                                <legend className="text-lg font-semibold pt-5">Phone Number</legend>
                                <input type="text" name='Phone_Number' className="input w-full bg-white border-2 border-black text-lg" placeholder="Phone Number" required />

                            </div>
                        </div>

                        {/* father mother */}
                        <div className='grid grid-cols-2 gap-3'>
                            <div>
                                <legend className="text-lg font-semibold pt-5">Father Name</legend>
                                <input type="text" name='Father_Name' className="input w-full bg-white border-2 border-black text-lg" placeholder="Father Name" required />

                            </div>
                            <div>
                                <legend className="text-lg font-semibold pt-5">Mother Name</legend>
                                <input type="text" name='Mother_Name' className="input w-full bg-white border-2 border-black text-lg" placeholder="Mother Name" required />

                            </div>
                        </div>

                        {/* nid card and your image */}

                        <div className='grid grid-cols-2 gap-3'>
                            <div>
                                <legend className="text-lg font-semibold pt-5">Nid Card ( Image or PDF )</legend>
                                <input type="file" name="Nid_Card" className="file-input w-full bg-white border-2 border-black text-lg" />

                            </div>
                            <div>
                                <legend className="text-lg font-semibold pt-5">Your Passport Size Image</legend>
                                <input type="file" name="Image" className="file-input w-full bg-white border-2 border-black text-lg" />
                            </div>
                        </div>

                        {/* ssc and hsc certificate */}
                        <div className='grid grid-cols-2 gap-3'>
                            <div>
                                <legend className="text-lg font-semibold pt-5">SSC Certificate ( Image or PDF )</legend>
                                <input type="file" name="SSC_Certificate" className="file-input w-full bg-white border-2 border-black text-lg" />
                            </div>
                            <div>
                                <legend className="text-lg font-semibold pt-5">HSC Certificate ( Image or PDF )</legend>
                                <input type="file" name="HSC_Certificate" className="file-input w-full bg-white border-2 border-black text-lg" />
                            </div>
                        </div>

                        {/* bachelor and internship certificate */}
                        <div className='grid grid-cols-2 gap-3'>
                            <div>
                                <legend className="text-lg font-semibold pt-5">Bachelor Certificate ( Image or PDF )</legend>
                                <input type="file" name="Bachelor_Certificate" className="file-input w-full bg-white border-2 border-black text-lg" />
                            </div>
                            <div>
                                <legend className="text-lg font-semibold pt-5">Internship Certificate ( Image or PDF )</legend>
                                <input type="file" name="Internship_Certificate" className="file-input w-full bg-white border-2 border-black text-lg" />
                            </div>
                        </div>

                        {/* master and phd certificate */}
                        <div className='grid grid-cols-2 gap-3'>
                            <div>
                                <legend className="text-lg font-semibold pt-5">Masters Certificate ( Image or PDF )</legend>
                                <input type="file" name="Masters_Certificate" className="file-input w-full bg-white border-2 border-black text-lg" />
                            </div>
                            <div>
                                <legend className="text-lg font-semibold pt-5">PHD Certificate ( Image or PDF )</legend>
                                <input type="file" name="PHD_Certificate" className="file-input w-full bg-white border-2 border-black text-lg" />
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

export default GeneralmembershipForm