import { Container, Row, Col } from 'react-bootstrap';
import './TodoList.css';
import TodoItem from '../TodoItem/TodoItem';
import MovePage from '../MovePage/MovePage';
import { useState } from 'react';

function TodoList() {

    // THE STATES USED

    const [todoItems, setTodoItems] = useState([]);
    const [checkedTodos, setCheckedTodos] = useState([]);
    const [page, setPage] = useState('All');
    const [todoText, setTodoText] = useState([]);

    // THE FUNCTIONS USED
    const onAddTodo = ()=>{
        setTodoItems([
            ...todoItems,
            {
                id: todoItems.length+1,
                text: todoText,
                check: false
            }
        ])

        setTodoText('');
    }

    const onDeleteTodo = (id)=>{
        const updatedTodos = todoItems.filter((todoitem) => (todoitem.id !== id))
        console.log(id);
        setTodoItems(updatedTodos);
    }

    const onCheckTodo = ()=>{
        setCheckedTodos(todoItems.filter((todoitem)=>(todoitem.check === true)));
    }

    const onChangePage = (param)=>{
        setPage(param)
        console.log(param);
    }

    return (
        <Container fluid>
            <Row>
                <Col className='todo-body' style={{backgroundImage: 'url(../images/bg-desktop-dark.jpg)', backgroundRepeat:'no-repeat'}}>
                    <div className='todo-container'>
                        <div className='header'>

                         {/* Todo list header containing Title, mod-img and an input-field */}
                            <div className='header-title'>
                                <h1>TODO</h1>
                                <img src="../Assests/icon-sun.svg" alt="" />
                            </div>
                         
                            <div className='input-todo-box'>
                                <input type="text" placeholder='Create a new todo...' value={todoText} onChange={(e) =>{setTodoText(e.target.value)}}/>
                                <div id='add-todo' className='img-fluid' onClick={onAddTodo}><img src="../Assests/add(1).png" alt=""/></div>
                            </div>
                         
                        </div>
                       
                       <div className='main-list'>
                         {page === 'All' &&
                            todoItems.map((todoitem) =>(
                                <TodoItem key={todoitem.id} todo={todoitem} text={todoitem.text} onDelete={onDeleteTodo} onCheck={onCheckTodo}/>
                            ))
                         }
                         {page === 'Completed' &&
                            checkedTodos.map((todoitem) =>(
                                <TodoItem key={todoitem.id} todo={todoitem} text={todoitem.text} onDelete={onDeleteTodo} onCheck={onCheckTodo}/>
                            ))
                         }
                         {page === 'Active' && 
                            todoItems.filter((todoitem) =>(todoitem.check === false)).map((todoitem) =>(
                                <TodoItem key={todoitem.id} todo={todoitem} text={todoitem.text} onDelete={onDeleteTodo} onCheck={onCheckTodo}/>
                            ))
                         }
                       </div>

                       <MovePage numItems={todoItems.length} changePage={onChangePage}/>

                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default TodoList;