interface INote {
  _id: string;
  name: string;
  description: string;
  status: boolean;
  createdAt?: string;
  updatedAt?: string;
}

type NoteProps = {
  note: INote;
};

type ApiDataType = {
  message: string;
  status: string;
  notes: INote[];
  note?: INote;
};
