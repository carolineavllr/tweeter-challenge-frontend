import React, { useState, useEffect } from "react";
import { Header } from "../components/common/Header";
import { Profile } from "../components/perfil/Profile";
import { WrapperTweets } from "../components/perfil/WrapperTweets";

export const Perfil = () => {
  const [profile, setProfile] = useState()

  useEffect(() => {
    getProfile().then(setProfile);
  }, [])

  return (
  <div>
    <Header
      image="https://media.licdn.com/dms/image/D4D03AQHW8bt9a_IIQg/profile-displayphoto-shrink_800_800/0/1672161594075?e=1678320000&v=beta&t=aiU9eb-a6BMJIGgHvmLqC9qF8mcvssZLWedfgewdkgw"
      name="Yuri Souza"
    />
    <Profile
      profile={profile}
    />
    <WrapperTweets
      profile={profile}
    />
  </div>
)}

const getProfile = () => (
  fetch('https://63bb56d832d17a50908d4371.mockapi.io/twetter/perfil')
  .then((response) => response.json())
  .then((result) => result[0])
)