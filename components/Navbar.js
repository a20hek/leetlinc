import React, { useState } from 'react';
export default function Navbar() {
	const [modal, setModal] = useState(false);
	return (
		<div className='header'>
			<p className='a20hek'>
				<a href='/#'>leetlinc</a>
			</p>
			<div className='overlay' id={modal ? 'hidden' : ''}>
				<ul className='overlay-links'>
					<li>
						<a className='ola' href='/blog'>
							Sign Up
						</a>
					</li>
					<li>
						<a className='ola' href='/work'>
							Login
						</a>
					</li>
					<li>
						<a className='ola' href='mailto:abhishek@a20hek.com'>
							Contact
						</a>
					</li>
				</ul>
			</div>
		</div>
	);
}
