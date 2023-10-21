import { Col, Row, Stack } from "react-bootstrap";
import logo from "/gdsc-makaut-logo.jpeg";

const Navbar = () => {
    return (
        <Row className="text-center">
            <Col className="logo">
                <img src={logo} alt="hello" height={"75rem"} />
            </Col>
            <Col xs="auto">
                <Stack direction="horizontal">
                    {/* <Button variant="primary">Leaderboard</Button> */}
                </Stack>
            </Col>
        </Row>
    )
}

export default Navbar