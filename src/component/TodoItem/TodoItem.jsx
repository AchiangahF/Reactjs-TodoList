import { useState } from 'react';
import './TodoItem.css';
import { Col, Container, Row } from 'react-bootstrap';

function TodoItem({todo, onDelete, onCheck, todoTheme}) {
    const [tof, setTof] = useState(true);

    return (
        <div className='box'>
            <Container fluid>
                <Row className={todoTheme === true ? 'box-content bg-dark':'box-content bg-light'}>
                    <Col xs={1} className='test1'><img id='btn' className='Todo-check' src={tof === true ? "../Assests/dry-clean.png":"../Assests/check.png"} alt="" onClick={() => {setTof(!tof); todo.check=tof; onCheck(); console.log(todo.check)}}/></Col>
                    <Col xs={10} className='test2'>{tof === true ? <span className={todoTheme === true ? 'Todo-text text-light':'Todo-text text-dark'}>{todo.text}</span>:<span className='Todo-text text-secondary text-decoration-line-through'>{todo.text}</span>}</Col>
                    <Col xs={1} className='test1'><img id='btn' className='Todo-cancel' src="../Assests/icon-cross.svg" alt="" onClick={() => onDelete(todo.id)}/></Col>
                </Row>
            </Container>
        </div>

    );
}

export default TodoItem;