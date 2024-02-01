import React from 'react';
import ReactDOM from 'react-dom/client';
import App from '../App/App.jsx';
import './index.css';

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

// import bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'; 
import Dashboard from '../Pages/Dashboard/Dashboard.jsx';
import Team from '../Pages/Team/Team.jsx';
import ContactsInformation from '../Pages/ContactsInformation/ContactsInformation.jsx';
import InovaciesBalance from '../Pages/InovaciesBalance/InovaciesBalance.jsx';
import Profile from '../Pages/Profile/Profile.jsx';
import Calendar from '../Pages/Calendar/Calendar.jsx';
import FAQ from '../Pages/FAQ/FAQ.jsx';
import BarChart from '../Pages/BarChart/BarChart.jsx';
import PieChart from '../Pages/PieChart/PieChart.jsx';
import LineChart from '../Pages/LineChart/LineChart.jsx';
import GeographyChart from '../Pages/GeographyChart/GeographyChart.jsx';



const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Dashboard />}  />
      <Route path='team' element={<Team />}  />
      <Route path='contact' element={<ContactsInformation />}  />
      <Route path='inovacies' element={<InovaciesBalance />}  />
      <Route path='profile' element={<Profile />}  />
      <Route path='calendar' element={<Calendar />}  />
      <Route path='faq' element={<FAQ />}  />
      <Route path='barChart' element={<BarChart />}  />
      <Route path='PieChart' element={<PieChart />}  />
      <Route path='lineChart' element={<LineChart />}  />
      <Route path='geographyChart' element={<GeographyChart />}  />
    </Route>
  )
);



ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
