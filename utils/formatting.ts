export const capitalise = (str?: string) => {
  if (!str) return null;
  return str.charAt(0).toUpperCase() + str.slice(1);
};

export const camelToHyphen = (str: string) => {
  return str
    .replace(/([a-z])([A-Z])/g, '$1-$2')
    .replace(/([A-Z])([A-Z][a-z])/g, '$1-$2')
    .toLowerCase();
};

export const getFormattedValue = (value: number, type: string) => {
  if (type === 'leadingZeroNumbers') {
    return value < 9 ? `0${value + 1}` : value + 1;
  }
  return value + 1;
};

export const secondsToHMS = (seconds: number) => {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const remainingSeconds = Math.round(seconds % 60);

  if (!seconds) return '00:00';

  if (seconds < 3600) {
    return (
      `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}` ||
      '00:00'
    );
  }

  return (
    `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}` ||
    '00:00:00'
  );
};
