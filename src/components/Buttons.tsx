import ButtonsStyles from '../scss/components/Buttons.module.scss';

const btnWhite = (text: string) => {
	return (
		<button className={`${ButtonsStyles.Btn} ${ButtonsStyles.BtnWhite}`}>
			{text}
		</button>
	);
};

const btnYellow = (text: string) => {
	return (
		<button className={`${ButtonsStyles.Btn} ${ButtonsStyles.BtnYellow}`}>
			{text}
		</button>
	);
};

export { btnWhite, btnYellow };
