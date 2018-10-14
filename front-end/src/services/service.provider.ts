
import NavigatorService from './navigator.service';
import AuthService from './auth.service';
import UserService from './user.service';
import GroupService from './group.service';
import BudgetService from './budget.service';
import TransactionService from './transaction.service';


const navigatorService = new NavigatorService();
const authService = new AuthService();
const userService = new UserService();
const groupService = new GroupService();
const budgetService = new BudgetService();
const transactionService = new TransactionService();

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
    BudgetServices: (): BudgetService => {
        return budgetService;
    },
    TransactionService: (): TransactionService => {
        return transactionService;
    }
};

export default serviceProvider;
