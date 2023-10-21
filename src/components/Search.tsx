import { useMemo, useState } from "react";
import { DataFormat } from "../App";
import CardLayout from "./Card";
import { Col, Row } from "react-bootstrap";

type SearchProps = {
    allMembers: DataFormat[];
}

const Search = (props: SearchProps) => {
  const [name, setName] = useState("");

  const filteredUsers = useMemo(() => {
    return props.allMembers.filter( (member) => {
        return (
            name === "" || (member["Names"].toLowerCase().includes(name.toLowerCase()))
        )
    })
  }, [name, props])
  return (
    <div className="search-input mx-2 mx-lg-3 my-4 my-lg-5">
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Search your name "
        className="bg-light border outline-0 p-3 px-4 rounded-pill fs-5 w-100"
      />
      <p className="fw-bold text-muted text-center bg-warning bg-gradient p-2 rounded fs-6   my-3">
        Your status is updated every 24 hours.
      </p>
      <Row xs={1} sm={2} lg={3} className='g-3'>
      {
        filteredUsers.map((user) => {
          return <Col key={user.Names}><CardLayout user={user} /></Col>
        })
      }
    </Row>
    </div>
  );
};

export default Search;
