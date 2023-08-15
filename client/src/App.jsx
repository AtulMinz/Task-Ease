/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';

const App = () => {
  const [theme, setTheme] = useState('light');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const handleThemeChange = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  const handleLogin = () => {
    if (email === 'admin' && password === 'admin') {
      setEmail('');
      setPassword('');
    }
  };

  const buttonColors = {
    light: {
      bg: 'bg-yellow-300',
      hover: 'hover:bg-yellow-400', // Updated hover class for light mode
      text: 'Dark Mode',
    },
    dark: {
      bg: 'bg-green-300',
      hover: 'hover:bg-green-400', // Updated hover class for dark mode
      text: 'Light Mode',
    },
  };

  const { bg, hover, text } = buttonColors[theme];

  return (
    <div className='h-screen bg-white dark:bg-gray-800'>
      <nav className={` flex items-start flex-row-reverse py-5 px-5`}>
        <button className={`rounded-full ${bg} ${hover} p-3`} onClick={handleThemeChange}>
          {text}
        </button>
      </nav>
      <section className='flex flex-col justify-center items-center'>
      <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="p-2 rounded my-2"
        />
        <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="p-2 rounded my-2"
        />
        <button
            className="rounded-md bg-blue-500 hover:bg-blue-600 text-white px-4 py-2"
            onClick={handleLogin}
          >Login</button>
      </section>
    </div>
  );
};

export default App;
