// app/page.tsx
import Script from "next/script";
import AdSense from "../../components/AdSense";
import HomePage from "../../components/HomePage";

const Page = () => {
  return (
    <div>
      
      <HomePage />

      {/* Google AdSense Ad Unit */}
      <AdSense adSlot="9546412401" />
      <div className="my-4 text-center">
        <ins
          className="adsbygoogle"
          style={{ display: "block" }}
          data-ad-client="ca-pub-8893595624599413"
          data-ad-slot="9546412401"
          data-ad-format="auto"
          data-full-width-responsive="true"
        />
      </div>
      <Script id="adsbygoogle-init" strategy="afterInteractive">
        {`(adsbygoogle = window.adsbygoogle || []).push({});`}
      </Script>
    </div>
  );
};

export default Page;