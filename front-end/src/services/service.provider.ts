
import NavigatorService from './navigator.service';
import AuthService from './auth.service';
import UserService from './user.service';
import GroupService from './group.service';
<<<<<<< HEAD
import BudgetService from './budget.service';
import TransactionService from './transaction.service';

=======
>>>>>>> 71e2bf4a63e808e19a2a69c199f939aa3e7b0370

const navigatorService = new NavigatorService();
const authService = new AuthService();
const userService = new UserService();
const groupService = new GroupService();
<<<<<<< HEAD
const budgetService = new BudgetService();
const transactionService = new TransactionService();
=======
>>>>>>> 71e2bf4a63e808e19a2a69c199f939aa3e7b0370

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
<<<<<<< HEAD
    BudgetServices: (): BudgetService => {
        return budgetService;
    },
    TransactionService: (): TransactionService => {
        return transactionService;
    }
=======
>>>>>>> 71e2bf4a63e808e19a2a69c199f939aa3e7b0370
};

export default serviceProvider;
