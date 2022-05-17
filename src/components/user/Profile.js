import React from "react"
import { useGlobalState } from "../../context/GlobalState";

const Profile = () => {
  const [ state, dispatch ] = useGlobalState();

  return (
    <div>
      <h1>The part of this website is still under construction. Please check back later!</h1>
    </div>
  )
}

export default Profile;