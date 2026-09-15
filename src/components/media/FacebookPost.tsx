"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    FB?: { XFBML: { parse: (el?: HTMLElement) => void } };
  }
}

export default function FacebookPost({ href }: { href: string }) {
  useEffect(() => {
    const parse = () => window.FB?.XFBML.parse();
    if (window.FB) {
      parse();
      return;
    }
    if (!document.getElementById("facebook-jssdk")) {
      const script = document.createElement("script");
      script.id = "facebook-jssdk";
      script.src = "https://connect.facebook.net/zh_HK/sdk.js#xfbml=1&version=v21.0";
      script.async = true;
      script.defer = true;
      script.onload = parse;
      document.body.appendChild(script);
    }
  }, [href]);

  return (
    <div className="overflow-hidden rounded-2xl border border-stone-200 bg-white p-3">
      <div id="fb-root" />
      <div className="fb-post" data-href={href} data-width="auto" data-show-text="true" />
      <p className="mt-3 text-sm text-stone-500">
        <a href={href} target="_blank" rel="noopener noreferrer" className="text-brand-700 hover:underline">
          若帖文無法顯示，請直接到 Facebook 架架閱讀 →
        </a>
      </p>
    </div>
  );
}
