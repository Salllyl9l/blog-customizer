import type { Meta, Story } from '@storybook/react';
import { useState } from 'react';

import { ArrowButton } from './ArrowButton';

const meta: Meta<typeof ArrowButton> = {
	component: ArrowButton,
};

export default meta;

const Template: Story = (args) => {
	const [isOpen, setIsOpen] = useState<boolean>(false);

	function toggleOpen() {
		setIsOpen((oldVal) => !oldVal);
	}

	return <ArrowButton toggleOpenFn={toggleOpen} openState={isOpen} {...args} />;
};

export const ArrowButtonStory = Template.bind({});
ArrowButtonStory.args = {};
