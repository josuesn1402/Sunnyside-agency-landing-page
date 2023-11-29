import { BtnYellow } from '../../components/Buttons';

const NavMobile = () => {
	return (
		<div className='NavMobile'>
			<div className='NavMobileContent'>
				<div className='NavMobileLink'>
					<div className='About'>About</div>
				</div>
				<div className='NavMobileLink'>
					<div className='About'>Services</div>
				</div>
				<div className='NavMobileLink'>
					<div className='About'>Projects</div>
				</div>
				<BtnYellow text='CONTACT'></BtnYellow>
			</div>
		</div>
	);
};

export default NavMobile;
