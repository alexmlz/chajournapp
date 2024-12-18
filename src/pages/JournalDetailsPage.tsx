import { useEffect, useState } from "react";
import useJournal from "../hooks/useJournal";
import { Button, HStack, Spacer , Heading, Textarea, Text, SimpleGrid } from "@chakra-ui/react";
import journalService, { Journal } from "../services/journal-service";
import questionService from "../services/question-service";
import { useNavigate } from "react-router-dom";
import { FormattedMessage } from "react-intl";

const JournalDetailPage = () => {
  const { journal } = useJournal();
  const navigate = useNavigate();

  const [newJournalValue, setNewJournalValue] = useState(journal.content);
  const [newSubjectValue, setNewSubjectValue] = useState(journal.subject);
  const [question, setQuestion] = useState("");
  const [edit, setEdit] = useState(true);
  let defaultValue = journal.content;
  let defaultSubjectValue = journal.subject;
  const handleUpdateItem = () => {
    const updateJournal = {
      ...journal,
      content: newJournalValue || defaultValue,
      subject: newSubjectValue || defaultSubjectValue,
    };
    journalService
      .update(updateJournal)
      .then((res) => {
        setNewJournalValue(res.data.content);
      })
      .catch((err) => {
        setNewJournalValue(journal.content);
      });
  };

  const handleDeleteItem = (journal: Journal) => {
    journalService.delete(journal.id).then(() => {
      navigate("/journals");
    });
  };

  const handleQuestionBtnPress = () => {
    questionService.getSingle().then((res) => {
      setQuestion(res.data.question)
    });
  };

  let handleInputChange = (e: any) => {
    let inputValue = e.target.value;
    setNewJournalValue(inputValue);
  };
  let handleInputChangeSub = (e: any) => {
    let inputValue = e.target.value;
    setNewSubjectValue(inputValue);
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
      <Heading fontSize="2xl">
        <Textarea
          maxLength={50}
          isDisabled={edit}
          defaultValue={defaultSubjectValue}
          value={newSubjectValue}
          onChange={(e) => handleInputChangeSub(e)}
        ></Textarea>
      </Heading>
      <Textarea
        height={window.innerHeight - 300}
        isDisabled={edit}
        defaultValue={defaultValue}
        value={newJournalValue}
        onChange={handleInputChange}
        size={"lg"}
      ></Textarea>

      <HStack justifyContent={"flex-end"}>
        <Button size="xs" colorScheme="red" onClick={() => handleDeleteItem(journal)}>
          <FormattedMessage
            id="deleteBtnText"
            defaultMessage="Löschen"
          ></FormattedMessage>
        </Button>
        <Button size="xs" colorScheme="blue" onClick={() => setEdit(!edit)}>
          <FormattedMessage
            id="editBtnText"
            defaultMessage="Ändern"
          ></FormattedMessage>
        </Button>
        <Button size="xs" colorScheme="blue" onClick={() => handleUpdateItem()}>
          <FormattedMessage
            id="saveBtnText"
            defaultMessage="Speichern"
          ></FormattedMessage>
        </Button>
      </HStack>
    </>
  );
};

export default JournalDetailPage;
