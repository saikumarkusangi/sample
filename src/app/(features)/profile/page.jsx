import Image from "next/image";
import React from "react";
import {
  MapPinIcon,
  PhoneIcon,
  EnvelopeIcon,
  BriefcaseIcon,
  AcademicCapIcon,
  LanguageIcon,

} from "@heroicons/react/24/outline";

// For social icons we'll still need these from react-icons
import { 
  FaGithub, 
  FaLinkedin, 
  FaTwitter, 
  FaInstagram, 
  FaFacebook, 
  FaYoutube 
} from "react-icons/fa";

const Profile = () => {
    return (
<<<<<<< HEAD
        <div style={{ padding: "20px" }}>
            <h1>Admin Dashboard</h1>
            <p>Welcome to the Admin Dashboard. Manage your application here.</p>
<<<<<<< HEAD
            <p> add my profile changes in development</p>
=======

            <p> second change sathwik</p>
=======
        <div className="max-w-4xl mx-auto p-8 bg-white shadow-lg rounded-lg">
            <div className="flex flex-col items-center mb-8">
                <div className="relative w-32 h-32 mb-4">
                    <Image 
                        src="https://avatars.githubusercontent.com/u/93697313?v=4" 
                        alt="Profile" 
                        fill
                        className="rounded-full object-cover border-4 border-blue-500"
                    />
                </div>
                <h1 className="text-3xl font-bold text-gray-800">Sai Kumar Kusangi</h1>
                <p className="text-xl text-gray-600">Full Stack Developer</p>
            </div>

            <div className="grid md:grid-cols-2 text-black gap-6">
                {/* Contact Information */}
                <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                        <EnvelopeIcon className="w-5 h-5 text-blue-500" />
                        <p>sai.kumar.kusangi@gmail.com</p>
                    </div>
                    <div className="flex items-center space-x-3">
                        <PhoneIcon className="w-5 h-5 text-blue-500" />
                        <p>9876543210</p>
                    </div>
                    <div className="flex items-center space-x-3">
                        <MapPinIcon className="w-5 h-5 text-blue-500" />
                        <p>Hyderabad, Telangana, India</p>
                    </div>
                </div>

                {/* Professional Info */}
                <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                        <BriefcaseIcon className="w-5 h-5 text-blue-500" />
                        <p>1 year of experience</p>
                    </div>
                    <div className="flex items-center space-x-3">
                        <AcademicCapIcon className="w-5 h-5 text-blue-500" />
                        <p>B.Tech in Computer Science and Engineering</p>
                    </div>
                </div>
            </div>

            {/* Skills */}
            <div className="mt-8 text-black">
                <h2 className="text-xl font-semibold mb-4">Technical Skills</h2>
                <div className="flex flex-wrap gap-2">
                    {["React", "Next.js", "Tailwind CSS", "JavaScript", "TypeScript", "Node.js", "Express", "MongoDB", "PostgreSQL", "AWS", "Docker", "Kubernetes"].map((skill) => (
                        <span key={skill} className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                            {skill}
                        </span>
                    ))}
                </div>
            </div>

            {/* Certifications */}
            <div className="mt-8 text-black">
                <h2 className="text-xl font-semibold mb-4 flex items-center">
                    {/* <CertificateIcon className="w-5 h-5 text-blue-500 mr-2" /> */}
                    Certifications
                </h2>
                <ul className="list-disc list-inside space-y-2 ml-6">
                    <li>AWS Certified Solutions Architect - Associate</li>
                    <li>Microsoft Certified: Azure Administrator Associate</li>
                </ul>
            </div>

            {/* Languages */}
            <div className="mt-8 text-black">
                <h2 className="text-xl font-semibold mb-4 flex items-center">
                    <LanguageIcon className="w-5 h-5 text-blue-500 mr-2" />
                    Languages
                </h2>
                <p>English, Hindi, Telugu</p>
            </div>

            {/* Social Links */}
            <div className="mt-8 border-t pt-8 text-black">
                <div className="flex justify-center space-x-6">
                    <a href="https://github.com/sai-kumar-kusangi" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-500">
                        <FaGithub size={24} />
                    </a>
                    <a href="https://www.linkedin.com/in/sai-kumar-kusangi-760100200/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-500">
                        <FaLinkedin size={24} />
                    </a>
                    <a href="https://twitter.com/sai_kumar_kusangi" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-500">
                        <FaTwitter size={24} />
                    </a>
                    <a href="https://www.instagram.com/sai_kumar_kusangi" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-500">
                        <FaInstagram size={24} />
                    </a>
                    <a href="https://www.facebook.com/sai_kumar_kusangi" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-500">
                        <FaFacebook size={24} />
                    </a>
                    <a href="https://www.youtube.com/sai_kumar_kusangi" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-500">
                        <FaYoutube size={24} />
                    </a>
                </div>
            </div>


            <p className="text-black text-center"> sai sathwik created</p>
>>>>>>> 760afd7b7b2b18cebdf29f9f2bfe05e36e4d8629
>>>>>>> 7674b899f3b6fc9e8b7f415a803b93ea9a7a59d0
        </div>
    );
};

export default Profile;