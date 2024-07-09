import { useState } from 'react';
import './TodoItem.css';
import { Col, Container, Row } from 'react-bootstrap';

function TodoItem({todo, onDelete, onCheck}) {
    const [tof, setTof] = useState(true);

    return (
        <div className='box'>
            <Container fluid>
                <Row>
                    <Col xs={1} className='test1 bg-dark'><img id='btn' className='Todo-check' src={tof === true ? "../Assests/circle.png":"../Assests/check.png"} alt="" onClick={() => {setTof(!tof); todo.check=tof; onCheck(); console.log(todo.check)}}/></Col>
                    <Col xs={10} className='test2 bg-dark'>{tof === true ? <p className='Todo-text text-light'>{todo.text}</p>:<p className='Todo-text text-secondary text-decoration-line-through'>{todo.text}</p>}</Col>
                    <Col xs={1} className='test1 bg-dark'><img id='btn' className='Todo-cancel' src="../Assests/icon-cross.svg" alt="" onClick={() => onDelete(todo.id)}/></Col>
                </Row>
            </Container>
        </div>

    );
}

export default TodoItem;