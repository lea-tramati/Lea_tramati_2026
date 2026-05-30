import { useEffect } from "react";

export function usePageTitle(title?: string) {
  useEffect(() => {
    document.title = title ? `${title} — Léa Tramati` : "Léa Tramati";
    return () => { document.title = "Léa Tramati"; };
  }, [title]);
}
