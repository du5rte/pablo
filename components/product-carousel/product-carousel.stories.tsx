import type { Meta, StoryObj } from '@storybook/react';
import product from '@/mocks/product-en-usd.json';

import { ProductCarousel } from './product-carousel';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<typeof ProductCarousel> = {
  title: 'Product/ProductCarousel',
  component: ProductCarousel,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    // backgroundColor: { control: 'color' },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: {
    // onPress: fn()
    data: product.mediaGallery,
  },
};

export default meta;

type Story = StoryObj<typeof ProductCarousel>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {
    // children: 'Press me',
  },
};
