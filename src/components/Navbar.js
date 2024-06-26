import React, { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';

const Navbar = () => {
	const [open, setOpen] = useState(false);

	const handleClick = () => {
		setOpen(!open);
	};

	const closeMenu = () => {
		setOpen(open);
	};

	return (
		<nav className="navbar">
			<div to="/" className="nav-logo">
				SMARG
			</div>
			<div onClick={handleClick} className="nav-icon">
				{open ? <FiX className='fix' /> : <FiMenu className='fix' />}
			</div>
			<ul className={open ? 'nav-links active' : 'nav-links'}>
				<li className="nav-item">
					<div to="/" className="nav-link" onClick={closeMenu}>
						Home
					</div>
				</li>
				<li className="nav-item">
					<div to="/about" className="nav-link" onClick={closeMenu}>
						About
					</div>
				</li>
				<li className="nav-item">
					<div to="/shop" className="nav-link" onClick={closeMenu}>
						Service
					</div>
				</li>
                <li className="nav-item">
					<div to="/shop" className="nav-link" onClick={closeMenu}>
						Skills
					</div>
				</li>
                <li className="nav-item">
					<div to="/shop" className="nav-link" onClick={closeMenu}>
						Teams
					</div>
				</li>
				<li className="nav-item">
					<div to="/contact" className="nav-link" onClick={closeMenu}>
						Contact
					</div>
				</li>
			</ul>
		</nav>
	);
};

export default Navbar;
