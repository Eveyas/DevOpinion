import React from 'react';
import { FaFacebookF, FaChrome, FaYoutube } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 p-6">
      <div className="flex justify-center space-x-6 mb-4">
        <a href="https://facebook.com" className="text-blue-600">
          <FaFacebookF size={24} />
        </a>
        <a href="https://google.com/chrome" className="text-blue-500">
          <FaChrome size={24} />
        </a>
        <a href="https://youtube.com" className="text-red-600">
          <FaYoutube size={24} />
        </a>
      </div>
      <p className="text-center text-gray-700">
        DevOpinion. Todos los derechos están reservados. &copy; {new Date().getFullYear()}
      </p>
    </footer>
  );
};

export default Footer;
