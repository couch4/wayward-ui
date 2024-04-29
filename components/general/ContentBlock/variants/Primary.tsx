import { FC } from 'react';
import {
  contentBlockVars,
  renderButton,
  renderText,
  contentInfoTags,
  preContent,
} from '../ContentBlock.styles';
import { ContentBlockContentProps } from '../ContentBlock.types';
import { ButtonGroup, Stack, Text } from '../../../../components';
import { emptyContentBlockAnim } from '../../../../theme/motion';

const PrimaryContentBlock: FC<ContentBlockContentProps> = ({
  variant,
  className,
  data,
  motion = emptyContentBlockAnim,
  richText = false,
  ...props
}) => {
  const allProps = {
    ...contentBlockVars(variant, motion, className),
    ...props,
  };

  const infoTags =
    data?.infoTags && Array.isArray(data?.infoTags) ? data?.infoTags : [];

  const renderTags = infoTags.map((val, i: number) => {
    return <Text key={`infotag${i}`} text={val} {...renderText('infoTag')} />;
  });

  const heading =
    data?.title || data?.headingTitle?.heading || data?.headingTitle || '';
  const htag = data?.headingTitle?.htag
    ? { htag: data?.headingTitle?.htag }
    : {};

  const hasButtons = data?.primaryCta || data?.secondaryCta || data?.cta;
  const primaryCta = data?.primaryCta || data?.cta || {};
  const shareData = data?.sharingLinksModel || {};

  return (
    <Stack direction="column" {...allProps}>
      <Stack direction="row" {...preContent(motion?.preContent)}>
        <Text text={data?.tag} {...renderText('tag')} />
        <Text text={data?.preHeading} {...renderText('preHeading')} />
        <Stack {...contentInfoTags(motion?.infoTags)}>{renderTags}</Stack>
      </Stack>
      <Text text={heading} {...htag} {...renderText('headingTitle')} />
      <Text
        text={data?.subHeading || data?.subheading}
        {...renderText('subHeading')}
      />
      <Text text={data?.bodyCopy} rich={richText} {...renderText('bodyCopy')} />
      {hasButtons && (
        <ButtonGroup
          primaryProps={{
            ...renderButton('primaryCta'),
            ...primaryCta,
          }}
          secondaryProps={{
            ...renderButton('secondaryCta'),
            ...data?.secondaryCta,
          }}
          {...shareData}
        />
      )}
    </Stack>
  );
};

export default PrimaryContentBlock;
