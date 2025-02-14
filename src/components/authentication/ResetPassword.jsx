import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import AuthLayout from "../layout/AuthLayout";

export default function ResetPassword() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const queryParams = new URLSearchParams(location.search);
  const token = queryParams.get("token");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setMessage("Passwords do not match!");
      return;
    }
    try {
      await axios.post(`https://vercel-trails.vercel.app/auth/reset-password?token=${token}`, { password });
      setMessage("Password reset successfully!");
      setTimeout(() => navigate("/"), 2000);
    } catch (error) {
      setMessage("Failed to reset password. Try again.");
    }
  };

  return (
    <AuthLayout title="Reset Password" subtitle="Enter a new password for your account.">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-gray-1 font-[600] mb-1">New Password</label>
          <input type="password" className="w-full border border-gray-300 rounded-md px-4 py-2" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </div>
        <div>
          <label className="block text-gray-1 font-[600] mb-1">Confirm New Password</label>
          <input type="password" className="w-full border border-gray-300 rounded-md px-4 py-2" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />
        </div>

        <button type="submit" className="w-full bg-blue-2 text-white py-2 rounded-md hover:bg-blue-500 transition duration-200">
          Reset Password
        </button>

        {message && <p className="text-green-500 text-sm mt-2">{message}</p>}
      </form>
    </AuthLayout>
  );
}
