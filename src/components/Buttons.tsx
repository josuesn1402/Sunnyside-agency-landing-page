import ButtonsStyles from '../scss/components/Buttons.module.scss';

const BtnWhite = (text: string) => {
	return (
		<button className={`${ButtonsStyles.Btn} ${ButtonsStyles.BtnWhite}`}>
			{text}
		</button>
	);
};

const BtnYellow = (text: string) => {
	return (
		<button className={`${ButtonsStyles.Btn} ${ButtonsStyles.BtnYellow}`}>
			{text}
		</button>
	);
};

export { BtnWhite, BtnYellow };
