"use client";

import Image from "next/image";

export default function Logo() {
  return (
    <a href="#" data-cursor="HOME" className="flex items-center gap-2 group">
      <Image
      src="/logo/logo.png"
        alt="Express Highway Club Logo"
        width={80}
        height={60}
      />
    </a>
  );
}