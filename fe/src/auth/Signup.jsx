import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.jpg";
import axios from "axios";
import { toast } from "react-toastify";
import { RefreshCcw } from "lucide-react";

export default function Signup() {
  const canvasRef = useRef(null);
  const [captchaText, setCaptchaText] = useState("");
  const [captchaInput, setCaptchaInput] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [userEmail, setUserEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [acceptedTnC, setAcceptedTnC] = useState(false);

  // --- Fetch captcha ---
  const fetchCaptcha = async () => {
    try {
      const res = await axios.get(
        `${import.meta.env.VITE_ALLOWED_ORIGIN}/captcha`,
        { withCredentials: true }
      );
      setCaptchaText(res.data.text);
    } catch (err) {
      toast.error("Failed to load captcha");
    }
  };

  // Draw captcha text onto the canvas with blue styling, dots, and lines
  const drawCaptcha = (text) => {
    const width = 150, height = 60;
    const ctx = canvasRef.current.getContext("2d");

    // White background
    ctx.clearRect(0, 0, width, height);
    ctx.fillStyle = "#fff";
    ctx.fillRect(0, 0, width, height);

    // Blue random dots
    for (let i = 0; i < 20; i++) {
      ctx.beginPath();
      ctx.arc(Math.random() * width, Math.random() * height, 1 + Math.random(), 0, 2 * Math.PI);
      ctx.fillStyle = "#000";
      ctx.fill();
    }

    // 2 Blue curved lines
    for (let i = 0; i < 1; i++) {
      ctx.strokeStyle = "#000";
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(Math.random() * width, Math.random() * height);
      for (let j = 0; j < 4; j++) {
        ctx.lineTo(Math.random() * width, Math.random() * height);
      }
      ctx.stroke();
    }

    // Bold, blue, monospaced, slightly rotated/distorted text (one char at a time)
    ctx.font = "bold 36px 'Courier New', Courier, monospace";
    ctx.textBaseline = "middle";
    ctx.fillStyle = "#000";
    for (let i = 0; i < text.length; i++) {
      const x = 14 + i * 21, y = 30 + Math.random() * 8;
      ctx.save();
      ctx.translate(x, y);
      ctx.rotate((Math.random() - 0.5) * 0.12); // uneven rotation for distortion!
      ctx.fillText(text[i], 0, 0);
      ctx.restore();
    }
  };

  // Draw canvas on captcha text fetch/update
  useEffect(() => {
    if (captchaText && canvasRef.current) drawCaptcha(captchaText);
  }, [captchaText]);

  useEffect(() => {
    fetchCaptcha();
  }, []);

  // Resend confirmation link function
  const resendConfirmationLink = async () => {
    if (!userEmail) return;
    try {
      setLoading(true);
      await axios.post(
        `${import.meta.env.VITE_ALLOWED_ORIGIN}/resend-verify`,
        { email: userEmail },
        { withCredentials: true }
      );
      toast.success("Verification link resent!");
    } catch (err) {
      toast.error(err.response?.data?.message || "Failed to resend link");
    } finally {
      setLoading(false);
    }
  };

  async function handleSubmit(e) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const name = fd.get("name")?.trim();
    const email = fd.get("email")?.trim();

    if (!name) return toast.error("Please enter your full name");
    if (!email) return toast.error("Please enter your email address");
    if (!captchaInput) return toast.error("Please enter the captcha");
    if (!acceptedTnC) return toast.error("Please accept the Terms & Conditions to continue");

    const payload = { name, email, captchaInput };

    try {
      setLoading(true);
      const res = await axios.post(
        `${import.meta.env.VITE_ALLOWED_ORIGIN}/signup`,
        payload,
        { withCredentials: true }
      );
      toast.success(res.data?.message || "Signup successful!");
      setUserEmail(email);
      setShowModal(true);
    } catch (err) {
      toast.error(err.response?.data?.message || "Something went wrong");
      fetchCaptcha();
    } finally {
      setLoading(false);
      setCaptchaInput("");
    }
  }

  const closeModal = () => {
    setShowModal(false);
    setUserEmail("");
  };

  return (
    <>
      <main className="flex items-center justify-center min-h-screen bg-[#FAFAFA] px-4">
        <section className="bg-white w-full max-w-[538px] px-8 py-10 rounded-[26px] border border-[#D6D6D6] shadow-sm">

          <header className="flex justify-center mb-4">
            <img
              src={logo || "/placeholder.svg"}
              alt="WCMD"
              className="w-[232px] h-[74px] object-contain"
            />
          </header>

          <form onSubmit={handleSubmit} className="space-y-5" noValidate>
            <input
              id="name"
              name="name"
              type="text"
              required
              placeholder="Your full name"
              className="h-[66px] w-full rounded-[10px] border border-[#EAEAEA] px-4 text-base text-[#333] placeholder:text-[#B0A9A9] focus:outline-none focus:ring-2 focus:ring-[#972620]"
            />
            <input
              id="email"
              name="email"
              type="email"
              required
              placeholder="Enter your email address"
              className="h-[66px] w-full rounded-[10px] border border-[#EAEAEA] px-4 text-base text-[#333] placeholder:text-[#B0A9A9] focus:outline-none focus:ring-2 focus:ring-[#972620]"
            />
            <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 bg-gray-50 p-4 rounded-xl border border-gray-200 shadow-sm w-full max-w-lg">
              <div
                className="flex-shrink-0 w-full sm:w-[150px] h-[60px] flex items-center justify-center bg-white border border-gray-300 rounded-lg shadow-inner"
              >
                <canvas ref={canvasRef} width={150} height={60} style={{ display: "block" }} />
              </div>
              <div className="flex w-full gap-2">
                <input
                  type="text"
                  value={captchaInput}
                  onChange={(e) => setCaptchaInput(e.target.value)}
                  placeholder="Enter captcha"
                  className="h-[50px] flex-1 rounded-lg border border-gray-300 px-4 focus:ring-2 focus:ring-[#972620] focus:outline-none text-gray-700 placeholder-gray-400"
                />
                <button
                  type="button"
                  onClick={fetchCaptcha}
                  className="p-3 rounded-lg border border-[#972620] text-[#972620] hover:bg-[#972620] hover:text-white transition-all shadow-sm"
                >
                  <RefreshCcw className="w-5 h-5" />
                </button>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={acceptedTnC}
                onChange={(e) => setAcceptedTnC(e.target.checked)}
                className="w-[21px] h-[21px] border border-[#D6D6D6] rounded-[5px]"
              />
              <span className="text-sm text-[#333]">
                Agree to our{" "}
                <span className="underline cursor-pointer">Terms and Conditions</span>
              </span>
            </div>
            <button
              type="submit"
              disabled={loading || !acceptedTnC}
              className={`h-[51px] w-full rounded-[10px] text-white font-medium transition-colors ${loading || !acceptedTnC ? "bg-[#ce7d79] cursor-not-allowed" : "bg-[#972620] hover:bg-[#982019]"}`}
            >
              {loading ? "Signing up…" : "Signup"}
            </button>
            <Link
              to="/login"
              className="h-[51px] w-full flex items-center justify-center rounded-[10px] border border-[#972620] bg-white text-[#972620] font-medium hover:bg-[#972620] hover:text-white transition-colors"
            >
              Already registered? Login
            </Link>
          </form>
        </section>
      </main>

      {showModal && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50 px-4">
          <div className="bg-white rounded-2xl p-8 max-w-md w-full text-center shadow-xl border border-[#EAEAEA]">
            <h2 className="text-xl font-semibold text-[#972620] mb-4">
              Thank you for signing up for WCND 2026 India
            </h2>
            <p className="text-gray-600 mb-4">
              We’ve sent a confirmation link to your email. Please check your inbox (and spam folder if needed) to verify your account.
            </p>
            <p className="text-gray-600 mb-6">
              Didn’t receive it?{" "}
              <button
                onClick={resendConfirmationLink}
                className="text-[#972620] font-medium hover:underline"
              >
                Resend Confirmation Link
              </button>
            </p>
            <button
              onClick={closeModal}
              className="w-full bg-[#972620] text-white py-3 rounded-lg font-medium hover:bg-[#a95551] transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}
