import classNames from 'classnames';

export const spacer = {
  className: 'w-full h-full',
};

export const focalPointSettings = (focalPoint?: string) => {
  let objectPosition = {};
  if (focalPoint && focalPoint.includes(',')) {
    const [x, y]: string[] = focalPoint.split(',');

    objectPosition = {
      objectPosition: `${
        50 + Math.round(parseFloat(x) * 100) - 50
      }% ${Math.round(parseFloat(y) * 100)}%`,
    };
  }

  return objectPosition;
};

export const generatedSVG = (props: any) => ({
  ...props,
  className: classNames('generated-svg', [props.className]),
});
