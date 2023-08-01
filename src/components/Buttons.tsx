import ButtonsStyles from '../scss/components/Buttons.scss';

const btnWhite = text => {
	return (
		<button clasName={ButtonsStyles.Btn ButtonsStyles.BtnWhite}>{text}</button>
	);
}

const btnYellow = text => {
	return (
		<button clasName={ButtonsStyles.Btn ButtonsStyles.BtnYellow}>{text}</button>
	);
}