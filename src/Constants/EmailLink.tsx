"use client";
import React from "react";

interface EmailLinkProps {
  email: string;
  className?: string;
}
const EmailLink: React.FC<EmailLinkProps> = ({ email, className }) => {
  const handleClick = () => {
    window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=${email}`, "_blank");
  };
  return (
    <span
      onClick={handleClick}
      className={`cursor-pointer text-purple-500 hover:text-purple-200 transition-colors ${className}`}
    >
      {email}
    </span>
  );
};

export default EmailLink;

