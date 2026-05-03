"use client";

import { useEffect, useState } from "react";

type RedeemCouponOverlayProps = {
  ctaLabel: string;
};

export function RedeemCouponOverlay({ ctaLabel }: RedeemCouponOverlayProps) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [isOpen]);

  return (
    <>
      <button
        type="button"
        onClick={() => {
          setIsOpen(true);
        }}
        className="mt-5 inline-flex w-full max-w-[360px] items-center justify-center rounded-[18px] bg-[#366d06] px-5 py-3.5 text-center text-[15px] font-semibold text-white transition hover:translate-y-[-1px] hover:bg-[#2e5d05] md:text-[17px]"
        style={{ fontFamily: '"Aileron", sans-serif', letterSpacing: "-0.01em" }}
      >
        {ctaLabel}
      </button>

      {isOpen ? (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/75 px-4 py-6"
          role="dialog"
          aria-modal="true"
          aria-label="Coupon Redemption Preview"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="relative w-full max-w-[560px] rounded-[16px] bg-white p-6 md:p-7"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className="absolute right-3 top-3 rounded-full bg-[#e8eee2] px-3 py-1 text-sm font-semibold text-[#2f3a24]"
              onClick={() => setIsOpen(false)}
              aria-label="Close overlay"
            >
              Close
            </button>

            <h2
              className="text-[22px] font-semibold tracking-[-0.02em] text-[#1f2c12] md:text-[26px]"
              style={{ fontFamily: '"Aileron", sans-serif' }}
            >
              Coupon Redemption
            </h2>
            <p
              className="mt-3 text-[15px] leading-7 text-[#4d5546] md:text-[16px]"
              style={{ fontFamily: '"Aileron", sans-serif' }}
            >
              Your session is reserved. Share your contact details and preferred time slot to proceed
              with therapist confirmation.
            </p>
            <ul className="mt-4 space-y-2 text-[14px] leading-6 text-[#5f6758] md:text-[15px]">
              <li>One coupon is valid for one two-hour session only.</li>
              <li>Final scheduling depends on therapist availability.</li>
              <li>Applicable for Bangalore, Jaya Nagar bookings.</li>
            </ul>
          </div>
        </div>
      ) : null}
    </>
  );
}
