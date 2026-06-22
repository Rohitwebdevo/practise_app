import React from "react";

type TableItem = {
  id: number;
  name: string;
  number: string;
};

type DeletedTableProps = {
  deletedtable: TableItem[];
  handleRestore: (item: TableItem) => void;
};

const DeletedTable: React.FC<DeletedTableProps> = ({ deletedtable, handleRestore }) => {
  return (
    <div className="table-card">
      <h3>Deleted Items</h3>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Number</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {deletedtable.length === 0 ? (
            <tr>
              <td colSpan={3} className="empty-row">
                No deleted records.
              </td>
            </tr>
          ) : (
            deletedtable.map((item) => (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>{item.number}</td>
                <td>
                  <button className="secondary-btn" onClick={() => handleRestore(item)}>
                    Restore
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default DeletedTable;
