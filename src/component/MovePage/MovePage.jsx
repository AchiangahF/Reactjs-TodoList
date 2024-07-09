import './MovePage.css';
import { Container, Row, Col, Nav, Navbar, Button } from 'react-bootstrap'

function MovePage(props) {
    return (
        <div className='footer'>
            <Container fluid>
                
                <Row id='desktop-nav' className='bg-dark mobile_nav'>
                    <Col className='MN-ui bg-dark text-secondary text-start align-center'>{props.numItems} items</Col>
                    <Col>
                        <Navbar bg='dark' data-bs-theme='dark'>
                                <Container>
                                    <Nav className='me-auto'>
                                        <Nav.Link onClick={() => {props.changePage('All')}}>All</Nav.Link>
                                        <Nav.Link onClick={() => {props.changePage('Active')}}>Active</Nav.Link>
                                        <Nav.Link onClick={() => {props.changePage('Completed')}}>Completed</Nav.Link>
                                    </Nav>
                                </Container>
                        </Navbar>
                    </Col>
                    <Col className='MN-ui bg-dark text-secondary fs-9 text-end'>Clear Complet</Col>
                </Row>

                <Row id='mobile_nav'>
                    <Col className='MN-ui bg-dark text-secondary'><p>{props.numItems} items</p></Col>
                    <Col className='MN-ui bg-dark text-secondary text-end'><Button className='bg-dark text-secondary btn-outline-dark'>Clear Completed</Button></Col>
                </Row>

            </Container>

            <Container className='mt-5 bg-dark'>
                <Row id='mobile_nav'>
                        <Col>
                            <div className='navBox bg-dark'>
                                <Navbar bg='dark' data-bs-theme='dark'>
                                        <Container>
                                            <Nav className='me-auto'>
                                                <Nav.Link onClick={() => {props.changePage('All')}}>All</Nav.Link>
                                                <Nav.Link onClick={() => {props.changePage('Active')}}>Active</Nav.Link>
                                                <Nav.Link onClick={() => {props.changePage('Completed')}}>Completed</Nav.Link>
                                            </Nav>
                                        </Container>
                                </Navbar>
                            </div>
                        </Col>
                    </Row>
            </Container>
        </div>
    );
}

export default MovePage;