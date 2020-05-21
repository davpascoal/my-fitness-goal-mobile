import HomeScreen from './screens/home';
import WorkoutsScreen from './screens/workouts';

interface Router {}

const Router = [
  {
    name: 'Home',
    component: HomeScreen,
    icon: 'home-outline',
  },
  {
    name: 'Workouts',
    component: WorkoutsScreen,
    icon: 'timer',
  },
];

export default Router;
