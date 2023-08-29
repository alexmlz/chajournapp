import { useState } from "react";
import useJournal from "../hooks/useJournal";
import { Button, Heading, Textarea } from "@chakra-ui/react";
import journalService, { Journal } from "../services/journal-service";

const JournalDetailPage = () => {
  const { journal } = useJournal();

  const [newJournalValue, setNewJournalValue] = useState(journal.content);
  let defaultValue = journal.content;

  const handleUpdateItem = () => {
    const updateJournal = { ...journal, content: newJournalValue };
    journalService
      .update(updateJournal)
      .then((res) => {
        setNewJournalValue(res.data.content);
      })
      .catch((err) => {
        /* setError(err.message); */
        setNewJournalValue(journal.content);
      });
  };

  let handleInputChange = (e: any) => {
    let inputValue = e.target.value;
    setNewJournalValue(inputValue);
  };
  return (
    <>
      <Heading>{journal.subject}</Heading>
      <Textarea
        defaultValue={defaultValue}
        value={newJournalValue}
        onChange={handleInputChange}
      ></Textarea>
      <Button onClick={() => handleUpdateItem()}>Save</Button>
    </>
  );
};

export default JournalDetailPage;
