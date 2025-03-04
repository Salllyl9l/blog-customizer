import styles from './ArticleParamsForm.module.scss';
import clsx from 'clsx';
import { useState } from 'react';

import { Text } from '../../ui/text';
import { Select } from '../../ui/select';
import { RadioGroup } from '../../ui/radio-group';
import { Separator } from '../../ui/separator';
import { ArrowButton } from '../../ui/arrow-button';
import { Button } from '../../ui/button';

import { OnClick } from '../../ui/arrow-button/ArrowButton';

import {
	OptionType,
	fontFamilyOptions,
	fontSizeOptions,
	fontColors,
	backgroundColors,
	contentWidthArr,
	defaultArticleState,
} from 'src/constants/articleProps';
import { IAllOptions } from 'src/index';

export type ChangeSelectFn = (selection: OptionType) => void;

interface PropsArticleParamsForm {
	toggleOpenFn: OnClick;
	openState: boolean;
	setPageState: React.Dispatch<React.SetStateAction<IAllOptions>>;
}

export const ArticleParamsForm = ({
	toggleOpenFn,
	openState,
	setPageState,
}: PropsArticleParamsForm) => {
	const [formState, setFormState] = useState<IAllOptions>(defaultArticleState);

	function setDefaultOptions() {
		setFormState(defaultArticleState);
		setPageState(defaultArticleState);
	}

	function submitForm(evt: React.SyntheticEvent) {
		evt.preventDefault();
		setPageState(formState);
	}

	return (
		<>
			<ArrowButton toggleOpenFn={toggleOpenFn} openState={openState} />
			<aside
				className={clsx({
					[styles.container]: true,
					[styles.container_open]: openState,
				})}>
				<form className={styles.form} onSubmit={submitForm}>
					<Text as='h1' size={31} weight={800} uppercase dynamicLite>
						Задайте параметры
					</Text>
					<Select
						title='шрифт'
						selected={formState.fontFamilyOption}
						options={fontFamilyOptions}
						onChange={(selected) =>
							setFormState((oldState) => ({
								...oldState,
								fontFamilyOption: selected,
							}))
						}
					/>
					<RadioGroup
						title='размер шрифта'
						name='font-size'
						selected={formState.fontSizeOption}
						options={fontSizeOptions}
						onChange={(selected) =>
							setFormState((oldState) => ({
								...oldState,
								fontSizeOption: selected,
							}))
						}
					/>
					<Select
						title='цвет шрифта'
						selected={formState.fontColor}
						options={fontColors}
						onChange={(selected) =>
							setFormState((oldState) => ({ ...oldState, fontColor: selected }))
						}
					/>
					<Separator />
					<Select
						title='цвет фона'
						selected={formState.backgroundColor}
						options={backgroundColors}
						onChange={(selected) =>
							setFormState((oldState) => ({
								...oldState,
								backgroundColor: selected,
							}))
						}
					/>
					<Select
						title='ширина контента'
						selected={formState.contentWidth}
						options={contentWidthArr}
						onChange={(selected) =>
							setFormState((oldState) => ({
								...oldState,
								contentWidth: selected,
							}))
						}
					/>
					<div className={styles.bottomContainer}>
						<Button title='Сбросить' type='reset' onClick={setDefaultOptions} />
						<Button title='Применить' type='submit' />
					</div>
				</form>
			</aside>
		</>
	);
};
