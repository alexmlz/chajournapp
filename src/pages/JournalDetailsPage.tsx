import { useState } from "react";
import useJournal from "../hooks/useJournal";
import {
  Button,
  HStack,
  Heading,
  Input,
  Stack,
  Textarea,
} from "@chakra-ui/react";
import journalService, { Journal } from "../services/journal-service";
import { useNavigate } from "react-router-dom";

const JournalDetailPage = () => {
  const { journal } = useJournal();
  const navigate = useNavigate();

  const [newJournalValue, setNewJournalValue] = useState(journal.content);
  const [newSubjectValue, setNewSubjectValue] = useState(journal.subject);

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

  let handleInputChange = (e: any) => {
    let inputValue = e.target.value;
    setNewJournalValue(inputValue);
  };
  let handleInputChangeSub = (e: any) => {
    let inputValue = e.target.value;
    setNewSubjectValue(inputValue);
  };
  return (
    <>
      <HStack justifyContent={"flex-end"}>
        <Button colorScheme="blue" onClick={() => setEdit(!edit)}>
          Edit
        </Button>
        <Button colorScheme="blue" onClick={() => handleUpdateItem()}>
          Save
        </Button>
        <Button colorScheme="red" onClick={() => handleDeleteItem(journal)}>
          Delete
        </Button>
      </HStack>
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
        <Button colorScheme="blue" onClick={() => navigate("/")}>
          Cancel
        </Button>
      </HStack>
    </>
  );
};

export default JournalDetailPage;
