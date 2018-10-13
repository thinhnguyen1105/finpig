import React from 'react';
import { createStackNavigator, createSwitchNavigator } from 'react-navigation';
import { Root } from 'native-base';
import serviceProvider from '../services/service.provider';
import ScreenNames from '../screens/screen-names';
import { Login, Register, Choose, ChoosePig, Pig, MainScreen, Race, Saving, Group, GroupDetail } from '../screens';

class AppNavigator extends React.Component<any, any> {

	Stack: any = createStackNavigator(
		{
			[ScreenNames.Login]: { screen: Login },
			[ScreenNames.Register]: { screen: Register },
			[ScreenNames.Choose]: { screen: Choose },
			[ScreenNames.ChoosePig]: { screen: ChoosePig },
			[ScreenNames.Pig]: { screen: Pig },
			[ScreenNames.MainScreen]: { screen: MainScreen },
			[ScreenNames.Race]: { screen: Race },
			[ScreenNames.Saving]: { screen: Saving },
			[ScreenNames.Group]: { screen: Group },
			[ScreenNames.GroupDetail]: { screen: GroupDetail },
		},
		{
<<<<<<< HEAD
			initialRouteName: ScreenNames.MainScreen,
=======
			initialRouteName: ScreenNames.GroupDetail,
>>>>>>> 3cea9620bb1b977983505636266cab629598b76e
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
