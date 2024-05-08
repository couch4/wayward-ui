import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import {
  Box,
  ContentBlock,
  SmoothScroll,
  Stack,
  Text,
} from '../../../components';
import { useTransform, useMotionValueEvent, useSpring } from 'framer-motion';
import { useScrollTrigger } from '../../../components';

const meta: Meta<typeof Box> = {
  component: Box,
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Box>;

const boxStyles = {
  className: 'rounded-3xl w-40 h-40 bg-blue-500',
};

export const PlainBox: Story = {
  args: {
    ...boxStyles,
  },
};

export const AnimatedBox: Story = {
  args: {
    ...boxStyles,
    // animation props
    initial: 'inactive',
    animate: 'active',
    variants: {
      inactive: {
        x: 0,
        scale: 0,
      },
      active: {
        x: 400,
        scale: 0,
        transition: {
          repeat: Infinity,
          repeatType: 'mirror',
          type: 'spring',
          damping: 20,
          stiffness: 400,
          repeatDelay: 1,
        },
      },
    },
    whileInView: { scale: 1, transition: { duration: 1 } },
    whileHover: {
      backgroundColor: 'purple',
      borderRadius: '100%',
      transition: {
        type: 'spring',
        damping: 50,
        stiffness: 80,
      },
    },
  },
};

const data: any = {
  preHeading: 'Editorial',
  headingTitle: 'Blog Article Title',
  subHeading: '07.07.2023 &nbsp;&nbsp;&nbsp; | &nbsp;&nbsp;&nbsp; 15 minutes',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nec vestibulum eros. Curabitur ac libero malesuada, feugiat ligula quis, sodales diam. <br/><br/>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nec vestibulum eros. Curabitur ac libero malesuada, feugiat ligula quis, sodales diam. ',
  primaryCta: 'View article',
  variant: 'primary',
};

export const Section: Story = {
  args: {
    variant: 'section',
    className: 'bg-white p-6',
    children: <ContentBlock data={data} />,
  },
};

export const Header: Story = {
  args: {
    variant: 'header',
    className: 'bg-white p-6',
    children: (
      <Stack gap={10}>
        <Text text="Home" />
        <Text text="About us" />
        <Text text="Contact" />
      </Stack>
    ),
  },
};

export const Footer: Story = {
  args: {
    variant: 'footer',
    className: 'bg-white p-6',
    children: (
      <Stack gap={10}>
        <Text text="@2022 Company" />
        <Text text="Terms and conditions" />
        <Text text="Contact" />
      </Stack>
    ),
  },
};

const ProgressChild = () => {
  const { progress, inView, scrollState, motionState } = useScrollTrigger();
  const [percent, setPercent] = useState(0);

  const progressSpring = useSpring(progress, { stiffness: 100, damping: 40 });
  const x = useTransform(progressSpring, [0, 1], [0, 300]);
  const width = useTransform(progressSpring, [0, 1], [0, 600]);

  useMotionValueEvent(progress, 'change', (x: number) => {
    setPercent(Math.round(x * 100));
  });

  return (
    <Box
      initial={{ x: 0, width: 0 }}
      // @ts-ignore
      style={{ x, width }}
      className="absolute overflow-hidden left-4 top-4 rounded-3xl w-32 h-32 bg-purple-500 flex justify-center items-center text-white"
    >
      <Text text={`${percent}%`} textStyle="h1" />
    </Box>
  );
};

export const ScrollTrigger: Story = {
  args: {
    className: 'rounded-3xl w-40 h-40 bg-blue-500 relative',
    children: <ProgressChild />,
    initial: 'inactive',
    animateOnScrollDown: true,
    debug: true,
    variants: {
      inactive: {
        opacity: 0,
        scale: 0,
      },
      active: {
        opacity: 1,
        scale: 1,
      },
    },
  },
};

export const ScrollTriggerPin: Story = {
  decorators: [
    (Story) => {
      return (
        <>
          <Stack direction="column" className="py-[1000px]">
            <Story />
          </Stack>
          <SmoothScroll />
        </>
      );
    },
  ],
  args: {
    className: 'rounded-3xl w-40 h-40 bg-blue-500 relative',
    children: <ProgressChild />,
    onLeaveBack: 'active',
    scrollTrigger: {
      pin: true,
      start: 'top center',
      end: '+=400',
    },
    debug: true,
  },
};
