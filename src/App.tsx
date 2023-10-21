import { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from "./components/Navbar"
import Search from "./components/Search"
import Leaderboard from "./components/Leaderboard";
import axios from 'axios';

export type DataFormat = {
  "Names": string;
  "# of Courses Completed": string;
  "# of Skill Badges Completed": string;
  "Google Cloud Computing Foundations Status": string;
  "GenAI Game Status": string;
  "Swags Status": string;
}

export type LeaderboardFormat = {
  "Date": string;
}

const GET_ALL_USERS = import.meta.env.VITE_API_URL + '/member';
const GET_LEADERBOARD = import.meta.env.VITE_API_URL + '/leaderboard'

function App() {
  const [dataArr, setDataArr] = useState<Array<DataFormat>>([]);
  const [leaderboard, setLeaderboard] = useState<LeaderboardFormat[]>([])

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
        console.log(`Error fetching members: ${error}`
        );
      })
  }, []);

  useEffect(() => {
    const loadedUsers: LeaderboardFormat[] = [];
    axios.get(GET_LEADERBOARD)
      .then(response => {
        const dataSet = response.data["data"];
        for (const name of dataSet) {
          loadedUsers.push(name)
        }
        setLeaderboard(loadedUsers);
      })
      .catch(error => {
        console.log(`Error fetching leaderboard: ${error}`
        );
      })
  }, []);

  return (
    <div className=''>
      <Navbar />
      <h1 className='text-center fs-sm-6 fs-md-4 fs-1'>Google Cloud Study Jam 2023</h1>

      <Leaderboard dataArr={leaderboard}/>

      <Search allMembers={dataArr}/>

    </div>
  )
}

export default App
