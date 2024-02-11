import { useEffect, useState } from "react";

const UserData = () => {
  const [profile, setProfile] = useState({});
  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/karthikJagadeesh/fake-chat-api/master/db.json"
    )
      .then((data) => data.json())
      .then(setProfile);
  }, []);
  return profile;
};

export default UserData;
