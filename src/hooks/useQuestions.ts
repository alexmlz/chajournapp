import { useEffect, useState } from "react";
import questionService, { Question } from "../services/question-service";
import { CanceledError } from "../services/api-client";
import { useNavigate } from "react-router-dom";

const useQuestions = () => {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    setLoading(true);
    const { request, cancel } = questionService.getAll<Question>();
    request
      .then((res) => {
        setQuestions(res.data);
        setLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        if (err.request.status) navigate("/");

        setError(err.message);
        setLoading(false);
      });

    return () => cancel();
  }, []);

  return { questions, error, isLoading, setQuestions, setError };
};

export default useQuestions;
