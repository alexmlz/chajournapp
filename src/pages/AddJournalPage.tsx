import { Button, Input, Textarea, Text, HStack } from "@chakra-ui/react";
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
      <HStack justifyContent="flex-end">
        <Button colorScheme="blue" onClick={() => handleAddItem()}>
          Save
        </Button>
      </HStack>
      <Text mb="8px">Subject</Text>

      <Input
        value={newSubject}
        onChange={(e) => setNewSubject(e.target.value)}
      ></Input>
      <Text mb="8px">Content</Text>
      <Textarea
        height={window.innerHeight - 310}
        value={newContent}
        onChange={(e) => setNewContent(e.target.value)}
      ></Textarea>
      <HStack justifyContent={"flex-end"}>
        <Button colorScheme="blue" onClick={() => navigate("/")}>
          Cancel
        </Button>
      </HStack>
    </>
  );
};

export default AddJournalPage;
