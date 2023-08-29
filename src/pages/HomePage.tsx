import { useState } from "react";
import useUsers from "../hooks/useUsers";
import { Grid, GridItem, Show } from "@chakra-ui/react";
import JournalGrid from "../components/JournalGrid";
import Login from "../components/Login";
import Register from "../components/Register";

const HomePage = () => {
  const [currentUser, setCurrentUser] = useState();
  const { isLoggedIn } = useUsers();
  const RegisterLogin = ({ setUser }: any) => {
    if (isLoggedIn || currentUser)
      return (
        <Grid
          templateAreas={{
            base: `"main"`,
            lg: `"main"`,
            //lg: `"aside main"`,
            //not sure if we need master detail for this one
          }}
        >
          {/*           <Show above="lg">
            <GridItem area="aside">Aside</GridItem>
          </Show> */}
          <GridItem area="main">
            <JournalGrid></JournalGrid>
          </GridItem>
        </Grid>
      );

    return (
      <div className="register-login">
        <Login setUser={setUser} setCurrentUser={setCurrentUser} />
        <p>If you do not have an account yet, please register!</p>
        <Register setUser={setUser} setCurrentUser={setCurrentUser} />
      </div>
    );
  };

  return (
    <div>
      <RegisterLogin></RegisterLogin>
    </div>
  );
};

export default HomePage;
