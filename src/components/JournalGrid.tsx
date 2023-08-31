import journalService, { Journal } from "../services/journal-service";
import useJournals from "../hooks/useJournals";
import { Button, HStack, SimpleGrid } from "@chakra-ui/react";
import JournalCard from "./JournalCard";
import { useNavigate } from "react-router-dom";

const JournalGrid = () => {
  const { journals, error, isLoading, setJournals, setError } = useJournals();
  const navigate = useNavigate();

  return (
    <>
      {error && <p className="text-danger">{error}</p>}
      {isLoading ? (
        <div className="spinner-border"></div>
      ) : (
        <>
          {/* <h1>{heading}</h1> */}
          {journals.length === 0 && <p>No item found</p>}
          <HStack justifyContent="flex-end">
            <Button colorScheme="blue" onClick={() => navigate("/add/")}>
              Add
            </Button>
          </HStack>
          <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 5 }} spacing={10}>
            {journals.map((item) => (
              <JournalCard key={item.id} journal={item} />
            ))}
          </SimpleGrid>
        </>
      )}
    </>
  );
};

export default JournalGrid;
