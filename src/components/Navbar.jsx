import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-black p-3 flex justify-between items-center">
      <div className="flex items-center">
        <img src="/jm-logo.gif" alt="Logo" className="h-4 sm:h-10 w-auto mr-5 sm:mr-10" />
      </div>

      <ul className="flex space-x-2 sm:space-x-4">
        {['home', 'about', 'projects', 'contact'].map((item) => (
          <li key={item}>
            <Link
              to={`/${item.replace(/\s+/g, '').toLowerCase()}`}
              className="text-babyBlue font-vcr-osd-mono font-bold text-sm sm:text-lg hover:text-gray-200 transition duration-300"
              style={{
                '--tw-hover-shadow': '0 0 5px #89CFF0, 0 0 10px #89CFF0, 0 0 15px #89CFF0',
              }}
              onMouseEnter={(e) =>
                e.currentTarget.style.textShadow = 'var(--tw-hover-shadow)'
              }
              onMouseLeave={(e) => (e.currentTarget.style.textShadow = '')}
            >
              {item}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
