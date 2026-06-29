import React from "react";
import { Link } from "react-router-dom";

const AllPage = () => {
  return (
    <div className="app-shell">
      <div className="page-card">
        <div className="hero-block">
          <span className="eyebrow">React Feature Hub</span>
          <h1>Open stopwatch or CRUD in one click</h1>
          <p>
            Use the cards below to navigate only when you are ready. Each card
            opens a dedicated page for stopwatch or CRUD table functionality.
          </p>
        </div>

        <div className="dashboard-grid">
          <Link to="/stopwatch" className="dashboard-card">
            <div>
              <h2>Stopwatch</h2>
            </div>
            <span className="card-cta">Go to Stopwatch →</span>
          </Link>

          <Link to="/crud" className="dashboard-card">
            <div>
              <h2>CRUD Operations</h2>
            </div>
            <span className="card-cta">Go to CRUD →</span>
          </Link>

          <Link to="/apisearch" className="dashboard-card">
            <div>
              <h2>API Search</h2>
            </div>
            <span className="card-cta">Go to API Search →</span>
          </Link>

           <Link to="/hocsample1" className="dashboard-card">
            <div>
              <h2>HOC sample1</h2>
            </div>
            <span className="card-cta">Go to HOC sample →</span>
          </Link>

          <Link to="/redux" className="dashboard-card">
            <div>
              <h2>Redux Counter</h2>
            </div>
            <span className="card-cta">Go to Redux →</span>
          </Link>

          <Link to="/callback" className="dashboard-card">
            <div>
              <h2>Callback</h2>
            </div>
            <span className="card-cta">Go to Callback →</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AllPage;
