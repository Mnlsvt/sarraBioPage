'use client';

import { useState } from 'react';

export function Interest() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-070F2B">
      <div className="max-w-md w-full text-center bg-white shadow-lg p-8 rounded-2xl">
        <h1 className="text-indigo-950 text-3xl font-bold mb-4">Say hi!</h1>
        {!submitted ? (
          <p className="text-indigo-950 mb-6">Let's get in touch</p>
        ) : (
          <p className="text-purple-600 font-semibold">
            Thanks for reaching out! 🎉<br /> I will get back to you soon.
          </p>
        )}
        {!submitted && (
          <form
            action="https://formspree.io/f/mqaqqjkk"
            method="POST"
            target="hidden_iframe" // 👈 This was missing
            onSubmit={() => setTimeout(() => setSubmitted(true), 100)}
            className="flex flex-col gap-4"
          >
            <input
              type="email"
              name="email"
              placeholder="Your email"
              required
              className="p-3 border rounded-lg text-black"
            />
            <textarea
              name="message"
              placeholder="Your message"
              required
              className="p-3 border rounded-lg text-black"
              rows={4}
            />
            <button
              type="submit"
              className="bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
            >
              Send Message
            </button>
          </form>
        )}
        <iframe name="hidden_iframe" style={{ display: 'none' }}></iframe>
      </div>
    </div>
  );
}
