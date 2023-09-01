//import apiClient from "./api-client";
import create from "./http-service";

export interface Journal {
  id: number;
  content: string;
  subject: string;
  cre_date?: Date;
}

export default create("journals/", "journal/");
