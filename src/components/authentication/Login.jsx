import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import AuthLayout from "../layout/AuthLayout";

export default function LoginPage() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    navigate("/Dashboard");
  };

  return (
    <AuthLayout title="Welcome Back 👋" subtitle="Sign in to start managing your projects.">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* Email Input */}
        <div>
          <label className="block text-gray-1 font-[600] mb-1">Email</label>
          <input
            type="email"
            placeholder="Example@email.com"
            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-400 outline-none"
            {...register("email", { required: "Email is required" })}
          />
          {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
        </div>

        {/* Password Input */}
        <div>
          <label className="block text-gray-1 font-[600] mb-1">Password</label>
          <input
            type="password"
            placeholder="At least 8 characters"
            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-400 outline-none"
            {...register("password", { required: "Password is required" })}
          />
          {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password.message}</p>}
        </div>

        {/* Forgot Password */}
        <div className="text-right">
          <button type="button" onClick={() => navigate("/forgot-password")} className="text-blue-1 text-sm hover:underline">
            Forgot Password?
          </button>
        </div>

        {/* Submit Button */}
        <button type="submit" className="w-full bg-blue-2 text-white py-2 rounded-md hover:bg-blue-500 transition duration-200">
          {loading ? "Loading..." : "Sign In"}
        </button>
      </form>
    </AuthLayout>
  );
}
