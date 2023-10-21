import Card from "react-bootstrap/Card";
import { DataFormat } from "../App";
import isCompleted from "../utils/isCompleted";

type CardLayoutProps = {
  user: DataFormat;
};

const CardLayout = (props: CardLayoutProps) => {
    const eligibleForSwags = isCompleted(props.user["Swags Status"])
  return (
    <Card className="rounded "
      style={{ border: "1px solid gray", minWidth: "18rem", maxWidth: "100vw" }}
    >
      <Card.Body>
        <Card.Title className="fw-bold my-3">{props.user["Names"]}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          <p className="mb-2">{`No. of Courses Completed: ${props.user["# of Courses Completed"]}`}</p>
          <p>{`No. of Skill Badges Completed: ${props.user["# of Skill Badges Completed"]}`}</p>
        </Card.Subtitle>
        <Card.Text className="text-muted">
          <p>{`Google Cloud Computing Foundations Status: ${props.user["Google Cloud Computing Foundations Status"]}`}</p>
          <p>{`GenAI Game Status: ${props.user["GenAI Game Status"]}`}</p>
        </Card.Text>
        <p className={`border-top pt-2 text-center fs-5 fw-bold ${ eligibleForSwags ? "text-success" : "text-muted"} `}>{eligibleForSwags ? "Eligible for Google Cloud Swags" : "Not yet Eligible for Swags"}</p>
      </Card.Body>
    </Card>
  );
};

export default CardLayout;
