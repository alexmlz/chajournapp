import { Button, Input, Textarea, Text, HStack, SimpleGrid, Spacer } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import journalService from "../services/journal-service";
import { useNavigate } from "react-router-dom";
import { FormattedMessage } from "react-intl";
import questionService from "../services/question-service";


const AddJournalPage = () => {
  const [newSubject, setNewSubject] = useState("");
  const [newContent, setNewContent] = useState("");
  const [question, setQuestion] = useState("");
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

  const handleQuestionBtnPress = () => {
    questionService.getSingle().then((res) => {
      setQuestion(res.data.question)
    });
  };
  useEffect(() => {
    handleQuestionBtnPress();
  },[]);

  return (
    <>
        <SimpleGrid columns={{ sm: 1, md: 1, lg: 4, xl:4 }} spacing={5}>
      <Button size="xs" colorScheme="blue" onClick={() =>  handleQuestionBtnPress()}>
          <FormattedMessage
            id="questionBtnText"
            defaultMessage="Neue Frage"
          ></FormattedMessage>
        </Button>
        <Text>{question}</Text>
        <Spacer></Spacer>
        <Button size="xs" colorScheme="blue" onClick={() => navigate("/")}>
          <FormattedMessage
            id="cancelBtnText"
            defaultMessage="Abbrechen"
          ></FormattedMessage>
        </Button>
      </SimpleGrid>


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
        <Button size="xs" colorScheme="blue" onClick={() => handleAddItem()}>
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
