import { useState } from "react";
import { register } from "../services/user-service.js";
import FormInputs from "../common/FormInputs.js";
import { useNavigate } from "react-router-dom";
import { Box, Button, Text, FormControl, HStack } from "@chakra-ui/react";
function Register({ setCurrentUser }: any) {
  const [newUser, setNewUser] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState(null);
  const [isError, setIsError] = useState(false);

  const navigate = useNavigate();
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      register(newUser, navigate, setErrors, setIsError);
      //setUser(response.data);
      //setCurrentUser(true);
    } catch (ex: any) {
      if (ex.response && ex.response.status === 400) {
        setErrors(ex.response.data);
      }
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <FormControl>
          <FormInputs input={newUser} setInput={setNewUser} errors={errors} />

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

export default Register;
