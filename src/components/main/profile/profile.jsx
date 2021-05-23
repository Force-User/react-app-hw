import Home from "./home";
import About from "./about";

const Profile = ({fullName,position,info}) => {
  return (
    <>
      <Home fullName={fullName} position={position} />
      <About info={info}/>
    </>
  );
};

export default Profile;
