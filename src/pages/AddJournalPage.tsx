import { Button, Input, Textarea } from "@chakra-ui/react";
import React, { useState } from "react";
import journalService from "../services/journal-service";
import { useNavigate } from "react-router-dom";

const AddJournalPage = () => {
  const navigate = useNavigate();
  const handleAddItem = () => {
    const newJournal = {
      subject: newSubject,
      content: newContent,
    };
    //setJournals([newJournal, ...journals]);

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
      <Input
        value={newSubject}
        onChange={(e) => setNewSubject(e.target.value)}
      ></Input>
      <Textarea
        value={newContent}
        onChange={(e) => setNewContent(e.target.value)}
      ></Textarea>
      <Button onClick={() => handleAddItem()}>Save</Button>
    </>
  );
};

export default AddJournalPage;
