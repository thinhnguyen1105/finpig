import React from 'react';
import { createStackNavigator, createSwitchNavigator } from 'react-navigation';
import { Root } from 'native-base';
import serviceProvider from '../services/service.provider';
import ScreenNames from '../screens/screen-names';
<<<<<<< HEAD
import { Login } from '../screens';
=======
import { Test1, Test2, Register } from '../screens';
>>>>>>> 2269228377f465aede0c142e7c978d91c6260a63

class AppNavigator extends React.Component<any, any> {

	Stack: any = createStackNavigator(
		{
<<<<<<< HEAD
			[ScreenNames.Login]: { screen: Login },
		},
		{
			initialRouteName: ScreenNames.Login,
=======
			[ScreenNames.Test1]: { screen: Test1 },
			[ScreenNames.Test2]: { screen: Test2 },
			[ScreenNames.Register]: { screen: Register },
		},
		{
			initialRouteName: ScreenNames.Register,
>>>>>>> 2269228377f465aede0c142e7c978d91c6260a63
			headerMode: 'none'
		}
	);

	constructor(props: any) {
		super(props);
		this.state = {
		};
	}

	render(): React.ReactNode {
		return (
			<Root style={{ position: 'relative' }}>
				<this.Stack ref={(navigatorRef: any) => {
					serviceProvider.NavigatorService().setContainer(navigatorRef);
				}}
				/>
			</Root>
		);
	}
}

export default (AppNavigator);
