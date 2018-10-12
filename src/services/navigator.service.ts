import { NavigationActions, NavigationParams, NavigationRoute, NavigationContainerComponent, NavigationContainer } from 'react-navigation';

export default class NavigatorService {
    container?: NavigationContainerComponent & NavigationContainer;

    setContainer = (container: NavigationContainerComponent & NavigationContainer): void => {
        this.container = container;
    }

    getContainer = (container: NavigationContainerComponent & NavigationContainer): any  => {
        return container;
    }

    navigate = (routeName: string, params?: NavigationParams): void => {
        if (this.container) {
            this.container.dispatch(
                NavigationActions.navigate({
                    routeName,
                    params,
                }),
            );
        }
    }

    getCurrentRoute(): NavigationRoute | null {
        if (!this.container || !this.container.state.nav) {
            return null;
        }
        return this.container.state.nav.routes[this.container.state.nav.index] || null;
    }

}
