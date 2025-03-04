import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';

import { ArrowButton } from './ArrowButton';

const meta: Meta<typeof ArrowButton> = {
	component: ArrowButton,
};

export default meta;

type Story = StoryObj<typeof ArrowButton>;

const ArrowButtonStory: Story = () => {
	const [isOpen, setIsOpen] = useState<boolean>(false);

	function toggleOpen() {
		setIsOpen((oldVal) => !oldVal);
	}

	return (
		<>
			<ArrowButton toggleOpenFn={toggleOpen} openState={isOpen} />
		</>
	);
};

export { ArrowButtonStory };
