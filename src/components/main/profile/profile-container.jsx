import { useSelector } from 'react-redux';
import Profile from './profile';

const ProfileContainer = () => {
	const profile = useSelector(state => state.profile)
	return <Profile {...profile} />;
};

export default ProfileContainer;
