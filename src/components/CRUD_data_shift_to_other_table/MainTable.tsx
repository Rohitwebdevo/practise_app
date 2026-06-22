import React from "react";

type TableItem = {
  id: number;
  name: string;
  number: string;
};

type MainTableProps = {
  tableData: TableItem[];
  handleDelete: (item: TableItem) => void;
};

const MainTable: React.FC<MainTableProps> = ({ tableData, handleDelete }) => {
  return (
    <div className="table-card">
      <h3>Active Items</h3>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Number</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {tableData.length === 0 ? (
            <tr>
              <td colSpan={3} className="empty-row">
                No items yet.
              </td>
            </tr>
          ) : (
            tableData.map((item) => (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>{item.number}</td>
                <td>
                  <button className="secondary-btn" onClick={() => handleDelete(item)}>
                    Delete
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

export default MainTable;
