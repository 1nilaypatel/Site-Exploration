import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function SignUp() {
  const [isFirstClick, setIsFirstClick] = useState(true);
  const [formData, setFormData] = useState({});
  const [error, setError] = useState(null);
  const [emailError, setEmailError] = useState(null);
  const [passwordError, setPasswordError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });

    if (e.target.id === 'username' || e.target.id === 'country' || e.target.id === 'age') {
      if (
        formData.username === "" ||
        formData.email === "" ||
        formData.password === "" ||
        formData.country === "" ||
        formData.age === ""
      ) {
        setError("All fields are required.");
      }else{
        setError(null);
      }
    }
  
    if (e.target.id === 'email') {
      if (!validateEmail(formData.email)) {
        setEmailError('Invalid email format');
      } else {
        setEmailError(null);
      }
    }
  
    if (e.target.id === 'password') {
      if (!validatePassword(formData.password)) {
        setPasswordError('Password should be at least 8 characters long');
      } else {
        setPasswordError(null);
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isFirstClick) {
      setIsFirstClick(false);
    } else {
      if (!validateForm()) {
        return;
      }
      try {
        setLoading(true);
        const response = await axios.post('/server/auth/signup', formData, {
          headers: {
            'Content-Type': 'application/json',
          },
        });
        const data = response.data;
        if (data.success === false) {
          setLoading(false);
          setError(data.message);
          return;
        }
        setLoading(false);
        setError(null);
        navigate('/');
      } catch (error) {
        setLoading(false);
        setError(error.response.data.message);
      }
    }
  };

  const validatePassword = (password) => {
    return password.length >= 8;
  };

  const validateEmail = (email) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };

  const validateForm = () => {
    if (
      formData.username === "" ||
      formData.email === "" ||
      formData.password === "" ||
      formData.country === "" ||
      formData.age === ""
    ) {
      setError("All fields are required.");
      return false;
    }

    if (!validateEmail(formData.email)) {
      setEmailError('Invalid email format');
      return false;
    }

    if (!validatePassword(formData.password)) {
      setPasswordError('Password should be at least 8 characters long');
      return false;
    }

    setError(null);
    return true;
  };

  return (
    <div className="max-w-sm mx-auto mt-48 p-6 lg:p-2">
      <h1 className='text-center text-3xl mb-8'>
        Enter your details to proceed
      </h1>
      <div className="flex flex-col gap-5">
        {!isFirstClick && (
          <div className="flex flex-col gap-5">
            <input 
              type="text"
              placeholder="Nilay Patel"
              id="username"
              className="border border-customBlue focus:outline-none focus:border-customBlue2 rounded-md p-2"
              required
              onChange={handleChange}
            />
            <div>
              {emailError && <p className='text-red-600 text-xs'>{emailError}</p>}
              <input 
                type="email"
                placeholder="workwithnilaypatel@gmail.com"
                id="email"
                className="border border-customBlue focus:outline-none focus:border-customBlue2 rounded-md p-2 w-full"
                required
                onChange={handleChange}
              />
            </div>
            <div>
              {passwordError && <p className='text-red-600 text-xs'>{passwordError}</p>}
              <input 
                type="password"
                placeholder="password"
                id="password"
                className="border border-customBlue focus:outline-none focus:border-customBlue2 rounded-md p-2 w-full"
                required
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-row gap-4">
              <input 
                type="text"
                placeholder="India"
                id="country"
                className="border border-customBlue focus:outline-none focus:border-customBlue2 rounded-md p-2 w-2/3"
                required
                onChange={handleChange}
              />
              <input 
                type="number"
                placeholder="age"
                id="age"
                className="border border-customBlue focus:outline-none focus:border-customBlue2 rounded-md p-2 w-1/3"
                required
                onChange={handleChange}
              />
            </div>
          </div>
        )}
        <button 
          onClick={handleSubmit}
          disabled={loading || error || emailError || passwordError}
          className="py-4 px-9 bg-customBlue text-slate-100 border hover:border-customBlue hover:bg-white  hover:text-customBlue disabled:cursor-not-allowed"
        >
          {loading ? "Loading..." : "Sign Up"}
        </button>
      </div>
      {error && <p className='text-red-600 mt-3'>{error}</p>}
    </div>
  )
}