import { useState, useEffect } from "react";

function ErrorBoundary({ children, fallback }: any) {
  const [hasError] = useState(false);

  useEffect(() => {
    if (hasError) {
      console.error("Error occurred within the ErrorBoundary");
    }
  }, [hasError]);

  if (hasError) {
    return fallback || "Something went wrong.";
  }

  return children;
}

export default ErrorBoundary;
