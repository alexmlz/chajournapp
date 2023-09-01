import {
  Button,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import { useState } from "react";
import { FormattedMessage } from "react-intl";

function Error({ errors, inputType }: any) {
  if (errors) {
    return <div className="error">{errors[inputType]}</div>;
  }
  return null;
}

function FormInput({ input, setInput, inputType, errors }: any) {
  const [show, setShow] = useState(false);

  const handleChange = (newValue: string) => {
    setInput({
      ...input,
      [inputType]: newValue,
    });
  };

  const handleClick = () => setShow(!show);
  return (
    <>
      {inputType === "password" ? (
        <FormControl size="md">
          <FormLabel>{inputType}</FormLabel>
          <InputGroup>
            <Input
              type={show ? "text" : "password"}
              value={input[inputType]}
              onChange={(e) => handleChange(e.target.value)}
            />
            <InputRightElement width="4.5rem">
              <Button h="1.75rem" size="sm" onClick={handleClick}>
                {show ? (
                  <FormattedMessage id="showBtnText"></FormattedMessage>
                ) : (
                  <FormattedMessage id="hideBtnText"></FormattedMessage>
                )}
              </Button>
            </InputRightElement>
          </InputGroup>
          <Error errors={errors} inputType={inputType} />
        </FormControl>
      ) : (
        <FormControl size="md">
          <FormLabel>{inputType}</FormLabel>

          <Input
            type={inputType}
            value={input[inputType]}
            onChange={(e) => handleChange(e.target.value)}
          />
        </FormControl>
      )}
    </>
  );
}

function FormInputs({ input, setInput, errors }: any) {
  return (
    <>
      {/*  <RemainingErrors errors={errors} input={input} /> */}
      {Object.keys(input).map((type, key) => (
        <FormInput
          key={key}
          input={input}
          setInput={setInput}
          inputType={type}
          errors={errors}
        />
      ))}
    </>
  );
}

export default FormInputs;
