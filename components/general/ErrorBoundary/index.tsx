import { useState, useEffect } from 'react';

function ErrorBoundary({
  children,
  fallback = <div>Error thrown in boundary</div>,
}: any) {
  const [hasError] = useState(false);

  useEffect(() => {
    if (hasError) {
      console.log('Error occurred within the ErrorBoundary');
    }
  }, [hasError]);

  if (hasError) {
    return fallback;
  }

  return children;
}

export default ErrorBoundary;
