import React from 'react';
import TodoTask from './TodoTask.js'
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTask: '',
      tasks : []
    }
    this.removeTask = this.removeTask.bind(this);
  }

  handleChange = (e) => {
    this.setState({ currentTask: e.target.value });
  }

  addNewTask = (e) => {
    const tempTask = this.state.tasks;
    const newTask = this.state.currentTask;
    const hasTask = tempTask.indexOf(newTask) >= 0;

    console.log(hasTask);

    if(newTask.length > 0)
    {
      tempTask.push(newTask);
      this.setState({ 
        tasks: tempTask,
        currentTask: ''
      });
    }
  }

  removeTask = (index) => {
    this.setState( {tasks: this.state.tasks.filter((_val, i) => { return i!==index})})
  }

  render () {
    return (
      <div className="App">
        <header className="header">
          <h1>Lista zadań</h1>
          <div>
            <input
              className="new-task-list"
              placeholder="Dodaj nowe zadanie"
              value={this.state.currentTask}
              onChange={this.handleChange}
            />&nbsp;
              <Button variant="primary" type="submit" onClick={this.addNewTask}>
                Dodaj
              </Button>
            </div>
        </header>
          <TodoTask items={this.state.tasks} onRemoveIndex={this.removeTask}/>
      </div>
    );
  }
}

export default App;
