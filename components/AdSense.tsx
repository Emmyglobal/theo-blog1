"use client";

import { useEffect, useRef, useState } from "react";

interface AdSenseProps {
  adSlot: string;
  className?: string;
}

const AdSense: React.FC<AdSenseProps> = ({ adSlot, className = "" }) => {
  const adRef = useRef<HTMLDivElement>(null);
  const [loadAd, setLoadAd] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setLoadAd(true);
          observer.disconnect();
        }
      },
      { rootMargin: "100px", threshold: 0.1 }
    );

    if (adRef.current) {
      observer.observe(adRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (loadAd && typeof window !== "undefined") {
      try {
        // eslint-disable-next-line @typescript-eslint/no-unused-expressions
        const w = window as any;

        if (!w.adsbygoogle) {
          w.adsbygoogle = [];
        }
        w.adsbygoogle.push({});
      } catch (e) {
        console.error("AdSense error:", e);
      }
    }
  }, [loadAd]);

  return (
    <div ref={adRef} className={`my-4 text-center ${className}`}>
      {loadAd && (
        <>
          <ins
            className="adsbygoogle"
            style={{ display: "block" }}
            data-ad-client="ca-pub-8893595624599413"
            data-ad-slot={adSlot}
            data-ad-format="auto"
            data-full-width-responsive="true"
          />
          {/* eslint-disable-next-line @typescript-eslint/no-unused-expressions */}
          <script
            id={`adsbygoogle-${adSlot}`}
            dangerouslySetInnerHTML={{
              __html: `(window.adsbygoogle = window.adsbygoogle || []).push({});`,
            }}
          />
        </>
      )}
    </div>
  );
};

export default AdSense;