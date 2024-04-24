import type { Meta, StoryObj } from '@storybook/react';
import { Box, ContentBlock, Stack, Text } from '../../../components';

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
