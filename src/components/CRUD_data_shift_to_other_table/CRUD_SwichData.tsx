import React, { useState } from "react";
import Inputfield from "./Inputfield";
import MainTable from "./MainTable";
import DeletedTable from "./DeletedTable";

type TableItem = {
  id: number;
  name: string;
  number: string;
};

type FormData = {
  name: string;
  number: string;
};

const CRUD_SwichData = () => {
  const [tableData, setTableData] = useState<TableItem[]>([]);
  const [deletedData, setDeletedData] = useState<TableItem[]>([]);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    number: "",
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.number.trim()) return;

    const newItem: TableItem = {
      id: tableData.length + deletedData.length + 1,
      name: formData.name.trim(),
      number: formData.number.trim(),
    };

    setTableData((prev) => [...prev, newItem]);
    setFormData({ name: "", number: "" });
  };

  const handleDelete = (item: TableItem) => {
    setTableData((prev) => prev.filter((tb) => tb.id !== item.id));
    setDeletedData((prev) => [...prev, item]);
  };

  const handleRestore = (item: TableItem) => {
    setDeletedData((prev) => prev.filter((tb) => tb.id !== item.id));
    setTableData((prev) => [...prev, item]);
  };

  return (
    <div className="crud-shell">
      <div className="crud-card">
        <div className="crud-header">
          <div>
            <p className="eyebrow">CRUD Dashboard</p>
            <h2>Switch Data Between Tables</h2>
            <p className="subtext">
              Add items to the active table, delete them into the removed list, and restore them back.
            </p>
          </div>
        </div>

        <div className="crud-grid">
          <section className="form-panel">
            <Inputfield
              formData={formData}
              onChange={setFormData}
              onSubmit={handleSubmit}
            />
          </section>

          <section className="table-panel">
            <MainTable tableData={tableData} handleDelete={handleDelete} />
            <DeletedTable deletedtable={deletedData} handleRestore={handleRestore} />
          </section>
        </div>
      </div>
    </div>
  );
};

export default CRUD_SwichData;
