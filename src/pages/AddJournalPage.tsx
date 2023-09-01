import { Button, Input, Textarea, Text, HStack } from "@chakra-ui/react";
import { useState } from "react";
import journalService from "../services/journal-service";
import { useNavigate } from "react-router-dom";
import { FormattedMessage } from "react-intl";

const AddJournalPage = () => {
  const navigate = useNavigate();
  const handleAddItem = () => {
    const newJournal = {
      subject: newSubject,
      content: newContent,
    };

    journalService
      .create(newJournal)
      .then((res) => {
        navigate("/journals/" + res.data.id);
      })
      .catch((err) => {});
  };

  const [newSubject, setNewSubject] = useState("");
  const [newContent, setNewContent] = useState("");
  return (
    <>
      <HStack justifyContent={"flex-end"}>
        <Button colorScheme="blue" onClick={() => navigate("/")}>
          <FormattedMessage
            id="cancelBtnText"
            defaultMessage="Abbrechen"
          ></FormattedMessage>
        </Button>
      </HStack>

      <Text mb="8px">
        {" "}
        <FormattedMessage
          id="subjectLabelText"
          defaultMessage="Betreff"
        ></FormattedMessage>
      </Text>

      <Input
        value={newSubject}
        onChange={(e) => setNewSubject(e.target.value)}
      ></Input>
      <Text mb="8px">
        <FormattedMessage
          id="contentLabelText"
          defaultMessage="Inhalt"
        ></FormattedMessage>
      </Text>
      <Textarea
        height={window.innerHeight - 310}
        value={newContent}
        onChange={(e) => setNewContent(e.target.value)}
      ></Textarea>
      <HStack justifyContent="flex-end">
        <Button colorScheme="blue" onClick={() => handleAddItem()}>
          <FormattedMessage
            id="saveBtnText"
            defaultMessage="Speichern"
          ></FormattedMessage>
        </Button>
      </HStack>
    </>
  );
};

export default AddJournalPage;
