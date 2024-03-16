import React from "react";

export default function Footer() {
  return (
    <footer className="mb-10 px-4 text-center text-gray-500 mt-10">
      <small className="mb-2 block text-xs">
        &copy; 2024 Thanushree. All rights reserved.
      </small>
      <p className="text-xs">
        <span className="font-semibold">About this website:</span> Built with
        Next.js (App Router & Server Actions), TypeScript, Tailwind CSS,
        Nodemailer, react-icons, Vercel hosting.
      </p>
    </footer>
  );
}