
import NavigatorService from './navigator.service';
import AuthService from './auth.service';
import UserService from './user.service';
import GroupService from './group.service';

const navigatorService = new NavigatorService();
const authService = new AuthService();
const userService = new UserService();
const groupService = new GroupService();

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
    GroupService: (): GroupService => {
        return groupService;
    },
};

export default serviceProvider;
