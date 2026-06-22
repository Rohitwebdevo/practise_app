import "./App.css";
import AllPage from "./components/AllPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Stopwatch from "./components/Stopwatch/Stopwatch";
import CRUD_SwichData from "./components/CRUD_data_shift_to_other_table/CRUD_SwichData";
import MainAPIPage from "./components/Filter_Search_Api_fetch.tsx/MainAPIPage";
import Sample from "./components/HOC/Sample";
import Sample2 from "./components/HOC/Sample2";
import MainHOC from "./components/HOC/MainHOC";

function App() {
  const HOC_Sample = MainHOC(Sample);
  const HOC_Sample2 = MainHOC(Sample2);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AllPage />} />
        <Route path="/stopwatch" element={<Stopwatch />} />
        <Route path="/crud" element={<CRUD_SwichData />} />
        <Route path="/apisearch" element={<MainAPIPage />} />
        <Route path="*" element={<AllPage />} />
        <Route path="/hocsample1" element={HOC_Sample} />
        <Route path="/hocsample2" element={HOC_Sample2} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
