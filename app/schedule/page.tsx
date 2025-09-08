"use client";
import { useState } from "react";
import Image from "next/image";

export default function SchedulePage() {
  const [step, setStep] = useState<"calendar" | "form">("calendar");
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);

  const times = ["9:00 AM", "10:00 AM", "11:00 AM", "1:00 PM", "2:00 PM", "3:00 PM"];

  const handleSchedule = () => {
    if (!selectedDate || !selectedTime) return;
    setStep("form"); // move to step 2
  };

  const handleSubmit = async () => {
    if (!email || !phone) return;

    setLoading(true);
    try {
      const res = await fetch("/api/schedule", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ date: selectedDate, time: selectedTime, email, phone }),
      });

      if (res.ok) {
        alert("✅ Scheduled successfully!");
        setStep("calendar"); // reset
        setSelectedDate(null);
        setSelectedTime(null);
        setEmail("");
        setPhone("");
      } else {
        alert("❌ Something went wrong, try again.");
      }
    } catch (err) {
      console.error(err);
      alert("❌ Failed to schedule.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="flex min-h-screen">
      {/* Left Logo Panel */}
      <div className="hidden w-1/3 bg-[#FAF9F6] md:flex flex-col items-center justify-center text-center px-6">
        <Image width={10} height={10} src="/asset/logo.svg" alt="Logo" className="w-24 mb-4" />
        <h2 className="text-xl font-bold">Better Life</h2>
        <p className="text-gray-600">Where everyday is a step forward</p>
      </div>

      {/* Right Scheduling Panel */}
      <div className="flex-1 flex items-center justify-center px-5 md:px-0">
        {step === "calendar" && (
          <div className="w-full max-w-md text-center">
            <h2 className="text-2xl font-bold mb-6">Where would you like to schedule a visit?</h2>
            <input
              type="date"
              value={selectedDate ?? ""}
              onChange={(e) => setSelectedDate(e.target.value)}
              className="border rounded-lg p-2 mb-4 w-full"
            />

            <div className="grid grid-cols-3 gap-3 mb-6">
              {times.map((time) => (
                <button
                  key={time}
                  onClick={() => setSelectedTime(time)}
                  className={`px-4 py-2 rounded-lg border transition ${
                    selectedTime === time
                      ? "bg-[#97C4B9] text-white"
                      : "bg-gray-100 hover:bg-gray-200"
                  }`}
                >
                  {time}
                </button>
              ))}
            </div>

            <button
              onClick={handleSchedule}
              disabled={!selectedDate || !selectedTime}
              className="w-full py-3 bg-[#97C4B9] text-white rounded-lg hover:bg-[#7ea99e] disabled:opacity-50"
            >
              Next
            </button>
          </div>
        )}

        {step === "form" && (
          <div className="w-full max-w-md text-center">
            <h2 className="text-2xl font-bold mb-6">Confirm Your Details</h2>
            <input
              type="email"
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border rounded-lg p-2 mb-4 w-full"
            />
            <input
              type="tel"
              placeholder="Your Phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="border rounded-lg p-2 mb-6 w-full"
            />
            <button
              onClick={handleSubmit}
              disabled={loading}
              className="w-full py-3 bg-[#0E1A2B] text-white rounded-lg hover:bg-[#1a2a40] disabled:opacity-50"
            >
              {loading ? "Submitting..." : "Confirm Booking"}
            </button>
          </div>
        )}
      </div>
    </main>
  );
}
