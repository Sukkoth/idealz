import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTiktok,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";
import { Link } from "react-router-dom";

function Contact() {
  return (
    <div>
      <div className='flex gap-2 mt-8'>
        <button className='flex-1 bg-white py-3 rounded-2xl'>Call us</button>
        <button className='flex-1 bg-white py-3 rounded-2xl'>Email us</button>
      </div>
      <div className='text-2xl md:text-4xl flex justify-between mt-5 px-5'>
        <div className='bg-white cursor-pointer hover:bg-gray-50 p-3 rounded-full'>
          <FaInstagram />
        </div>
        <div className='bg-white cursor-pointer hover:bg-gray-50 p-3 rounded-full'>
          <FaFacebookF />
        </div>
        <div className='bg-white cursor-pointer hover:bg-gray-50 p-3 rounded-full'>
          <FaWhatsapp />
        </div>
        <div className='bg-white cursor-pointer hover:bg-gray-50 p-3 rounded-full'>
          <FaLinkedinIn />
        </div>
        <div className='bg-white cursor-pointer hover:bg-gray-50 p-3 rounded-full'>
          <FaTiktok />
        </div>
        <div className='bg-white cursor-pointer hover:bg-gray-50 p-3 rounded-full'>
          <FaTwitter />
        </div>
      </div>
      <div className='text-gray-400 text-xs font-thin mt-8 space-y-3 flex flex-col'>
        <Link>User agreement</Link>
        <Link>Frequently asked questions</Link>
        <Link>Privacy policy</Link>
        <Link>Deactivate Account</Link>
      </div>
    </div>
  );
}

export default Contact;
