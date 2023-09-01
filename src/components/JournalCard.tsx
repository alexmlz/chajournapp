import { Card, CardBody, Heading, Text } from "@chakra-ui/react";
import { Journal } from "../services/journal-service";
import { Link } from "react-router-dom";

interface Props {
  journal: Journal;
}

const JournalCard = ({ journal }: Props) => {
  return (
    <Card maxHeight={222} borderRadius={10} overflow="hidden">
      <CardBody>
        <Heading fontSize="2xl">
          <Link to={`/journals/${journal.id}`}>{journal.subject}</Link>
        </Heading>

        <Text>{journal.content}</Text>
      </CardBody>
    </Card>
  );
};

export default JournalCard;
