
import NavigatorService from './navigator.service';

const navigatorService = new NavigatorService();

const serviceProvider = {
    NavigatorService: (): NavigatorService => {
        return navigatorService;
    },
};

export default serviceProvider;
