import React, { useState } from "react";

type Props = {
  saveNote: (e: React.FormEvent, formData: INote | any) => void;
};

const AddNote: React.FC<Props> = ({ saveNote }) => {
  const [formData, setFormData] = useState<INote | {}>();
  console.log(formData);

  const handleForm = (e: React.FormEvent<HTMLInputElement>): void => {
    setFormData({
      ...formData,
      [e.currentTarget.id]: e.currentTarget.value,
    });
  };

  return (
    <form className="Form" onSubmit={(e) => saveNote(e, formData)}>
      <div>
        <div>
          <label htmlFor="name">Name</label>
          <input onChange={handleForm} type="text" id="name" />
        </div>
        <div>
          <label htmlFor="description">Description</label>
          <input onChange={handleForm} type="text" id="description" />
        </div>
      </div>
      <button disabled={formData === undefined ? true : false}>Add Note</button>
    </form>
  );
};

export default AddNote;
