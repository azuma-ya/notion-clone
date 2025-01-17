import { useEffect, useState } from "react";

export const useOrigin = () => {
  const [mounted, setMounded] = useState(false);
  const origin =
    typeof window !== "undefined" && window.location.origin
      ? window.location.origin
      : "";

  useEffect(() => {
    setMounded(true);
  }, []);

  if (!mounted) {
    return "";
  }

  return origin;
};
