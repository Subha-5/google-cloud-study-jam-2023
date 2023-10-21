import { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from "./components/Navbar"
import Search from "./components/Search"
import axios from 'axios';
import Leaderboard from './components/Leaderboard';

export type DataFormat = {
  "Names": string;
  "# of Courses Completed": string;
  "# of Skill Badges Completed": string;
  "Google Cloud Computing Foundations Status": string;
  "GenAI Game Status": string;
  "Swags Status": string;
}


const GET_ALL_USERS = "https://nirvik10.pythonanywhere.com" + '/member'

function App() {
  const [dataArr, setDataArr] = useState<Array<DataFormat>>([]);
  useEffect(() => {
    const loadedUsers: DataFormat[] = [];
    axios.get(GET_ALL_USERS)
      .then(response => {
        const dataSet = response.data;
        for (const keyData in dataSet) {
          loadedUsers.push(dataSet[keyData])
        }
        setDataArr(loadedUsers);
      })
      .catch(error => {
        console.log(`Error fetching data: ${error}`
        );
      })
  }, [])
  return (
    <div className='mb-3 mx-md-3 mx-lg-5'>
      <Navbar />
      <h1 className='text-center fs-sm-6 fs-md-4 fs-1'>Google Cloud Study Jam 2023</h1>

      <Leaderboard/>

      <Search allMembers={dataArr}/>

    </div>
  )
}

export default App
