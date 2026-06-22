import React from "react";

type FormData = {
  name: string;
  number: string;
};

type InputfieldProps = {
  formData: FormData;
  onChange: (newData: FormData) => void;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
};

const Inputfield: React.FC<InputfieldProps> = ({ formData, onChange, onSubmit }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    onChange({ ...formData, [name]: value });
  };

  return (
    <form className="form-card" onSubmit={onSubmit}>
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Enter name"
        />
      </div>

      <div className="form-group">
        <label htmlFor="number">Number</label>
        <input
          type="text"
          id="number"
          name="number"
          value={formData.number}
          onChange={handleChange}
          placeholder="Enter number"
        />
      </div>

      <button className="primary-btn" type="submit">
        Submit
      </button>
    </form>
  );
};

export default Inputfield;
