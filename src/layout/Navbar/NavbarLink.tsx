const NavBarLink = (link: string) => {
	return (
		<div className='NavLink'>
			<a href='/'>{link}</a>
		</div>
	);
};

const NavMobileLink = (link: string) => {
	return (
		<div className='NavMobileLink'>
			<a href='/'>{link}</a>
		</div>
	);
};

export { NavBarLink, NavMobileLink };
