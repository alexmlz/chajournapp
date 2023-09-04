import React, { useState } from "react";
import useAdminUsers from "../hooks/useAdminUsers";
import {
  List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
} from "@chakra-ui/react";

const AdminPage = () => {
  const [users, setUsers] = useState([]);
  useAdminUsers(setUsers);
  return (
    <UnorderedList>
      {users.map((user: any) => (
        <ListItem>
          {user.username} {user.date_joined} {user.is_superuser.toString()}
        </ListItem>
      ))}
      ;
    </UnorderedList>
  );
};

export default AdminPage;
