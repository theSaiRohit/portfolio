import {
  consentAcceptCss,
  consentActionsCss,
  consentBtnBaseCss,
  consentDeclineCss,
  consentModalCss,
  consentTextCss,
} from "@/components/consent-modal/styles";
import { useEffect, useState } from "react";

const CONSENT_KEY = "opti_consent";

export default function ConsentModal() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    try {
      if (localStorage.getItem(CONSENT_KEY) === null) setOpen(true);
    } catch {
      // localStorage unavailable — leave the modal closed
    }
  }, []);

  const decide = (statistics: boolean) => {
    if (typeof window.setOptiCookieConsent === "function") {
      window.setOptiCookieConsent({ statistics });
    }
    try {
      localStorage.setItem(CONSENT_KEY, JSON.stringify({ statistics }));
    } catch {
      // ignore persistence failures
    }
    setOpen(false);
  };

  if (!open) return null;

  return (
    <div css={consentModalCss} role="dialog" aria-live="polite" aria-label="Cookie consent">
      <p css={consentTextCss}>
        This site uses cookies to understand how it&apos;s used. Accept to allow analytics, or
        decline to opt out.
      </p>
      <div css={consentActionsCss}>
        <button
          type="button"
          css={[consentBtnBaseCss, consentDeclineCss]}
          onClick={() => decide(false)}
        >
          Decline
        </button>
        <button
          type="button"
          css={[consentBtnBaseCss, consentAcceptCss]}
          onClick={() => decide(true)}
        >
          Accept
        </button>
      </div>
    </div>
  );
}
