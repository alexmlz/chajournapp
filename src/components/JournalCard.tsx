import { Box, Button, Card, CardBody, Heading, Text } from "@chakra-ui/react";
import { Journal } from "../services/journal-service";
import { Link } from "react-router-dom";

interface Props {
  journal: Journal;
  onDeleteJournal: (journal: Journal) => void;
}

const JournalCard = ({ journal, onDeleteJournal }: Props) => {
  return (
    <Card borderRadius={10} overflow="hidden">
      <CardBody>
        <Heading fontSize="2xl">
          {/* {journal.subject} */}
          <Link to={`/journals/${journal.id}`}>{journal.subject}</Link>
        </Heading>

        <Text>{journal.content}</Text>
        <Button onClick={() => onDeleteJournal(journal)} color="red">
          Delete
        </Button>
      </CardBody>
    </Card>
  );
};

export default JournalCard;
