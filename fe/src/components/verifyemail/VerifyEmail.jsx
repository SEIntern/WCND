import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import logo from "../../assets/logo.jpg";
import { toast } from "react-toastify";
import { useAuth } from "../../context/AuthContext";

const VerifyEmail = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPopup, setShowPopup] = useState(false); // ✅ Popup state
  const navigate = useNavigate();
  const { fetchUserData } = useAuth();

  const handleVerify = async (e) => {
    e.preventDefault();

    if (!email) {
      toast.error("Please enter your email");
      return;
    }

    setLoading(true);

    try {
      const res = await axios.post(
        `${import.meta.env.VITE_ALLOWED_ORIGIN}/email-verify`,
        { email },
        { headers: { "Content-Type": "application/json" }, withCredentials: true }
      );

      toast.success(res.data.message || "Email verified successfully!");
      await fetchUserData();

      // ✅ Show popup instead of direct navigation
      setShowPopup(true);
    } catch (error) {
      toast.error(error.response?.data?.message || error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleClosePopup = () => {
    setShowPopup(false);
    navigate("/login"); // ✅ Redirect after closing popup
  };

  return (
    <main className="flex items-center justify-center min-h-screen bg-[#FAFAFA] px-4">
      <section className="bg-white w-full max-w-[538px] rounded-[26px] border border-[#D6D6D6] px-8 py-10 shadow-sm">
        <header className="flex justify-center mb-4">
          <img
            src={logo}
            alt="WCMD"
            className="w-[232px] h-[74px] object-contain"
          />
        </header>

        <form onSubmit={handleVerify} className="space-y-5" noValidate>
          <div>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="Enter your email"
              className="h-[66px] w-full rounded-[10px] border border-[#EAEAEA] px-4 text-base text-[#333] placeholder:text-[#333]/60 focus:outline-none focus:ring-2 focus:ring-[#972620]"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="mt-2 h-[51px] w-full rounded-[10px] bg-[#972620] text-white font-medium border border-[#EAEAEA] transition-colors hover:bg-[#a95551] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#a95551] disabled:opacity-60"
          >
            {loading ? "Verifying email..." : "Verify Email"}
          </button>
        </form>
      </section>

      {/* ✅ Popup Modal */}
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
          <div className="bg-white w-full max-w-md rounded-lg shadow-lg p-6 text-center">
            <h2 className="text-xl font-semibold text-[#333] mb-4">
              ✅ Email Verified!
            </h2>
            <p className="text-[#555] mb-6">
              Your email has been successfully verified. Please proceed to login.
            </p>
            <button
              onClick={handleClosePopup}
              className="h-[45px] w-full rounded-[10px] bg-[#972620] text-white font-medium transition-colors hover:bg-[#a95551]"
            >
              Close & Go to Login
            </button>
          </div>
        </div>
      )}
    </main>
  );
};

export default VerifyEmail;

