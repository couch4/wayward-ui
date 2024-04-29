'use server';
import { stripQueryString } from '../../../utils';
// @ts-ignore
import mofConfig from '/mofConfig';

export const getBase64 = async (
  imagePath: string,
  imageHeight?: any,
  focalPoint?: any,
) => {
  'use server';

  const imageUrl = imagePath.includes('http')
    ? imagePath
    : `${process.env.IMAGE_PROCESSOR_URL}${stripQueryString(imagePath, true)}`;

  const hasFocalPoint = focalPoint ? `&rxy=${focalPoint}` : '';
  const hasHeight = imageHeight ? `&height=${imageHeight}` : '';
  const isCDNDisabled = mofConfig?.images?.disableCDNOptimisation || false;
  const headers = mofConfig?.headers || {};
  const params = isCDNDisabled
    ? '?width=300&quality=10'
    : `?width=300&quality=10${hasFocalPoint}${hasHeight}`;

  try {
    return await fetch(`${imageUrl}${params}`, headers)
      .then((res: any) => {
        try {
          if (res.status === 200) {
            return res.arrayBuffer();
          }
        } catch (error) {
          return null;
        }
      })
      .then((arrayBuffer: ArrayBuffer) => {
        return `data:image/jpeg;base64,${arrayBufferToBase64(arrayBuffer)}`;
      });
  } catch (error: unknown) {
    console.log('failed to fetch blurURL', error);
    return null;
  }
};

function arrayBufferToBase64(arrayBuffer: any) {
  const uint8Array = new Uint8Array(arrayBuffer);
  let binaryString = '';
  for (let i = 0; i < uint8Array.length; i++) {
    binaryString += String.fromCharCode(uint8Array[i]);
  }
  return btoa(binaryString);
}
