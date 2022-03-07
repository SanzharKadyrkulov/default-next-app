import type { NextPage } from 'next';
import MainLayout from '../app/layouts/MainLayout/MainLayout';
import Home from '../app/pages/home/Home';

const HomePage: NextPage = () => {
	return (
		<MainLayout>
			<Home />
		</MainLayout>
	);
};

export default HomePage;
