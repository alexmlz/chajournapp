import { useEffect, useState } from "react";
import { getUser } from "../services/user-service";
import { useNavigate } from "react-router-dom";

const useUsers = () => {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    getUser(navigate);
  }, []);

  return { isLoggedIn, setLoggedIn };
};

export default useUsers;
