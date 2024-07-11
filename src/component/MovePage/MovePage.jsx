import './MovePage.css';
import { Container, Row, Col, Nav, Navbar } from 'react-bootstrap'

function MovePage(props) {
    return (
        <div className='footer'>
            <Container fluid>
                
                <Row id='desktop-nav' className={props.navTheme === true ? 'bg-dark bblr mobile_nav':'bg-light bblr mobile_nav'}>
                    <Col xs={3} className='MN-ui text-secondary'>{props.numItems === 1 ? `${props.numItems} item left`:`${props.numItems} items left`}</Col>
                    <Col xs={5}>
                        <Navbar className='nav1' data-bs-theme={props.navTheme === true ? 'dark':'light'}>
                            <Nav className='me-auto nav3'>
                                <Nav.Link onClick={() => {props.changePage('All')}}>All</Nav.Link>
                                <Nav.Link onClick={() => {props.changePage('Active')}}>Active</Nav.Link>
                                <Nav.Link onClick={() => {props.changePage('Completed')}}>Completed</Nav.Link>
                            </Nav>
                        </Navbar>
                    </Col>
                    <Col xs={4} className='MN-ui  text-secondary'><span>Clear Completed</span></Col>
                </Row>

                <Row id='mobile_nav' className={props.navTheme === true ? 'bg-dark rounded-bottom':'bg-light rounded-bottom'}>
                    <Col className='DN-ui  text-secondary'>{props.numItems === 1 ? `${props.numItems} item left`:`${props.numItems} items left`}</Col>
                    <Col className='DN-ui text-secondary text-end'><span>Clear Completed</span></Col>
                </Row>

            </Container>

            <Container className={props.navTheme === true ? 'bg-dark mt-5 rounded':'bg-light mt-5 rounded'}>
                <Row id='mobile_nav'>
                        <Col>
                            <div className='navBox'>
                                <Navbar data-bs-theme={props.navTheme === true ? 'dark':'light'}>
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