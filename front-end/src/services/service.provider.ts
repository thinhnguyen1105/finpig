
import NavigatorService from './navigator.service';
import AuthService from './auth.service';
import UserService from './user.service';

const navigatorService = new NavigatorService();
const authService = new AuthService();
const userService = new UserService();

const serviceProvider = {
    NavigatorService: (): NavigatorService => {
        return navigatorService;
    },
    AuthService: (): AuthService => {
        return authService;
    },
    UserService: (): UserService => {
        return userService;
    },
};

export default serviceProvider;
