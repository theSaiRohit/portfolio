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

const sendConsent = (analytics: boolean) => {
  window.optimeleon?.("consent", { analytics });
};

export default function ConsentModal() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    let stored: string | null = null;
    try {
      stored = localStorage.getItem(CONSENT_KEY);
    } catch {
      // localStorage unavailable — leave the modal closed
      return;
    }

    if (stored === null) {
      setOpen(true);
      return;
    }

    // Returning visitor: replay their saved choice so opt-outs stick.
    try {
      sendConsent(Boolean(JSON.parse(stored)?.analytics));
    } catch {
      setOpen(true);
    }
  }, []);

  const decide = (analytics: boolean) => {
    sendConsent(analytics);
    try {
      localStorage.setItem(CONSENT_KEY, JSON.stringify({ analytics }));
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
