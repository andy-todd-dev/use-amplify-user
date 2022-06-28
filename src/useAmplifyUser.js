import { Auth } from "@aws-amplify/auth";
import { Hub } from "@aws-amplify/core";
import { useEffect, useState } from "react";

const useAmplifyUser = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    Auth.currentAuthenticatedUser().then((user) => setUser(user));
  }, []);

  Hub.listen("auth", (data) => {
    switch (data.payload.event) {
      case "signIn":
        setUser(data.payload.user);
        break;
      case "signOut":
        setUser(null);
        break;
      default:
        break;
    }
  });

  return {
    user,
    userIsLoggedIn: user !== null,
  };
};

export default useAmplifyUser;
