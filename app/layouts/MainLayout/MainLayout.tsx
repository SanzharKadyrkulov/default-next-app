import React, { FC } from 'react';
import Header from '../../components/Header';

const MainLayout: FC = ({ children }) => {
	return (
		<>
			<Header />
			<div>{children}</div>
		</>
	);
};

export default MainLayout;
