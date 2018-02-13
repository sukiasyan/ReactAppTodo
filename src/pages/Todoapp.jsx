import React , {Component} from 'react';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';
import Jumbotron from '../components/Jumbotron.jsx';
import Todoheader from "../components/Todoheader.jsx";
import Todoinput from "../components/Todoinput.jsx";
import TodoItem from "../components/TodoItem.jsx";

class Todoapp extends Component {
    constructor(props){
        super(props);
        this.state = {
            todos: [
                {id: 0, text: "Make dinner tonight"},
                {id: 1, text: "fold the laundry"},
                {id: 2, text: "Make React app"}
            ],
            nextId: 3
        };

        this.addTodo = this.addTodo.bind(this);
        this.removeTodo = this.removeTodo.bind(this);
    }
    addTodo(todoText){
        let todos = this.state.todos.slice();
        todos.push({id: this.state.nextId, text: todoText})
        this.setState({
            todos: todos,
            nextId: ++this.state.nextId
        })

    }
    removeTodo(id){
        this.setState({
        todos: this.state.todos.filter((todo, index)=> todo.id !== id)
        })
    }
    render() {
        return (
            <div>
                <div className="container">
                    <Navbar/>
                    <Jumbotron title="Todo App" subtitle="Todo subtitle"/>
                    <h2>Todo App</h2>
                    <div className="todo-wrapper">
                           <Todoheader />
                        <Todoinput todoText="" addTodo={this.addTodo}/>
                        <ul>
                            {
                                this.state.todos.map((todo)=> {
                              return <TodoItem todo={todo} key={todo.id} id={todo.id} removeTodo={this.removeTodo}/>
                            })
                            }
                        </ul>
                    </div>

                </div>
                <Footer/>
            </div>
        );
    }
}

export default Todoapp;