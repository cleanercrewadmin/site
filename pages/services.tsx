import { Box, Heading, Tab, Text } from 'grommet';
import styles from '../styles/services.module.css';
import { Tabs } from 'grommet';
import Map from '../components/Map';

const services = () => {
	return (
		<div className={styles.container}>
			<Box justify='center' align='center'>
				<Box
					className={styles.tabsBox}
					width='large'
					direction='row-responsive'
					round='medium'
					height='fit-content'
					gap='medium'
					justify='center'
					border={{ size: 'small', color: 'black' }}
				>
					<Tabs>
						<Tab title='Bedroom'>
							<ul className='list-disc p-10'>
								<li className='text-2xl'>
									Dusting of all furniture, doors, windows, light fixtures and
									woodwork/framing
								</li>
								<li className='text-2xl'>Polishing of mirrors/pictures</li>
								<li className='text-2xl'>Make the bed</li>
								<li className='text-2xl'>Slight organization</li>
								<li className='text-2xl'>Vacuum or sweeping and mopping</li>
							</ul>
						</Tab>
						<Tab title='Kitchen'>
							<ul className='list-disc p-10'>
                                <li className='text-xl'>Dusting all decor, wallhangings, cabinets, woodwork/framing, light fixtures, doors and windows</li>
                                <li className='text-xl'>Polishing of mirrors/pictures</li>
                                <li className='text-xl'>Scrub and disinfect the microwave and stove</li>
                                <li className='text-xl'>Disinfect and polish appliances</li>
                                <li className='text-xl'>Disinfect counters</li>
                                <li className='text-xl'>Scrub and disinfect all sinks</li>
                                <li className='text-xl'>Spot clean cabinets (this is only after a deep cabinet cleaning has been done)</li>
                                <li className='text-xl'>Vacuum or sweeping and mopping</li>
                            </ul>
						</Tab>
                        <Tab title='Bathrooms'>
                            <ul className='list-disc p-10'>
                                <li className='text-2xl'>Dusting all decor, wallhangings, cabinets, woodwork/framing, light fixtures, doors and windows</li>
                                <li className='text-2xl'>Sinks and vanities disinfected, organized, and polished</li>
                                <li className='text-2xl'>Polishing of mirrors/pictures</li>
                                <li className='text-2xl'>A deep scrubbing of the showers and tubs</li>
                                <li className='text-2xl'>Toilets cleaned inside and out, from top to bottom</li>
                                <li className='text-2xl'>Vacuum or sweeping and mopping</li>
                            </ul>
                        </Tab>
                        <Tab title='Living/Dining areas'>
                            <ul className='list-disc p-10'>
                                <li className='text-2xl'>Dusting all decor, wallhangings, cabinets, woodwork/framing, light fixtures, doors and windows</li>
                                <li className='text-2xl'>Disinfect all tabletops, counters, and wet bars</li>
                                <li className='text-2xl'>Polishing of mirrors/pictures</li>
                                <li className='text-2xl'>Vacuum or sweeping and mopping</li>
                            </ul>
                        </Tab>
						<Tab title='Deep Cleans'>
							<p className='p-3 text-2xl'>
								Having a deep clean provided on your home as a first time service is highly recommended. Deep cleanings include everything in a general cleaning, as well as the necessary add-ons to make your home as clean as it possibly can be. During your in-home quote you will be provided with suggestions that would help your home acquire a new clean sensation,  you can also request for anything to be cleaned.
							</p>
						</Tab>
					</Tabs>
				</Box>
				<Box
					margin={{ top: '1cm' }}
					border={{ size: 'medium', color: 'black' }}
					round='small'
				>
					<Map />
				</Box>
			</Box>
		</div>
	);
};

export default services;
