import { useSelector } from 'react-redux';
import { User, UserState } from '../models/User';
import { ApplicationState } from '../store';

const useAuth = (): [boolean, User] => {
  const authState = useSelector<ApplicationState, UserState>(state => state.auth);

  if (authState.authenticated) return [true, authState.user];
  else return [false, { name: '', email: '' }];
};

export { useAuth };
