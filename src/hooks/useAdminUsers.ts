import { useEffect, useState } from "react";
import { get } from "../services/user-service";

const useAdminUsers = (setUsers: any) => {
  useEffect(() => {
    get(setUsers);
  }, []);

  //return { users };
};

export default useAdminUsers;
