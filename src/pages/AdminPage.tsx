import React, { useState } from "react";
import useAdminUsers from "../hooks/useAdminUsers";
import {
  Text,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
  HStack,
  Input,
  Textarea,
  Button,
  VStack
} from "@chakra-ui/react";
import { FormattedMessage } from "react-intl";
import useQuestions from "../hooks/useQuestions";
import questionService, { Question } from "../services/question-service";
import { useNavigate } from "react-router-dom";


const AdminPage = () => {
  const navigate = useNavigate();

  // let obj = {} as Question;

  // const [question, setQuestion] = useState(obj);
  const { questions, error, isLoading, setQuestions, setError } = useQuestions();

  const [users, setUsers] = useState([]);
  const [newQuestion, setNewQuestion] = useState("");
  const [newCategory, setNewCategory] = useState("");
  useAdminUsers(setUsers);

  const handleAddItem = () => {
    const newQuestionObj = {
      question: newQuestion,
      category: newCategory,
    };

    questionService
      .create(newQuestionObj)
      .then((res: any) => {
        setQuestions(res.data);
        setNewQuestion("");
        setNewCategory("");
      })
      .catch((err) => { });
  };

  const handleDelQuestion = (question: any) => {
    questionService.delete(question.id)
      .then((res: any) => {
        setQuestions(res.data);
      })
      .catch((err) => { });
  };


  return (
    <>
    <VStack>
<Text>Neue Frage</Text>
      <Textarea value={newQuestion}
        onChange={(e) => setNewQuestion(e.target.value)} placeholder="Enter Question" />
      <Input value={newCategory}
        onChange={(e) => setNewCategory(e.target.value)} placeholder="Enter Category" />
      <Button colorScheme="blue" onClick={() => handleAddItem()}>
      <Text>Speichern</Text>

      </Button>
      </VStack>
      {questions.map((item) => (
        <HStack>
          <Text key={item.id}> {item.question} / {item.category}</Text>
          <Button variant="outline" onClick={() => handleDelQuestion(item)}>
            Del
          </Button>
        </HStack>

      ))}
      <VStack>
<Text>User</Text>

        <UnorderedList>
          {users.map((user: any) => (
            <ListItem>
              {user.username} {user.date_joined} {user.is_superuser.toString()}
            </ListItem>
          ))}
          ;
        </UnorderedList>
      </VStack>
    </>


  );
};

export default AdminPage;
