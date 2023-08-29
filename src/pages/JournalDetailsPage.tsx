import { useState } from "react";
import useJournal from "../hooks/useJournal";
import { Button, Heading, Input, Textarea } from "@chakra-ui/react";
import journalService, { Journal } from "../services/journal-service";

const JournalDetailPage = () => {
  const { journal } = useJournal();

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
      <Heading fontSize="2xl">
        <Textarea
          maxLength={50}
          isReadOnly={edit}
          defaultValue={defaultSubjectValue}
          value={newSubjectValue}
          onChange={(e) => handleInputChangeSub(e)}
        ></Textarea>
      </Heading>
      <Textarea
        isReadOnly={edit}
        defaultValue={defaultValue}
        value={newJournalValue}
        onChange={handleInputChange}
        size={"lg"}
      ></Textarea>
      <Button onClick={() => setEdit(!edit)}>Edit</Button>

      <Button onClick={() => handleUpdateItem()}>Save</Button>
    </>
  );
};

export default JournalDetailPage;
