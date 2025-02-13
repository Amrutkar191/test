import { useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import sideImage from "../../assets/images/sideImage.png";
import logo from "../../assets/icons/logo.svg";
import wavingHand from "../../assets/images/wavingHand.png";

export default function LoginPage() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    navigate("/Dashboard");
    // setLoading(true);
    // try {
    //   const response = await axios.post("http://localhost:8000/auth/login", data);
    //   if (response.status === 200 && response.data.token) {
    //     localStorage.setItem("token", response.data.token);
    //     toast.success("Login successful!", {
    //       position: "top-right",
    //       autoClose: 1500,
    //       onClose: () => navigate("/dashboard"),
    //     });
    //   } else {
    //     toast.error("Invalid credentials. Please try again.");
    //   }
    // } catch (error) {
    //   toast.error(error.response?.data?.message || "Login failed. Please try again.");
    // } finally {
    //   setLoading(false);
    // }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white font-inter">
      <ToastContainer />

      {/* Main Content */}
      <div className="flex flex-col md:flex-row items-center justify-center 
           w-full h-screen px-3 sm:px-4 md:px-5 lg:px-6 xl:px-7 2xl:px-8
           py-[0.875rem] sm:py-[1rem] md:py-[1.125rem] lg:py-[1.25rem] xl:py-[1.375rem] 2xl:py-[1.5rem]">



        {/* Side Image  */}
        <div className=" realative hidden md:flex 
           w-1/2 lg:w-[45%] xl:w-[50%] 2xl:w-1/2 
           justify-center items-center 
            
           ">
          <img
            src={sideImage}
            alt="Side"
            className="w-full 
           max-w-[57.25rem] sm:max-w-[45rem] md:max-w-[40rem] lg:max-w-[35rem] xl:max-w-[50rem] 2xl:max-w-[57.25rem] 
           h-auto 
           max-h-[64.5rem] sm:max-h-[50rem] md:max-h-[45rem] lg:max-h-[40rem] xl:max-h-[55rem] 2xl:max-h-[64.5rem] 
           object-cover rounded-lg"

          />
          <h1 className="absolute font-inter text-[32px] mb-[510px] mr-[30px] text-gray-50 ">
            FCore
          </h1>
        </div>

        {/* Login Form Section */}
        <div className="w-full md:w-1/2 flex flex-col justify-center items-center md:items-end mr-[20px] px-6 md:px-[7.8rem]  ">
          <div className="relative w-full max-w-sm sm:max-w-md lg:max-w-lg">
            {/* Logo */}
            <img src={logo} alt="Company Logo" className="w-[6rem] sm:w-[7rem] h-auto mb-4" />

            {/* Welcome Text */}
            <div className="flex items-center  text-[#141415] mt-3 mb-4">
              <h1 className="text-[1.75rem] sm:text-[0.72rem] lg:[1.15rem] xl:text-[1.4375rem] 2xl:text-[1.75rem]  font-semibold tracking-[0.01em]">
                Welcome Back  👋
              </h1>

            </div>

            <p className="text-[1.25rem] 2xl:text-[0.96rem] xl:text-[0.8rem] lg:text-[0.7rem] md:text-[0.65rem] sm:text-[0.6rem] 
              leading-[2rem] 2xl:leading-[1.8rem] xl:leading-[1.6rem] lg:leading-[1.4rem] md:leading-[1.3rem] sm:leading-[1.2rem]
              text-[#141415] mt-3 max-w-[28.375rem] 2xl:max-w-[24rem] xl:max-w-[22rem] lg:max-w-[20rem] md:max-w-[18rem] sm:max-w-[16rem]">
              Today is a new day. It's your day. You shape it.
              <br />Sign in to start managing your projects.
            </p>

            {/* Form */}
            <form onSubmit={handleSubmit(onSubmit)} className=" mt-4 space-y-4">
              {/* Email Input */}
              <div>
                <label className="block text-[1rem] 2xl:text-[0.875rem] xl:text-[0.8rem] lg:text-[0.75rem] md:text-[0.7rem] sm:text-[0.65rem] 
                   font-semibold text-[#141415] mb-1">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="Example@email.com"
                  className="w-full h-auto 
                  max-w-[21.875rem] sm:max-w-[23.75rem] md:max-w-[26.25rem] lg:max-w-[28.125rem] 
                  max-h-[2.625rem] sm:max-h-[2.75rem] md:max-h-[2.875rem] lg:max-h-[3rem] 

                  border border-[#E7E7E7] rounded-md bg-[#F2F2F7] 
                  px-5 py-[1rem] sm:py-[0.75rem] text-[1rem] 2xl:text-[0.875rem] xl:text-[0.8rem]
                  lg:text-[0.75rem] md:text-[0.7rem] sm:text-[0.65rem] focus:ring-2 focus:ring-blue-400 outline-none"

                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/,
                      message: "Invalid email format",
                    },
                  })}
                />
                {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
              </div>

              {/* Password Input */}
              <div className="flex flex-col  w-auto max-w-[450px]">
                <label className="block text-[1rem] 2xl:text-[0.875rem] xl:text-[0.8rem] lg:text-[0.75rem] md:text-[0.7rem] sm:text-[0.65rem] 
                   font-semibold text-[#141415] mb-1">
                  Password</label>
                <input
                  type="password"
                  placeholder="At least 8 characters"
                  className="w-full h-auto 
                  max-w-[21.875rem] sm:max-w-[23.75rem] md:max-w-[26.25rem] lg:max-w-[28.125rem] 
                  max-h-[2.625rem] sm:max-h-[2.75rem] md:max-h-[2.875rem] lg:max-h-[3rem] 

                   
                  border border-[#E7E7E7] rounded-md bg-[#F2F2F7] 
                  px-5 py-[1rem] sm:py-[0.75rem] text-[1rem] 2xl:text-[0.875rem] xl:text-[0.8rem]
                  lg:text-[0.75rem] md:text-[0.7rem] sm:text-[0.65rem] focus:ring-2 focus:ring-blue-400 outline-none"

                  {...register("password", {
                    required: "Password is required",
                    minLength: { value: 8, message: "Password must be at least 8 characters long" },
                    pattern: {
                      value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])/,
                      message:
                        "Password must contain at least 1 uppercase, 1 lowercase, 1 number, and 1 special character (!@#$%^&*)",
                    },
                  })}
                />
                {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password.message}</p>}

                <div className="flex items-end justify-end  ">
                  <button
                    type="button"
                    onClick={() => navigate("/forgot-password")}
                    className=" mt-4
                  text-[1rem] 2xl:text-[0.875rem] xl:text-[0.8rem] lg:text-[0.75rem] md:text-[0.7rem] sm:text-[0.65rem] 
           font-medium text-[#2A6AB2] hover:text-[#10699E] transition duration-200  "

                  >
                    Forgot Password?
                  </button>
                </div>
              </div>

              {/* Forgot Password */}


              {/* Submit Button */}
              <button
                type="submit"
                className=" w-full h-auto 
                  max-w-[21.875rem] sm:max-w-[23.75rem] md:max-w-[26.25rem] lg:max-w-[28.125rem] 
                  max-h-[2.625rem] sm:max-h-[2.75rem] md:max-h-[2.875rem] lg:max-h-[3rem]  

                
                text-[1rem] sm:text-[0.875rem] md:text-[0.9375rem] lg:text-[1rem] 
                py-[1rem]
                font-semibold bg-[#179FDB] text-white rounded-md 
                hover:bg-[#128EC4] transition duration-200"

                disabled={loading}
              >
                {loading ? (
                  <lord-icon
                    src="https://cdn.lordicon.com/mfblariy.json"
                    trigger="loop"
                    state="loop-cycle"
                    colors="primary:#ffffff,secondary:#ffffff"
                    style={{ width: "1.25rem", height: "1.25rem", padding: "0.125rem" }}
                  ></lord-icon>
                ) : (
                  "Sign In"
                )}
              </button>
            </form>


          </div>
          {/* Footer */}
          <footer className="absolute bottom-[1px]  w-auto py-4 text-center text-[#98A2B2] text-[0.875rem] sm:text-[1rem] font-normal">
            Copyright © 2025 - enira lean automation.
          </footer>
        </div>

      </div>


    </div>
  );
}