import { Container, Row, Col } from 'react-bootstrap';
import './TodoList.css';
import TodoItem from '../TodoItem/TodoItem';
import MovePage from '../MovePage/MovePage';
import { useState } from 'react';

function TodoList() {

    // THE STATES USED

    const [todoItems, setTodoItems] = useState([]);
    const [checkedTodos, setCheckedTodos] = useState([]);
    const [theme, setTheme] = useState(true);
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

    console.log(window.innerWidth)

    return (
        <Container fluid>
            <Row>
                <Col className={theme === true ? 'todo-body':'todo-body bg-white'} style={
                    (theme === true && window.innerWidth <= 500) ? {
                      backgroundImage: 'url(./images/bg-mobile-dark.jpg)', 
                      backgroundRepeat:'no-repeat',
                      backgroundSize:'100% 35vh'
                    } :
                    (theme === false && window.innerWidth <= 500) ? {
                        backgroundImage: 'url(./images/bg-mobile-light.jpg)', 
                        backgroundRepeat:'no-repeat',
                        backgroundSize:'100% 35vh'
                    } :
                    (theme === true && window.innerWidth >= 501) ? {
                        backgroundImage: 'url(./images/bg-desktop-dark.jpg)', 
                        backgroundRepeat:'no-repeat',
                    } :
                    (theme === false && window.innerWidth >= 501) ? {
                        backgroundImage: 'url(./images/bg-desktop-dark.jpg)', 
                        backgroundRepeat:'no-repeat',
                    } : {backgroundImage:'none'}

                    }>
                    <div className='todo-container'>
                        <div className='header'>

                         {/* Todo list header containing Title, mod-img and an input-field */}
                            <div className='header-title'>
                                <h1>TODO</h1>
                                <img src={theme === true ? "../Assests/icon-sun.svg":"../Assests/icon-moon.svg"} alt="" onClick={() => {setTheme(!theme)}} style={{cursor:'pointer'}}/>
                            </div>
                         
                            <div className='input-todo-box'>
                                <input type="text" className={theme === true ? 'inputBox':'inputBox bg-light'} placeholder='Create a new todo...' value={todoText} onChange={(e) =>{setTodoText(e.target.value)}}/>
                                <div id='add-todo' className='img-fluid' onClick={onAddTodo}><img src="../Assests/add(1).png" alt=""/></div>
                            </div>
                         
                        </div>
                       {todoItems.length > 0 &&
                       <div className={theme === true ? 'main-list bg-dark':'main-list bg-light'}>
                         {page === 'All' &&
                            todoItems.map((todoitem) =>(
                                <TodoItem key={todoitem.id} todo={todoitem} text={todoitem.text} onDelete={onDeleteTodo} onCheck={onCheckTodo} todoTheme={theme}/>
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
                        }

                       {todoItems.length > 0 && <MovePage numItems={todoItems.length} changePage={onChangePage} navTheme={theme}/>}

                       <p className='guide text-secondary text-center'>Drag and drop to reorder list</p>

                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default TodoList;