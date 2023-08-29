import journalService, { Journal } from "../services/journal-service";
import useJournals from "../hooks/useJournals";
import { Button, SimpleGrid } from "@chakra-ui/react";
import JournalCard from "./JournalCard";
import { useNavigate } from "react-router-dom";

const JournalGrid = () => {
  const { journals, error, isLoading, setJournals, setError } = useJournals();
  const navigate = useNavigate();
  const handleDeleteItem = (journal: Journal) => {
    const originalJournals = [...journals];
    setJournals(journals.filter((j) => j.id !== journal.id));
    journalService.delete(journal.id).catch((err) => {
      setError(err.message);
      setJournals(originalJournals);
    });
  };

  return (
    <>
      {error && <p className="text-danger">{error}</p>}
      {isLoading ? (
        <div className="spinner-border"></div>
      ) : (
        <>
          {/* <h1>{heading}</h1> */}
          {journals.length === 0 && <p>No item found</p>}
          <Button size="sm" onClick={() => navigate("/add/")}>
            Add
          </Button>

          <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 5 }} spacing={10}>
            {journals.map((item) => (
              <JournalCard
                onDeleteJournal={handleDeleteItem}
                key={item.id}
                journal={item}
              />
            ))}
          </SimpleGrid>
        </>
      )}
    </>
  );
};

export default JournalGrid;
