import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface Todo {
  title: string;
  user: string;
  date: string;
  priority: 'low' | 'medium' | 'high';
  category: 'Work' | 'Personal';
  completed: boolean;
}

@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './todos.html',
  styleUrls: ['./todos.css']
})
export class TodosComponent {
  searchText = '';
  filter: 'all' | 'pending' | 'completed' = 'all';

  todos: Todo[] = [
    {
      title: 'delectus aut autem',
      user: 'Leanne Graham',
      date: '2024-01-15',
      priority: 'high',
      category: 'Work',
      completed: false
    },
    {
      title: 'quis ut nam facilis et officia qui',
      user: 'Leanne Graham',
      date: '2024-01-14',
      priority: 'medium',
      category: 'Personal',
      completed: false
    },
    {
      title: 'fugiat veniam minus',
      user: 'Leanne Graham',
      date: '2024-01-13',
      priority: 'low',
      category: 'Work',
      completed: false
    },
    {
      title: 'et porro tempora',
      user: 'Leanne Graham',
      date: '2024-01-12',
      priority: 'high',
      category: 'Personal',
      completed: true
    }
  ];

  get completedCount() {
    return this.todos.filter(t => t.completed).length;
  }

  get pendingCount() {
    return this.todos.filter(t => !t.completed).length;
  }

  get highPriorityCount() {
    return this.todos.filter(t => t.priority === 'high').length;
  }

  filteredTodos() {
    let list = this.todos;

    if (this.searchText) {
      list = list.filter(todo =>
        todo.title.toLowerCase().includes(this.searchText.toLowerCase())
      );
    }

    if (this.filter === 'pending') {
      list = list.filter(t => !t.completed);
    } else if (this.filter === 'completed') {
      list = list.filter(t => t.completed);
    }

    return list;
  }
}
