import axios, { AxiosResponse } from "axios";

const baseUrl: string = "http://localhost:3001/api";

export const getNotes = async (): Promise<AxiosResponse<ApiDataType>> => {
  try {
    const todos: AxiosResponse<ApiDataType> = await axios.get(
      baseUrl + "/notes"
    );
    return todos;
  } catch (error) {
    throw new Error(error as string);
  }
};

export const addNote = async (
  formData: INote
): Promise<AxiosResponse<ApiDataType>> => {
  try {
    const todo: Omit<INote, "_id"> = {
      name: formData.name,
      description: formData.description,
      status: false,
    };
    const saveNote: AxiosResponse<ApiDataType> = await axios.post(
      baseUrl + "/add-note",
      todo
    );
    return saveNote;
  } catch (error) {
    throw new Error(error as string);
  }
};

export const deleteNote = async (
  _id: string
): Promise<AxiosResponse<ApiDataType>> => {
  try {
    const deletedNote: AxiosResponse<ApiDataType> = await axios.delete(
      `${baseUrl}/delete-note/${_id}`
    );
    return deletedNote;
  } catch (error) {
    throw new Error(error as string);
  }
};
