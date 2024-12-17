//import apiClient from "./api-client";
import create from "./http-service";

export interface Question {
  id: number;
  question: string;
  category: string;
  cre_date: string;
}

export default create("questions/", "question/");
