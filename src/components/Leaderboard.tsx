import { LeaderboardFormat } from "../App"
import { Stack } from "react-bootstrap"
import { convertStringToDate as toDate } from "../utils/date"

type LeaderboardProps = {
    dataArr: LeaderboardFormat[]
}

const colors = ["primary", "danger", "warning", "primary", "success", "danger"]

const Leaderboard = (props: LeaderboardProps) => {
  return (
    <div className="border rounded m-2 m-md-3 m-lg-4 p-0 p-lg-3" style={{maxHeight: "50vh", overflowY: 'scroll'}}>
        <h1 className="text-center fs-2 m-3">Leader 🏆 Board</h1>
        {/* <div className="d-flex align-items-center justify-content-center fs-1 fst-italic text-secondary opacity-50">Coming Soon!</div> */}
    <Stack direction="vertical" className="align-items-center" style={{}}>
    {
    props.dataArr.map((data, index) => {
        for(const key in data){
            const date = toDate((data[key]) as string)

            return <p className={`bg-${colors[index % (colors.length)]} bg-opacity-90 text-white border mx-5 px-5 py-2 rounded-pill w-100 d-flex  justify-content-between`} key={key}><span>#{<span className="fw-bold">{index+1}</span>}</span> <span className="fw-bold">{key}</span> <span>Completed on: {<span className="fw-bold">{date}</span>}</span></p>;
        }
    })
    }
    </Stack>
    </div>
  )
}

export default Leaderboard