// components/AdSense.tsx
"use client";

import Script from "next/script";

interface AdSenseProps {
  adSlot: string;
  className?: string;
}

const AdSense: React.FC<AdSenseProps> = ({ adSlot = "1234567890", className = "" }) => {
  return (
    <>
      <ins
        className={`adsbygoogle ${className}`}
        style={{ display: "block" }}
        data-ad-client="ca-pub-8893595624599413"
        data-ad-slot={adSlot}
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
      <Script id={`adsbygoogle-${adSlot}`} strategy="afterInteractive">
        {`(adsbygoogle = window.adsbygoogle || []).push({});`}
      </Script>
    </>
  );
};

export default AdSense;