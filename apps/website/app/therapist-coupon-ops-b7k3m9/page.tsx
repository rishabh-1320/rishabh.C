import type { Metadata } from "next";
import { Container, Section } from "@packages/ui";

export const metadata: Metadata = {
  title: "Therapist Coupon Workspace",
  description: "Private unlinked workspace page.",
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false
    }
  }
};

const redemptionRules = [
  "This coupon is valid for one two-hour therapy session.",
  "Please redeem this before confirming a slot with the therapist.",
  "Carry any required ID or contact details during booking.",
  "The session is intended for use in Bangalore, Jaya Nagar.",
  "Rescheduling or therapist availability will depend on the final booking confirmation."
];

export default function TherapistCouponWorkspacePage() {
  return (
    <>
      <span data-hide-site-header className="hidden" aria-hidden="true" />
      <Section className="min-h-screen py-6 md:py-10">
        <Container className="max-w-[920px]">
        <div className="relative mx-auto max-w-[620px]">
          <div className="relative z-10 flex flex-col items-center text-center">
            <TheraviveLogo />

            <h1
              className="mt-7 text-[28px] font-semibold tracking-[-0.03em] text-[#1f2c12] md:mt-8 md:text-[38px] md:leading-[1.04]"
              style={{ fontFamily: '"Aileron", sans-serif' }}
            >
              Redeem your coupon
            </h1>

            <p
              className="mt-3 max-w-[560px] text-[15px] leading-7 text-[#4d5546] md:text-[17px] md:leading-8"
              style={{ fontFamily: '"Aileron", sans-serif', letterSpacing: "-0.01em" }}
            >
              To avail a therapy session in Bangalore, Jaya Nagar, click to avail your coupon.
            </p>

            <div className="mt-7 w-full px-1 text-left">
              <div className="flex items-start gap-3">
                <span className="mt-0.5 text-[24px] leading-none" aria-hidden="true">
                  🎉
                </span>
                <div>
                  <p
                    className="text-[12px] font-semibold uppercase tracking-[0.14em] text-[#366d06] md:text-[13px]"
                    style={{ fontFamily: '"Aileron", sans-serif' }}
                  >
                    Session Gifted
                  </p>
                  <p
                    className="mt-2 text-[17px] leading-8 text-[#213019] md:text-[19px]"
                    style={{ fontFamily: '"Aileron", sans-serif', letterSpacing: "-0.01em" }}
                  >
                    Your therapy session of two hours has been booked by{" "}
                    <span className="font-semibold text-[#366d06]">Rishabh Choudhary</span>.
                  </p>
                </div>
              </div>
            </div>

            <p
              className="mt-5 max-w-[560px] text-[15px] leading-7 text-[#5c4732] md:text-[16px] md:leading-8"
              style={{ fontFamily: '"Aileron", sans-serif', letterSpacing: "-0.01em" }}
            >
              You just need to click <span className="font-semibold text-[#d96f09]">this</span> to redeem it and
              provide a CT and everything.
            </p>

            <a
              href="#redeem-modal"
              className="mt-5 inline-flex w-full max-w-[360px] items-center justify-center rounded-[18px] bg-[#366d06] px-5 py-3.5 text-center text-[15px] font-semibold text-white transition hover:translate-y-[-1px] hover:bg-[#2e5d05] md:text-[17px]"
              style={{ fontFamily: '"Aileron", sans-serif', letterSpacing: "-0.01em" }}
            >
              Redeem Your Coupon
            </a>

            <div className="mt-6 w-full px-1 text-left">
              <p
                className="text-[12px] font-semibold uppercase tracking-[0.14em] text-[#b6b2a6] md:text-[13px]"
                style={{ fontFamily: '"Aileron", sans-serif' }}
              >
                Redemption Rules
              </p>

              <ul className="mt-3 space-y-2.5">
                {redemptionRules.map((rule) => (
                  <li key={rule} className="flex items-start gap-3">
                    <span className="mt-2 h-2.5 w-2.5 flex-none rounded-full bg-[#cfcab9]" aria-hidden="true" />
                    <span
                      className="text-[14px] leading-7 text-[#b6b2a6] md:text-[15px]"
                      style={{ fontFamily: '"Aileron", sans-serif', letterSpacing: "-0.01em" }}
                    >
                      {rule}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <p
              className="mt-4 text-center text-[13px] leading-6 text-[#b6b2a6] md:text-sm"
              style={{ fontFamily: '"Aileron", sans-serif', letterSpacing: "-0.01em" }}
            >
              This is a standalone private page and is not linked anywhere else on the website.
            </p>
          </div>
        </div>
        </Container>
      </Section>

      <div
        id="redeem-modal"
        className="redemption-modal fixed inset-0 z-[120] flex items-center justify-center bg-black/75 px-4 py-6"
        role="dialog"
        aria-modal="true"
        aria-label="Coupon Redemption"
      >
        <a href="#" aria-label="Close overlay" className="absolute inset-0" />
        <div className="relative z-10 w-full max-w-[560px] rounded-[16px] bg-white p-4 md:p-5">
          <img
            src="/therapist-coupon/redeem-overlay.gif"
            alt="Coupon redemption preview"
            className="mt-4 h-auto max-h-[42vh] w-full rounded-[12px] object-contain"
          />
        </div>
      </div>
    </>
  );
}

function TheraviveLogo() {
  return (
    <div className="flex w-full max-w-[190px] flex-col items-center">
      <div className="flex items-end justify-center text-center leading-none">
        <span
          className="text-[28px] text-[#366d06] sm:text-[35px]"
          style={{ fontFamily: 'Georgia, "Times New Roman", serif', letterSpacing: "-0.05em" }}
        >
          thera
        </span>
        <span
          className="text-[28px] italic text-[#f47e12] sm:text-[35px]"
          style={{ fontFamily: 'Georgia, "Times New Roman", serif', letterSpacing: "-0.05em" }}
        >
          vive
        </span>
        <span
          className="mb-4 ml-1 text-[8px] font-semibold text-[#366d06] sm:mb-5"
          style={{ fontFamily: '"Aileron", sans-serif' }}
        >
          ®
        </span>
      </div>
      <p
        className="mt-1 text-center text-[8px] text-[#4d5546] sm:text-[9px]"
        style={{ fontFamily: '"Aileron", sans-serif', letterSpacing: "-0.01em" }}
      >
        100% licensed therapists. Online and in-person.
      </p>
    </div>
  );
}
