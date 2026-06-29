import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "./StudentSlice";
import type { RootState } from "./Store";

const StudentPage = () => {
  const dispatch = useDispatch();
  const student_data = useSelector((state: RootState) => state.student);

  return (
    <div className="redux-page">
      <div className="redux-card">
        <h1>Student Count Manager</h1>
        <div className="counter-display">
          <p>Total Students: <strong>{student_data.value}</strong></p>
        </div>
        <div className="button-group">
          <button className="primary-btn" onClick={() => dispatch(increment())}>
            Increase Count
          </button>
          <button className="secondary-btn" onClick={() => dispatch(decrement())}>
            Decrease Count
          </button>
        </div>
      </div>
    </div>
  );
};

export default StudentPage;
