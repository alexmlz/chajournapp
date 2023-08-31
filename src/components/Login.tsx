import { useState } from "react";
import { login } from "../services/user-service.js";
import FormInputs from "../common/FormInputs.js";
import { useNavigate } from "react-router-dom";
import {
  Button,
  FormControl,
  FormHelperText,
  HStack,
  Text,
} from "@chakra-ui/react";
function Login({ setCurrentUser }: any) {
  const [loginUser, setLoginUser] = useState({
    username: "",
    password: "",
  });
  const navigate = useNavigate();
  const [errors, setErrors] = useState(null);
  const [isError, setIsError] = useState(false);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      login(loginUser, navigate, setErrors, setIsError);
    } catch (ex: any) {
      if (ex.response && ex.response.status === 400) {
        setErrors(ex.response.data);
        setCurrentUser(false);
      }
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <FormControl>
          <FormInputs
            input={loginUser}
            setInput={setLoginUser}
            errors={errors}
          />
          <Button colorScheme="blue" type="submit" width={"full"}>
            Send
          </Button>
          {isError && (
            <HStack>
              <Text fontSize="2xl" color={"red"}>
                {errors}
              </Text>
            </HStack>
          )}
        </FormControl>
      </form>
    </>
  );
}

export default Login;
