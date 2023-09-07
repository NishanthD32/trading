import logo from './logo.svg';
import './App.css';
import Base from './Basepages/Base';
import DashBoard from './Pages/Dashboard';
import BarChart from './components/Barchart';
import PieChart from './components/Piechart';
import User from './Pages/User';
import Mentor from './Pages/Mentor';
import Notes from './Pages/Notes';
import { Route, Routes } from 'react-router-dom';


function App() {
 
 return(
<Routes>
    <Route exact path='/' element={<DashBoard/>}/>
    <Route path='/user/' element={<User/>}/>
    <Route path='/mentor/' element={<Mentor/>}/>
    <Route path='/notes/' element={<Notes/>}/>
</Routes>
 )
}

export default App;
