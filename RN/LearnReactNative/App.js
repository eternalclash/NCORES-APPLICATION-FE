import React,{useState} from 'react';
import {
  Button,
  KeyboardAvoidingView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import Box from './components/Box';
import DateHead from './components/DeadHead';
import Greeting from './components/Greeting';
import { SafeAreaProvider,SafeAreaView } from 'react-native-safe-area-context';
import AddTodo from './components/AddTodo';
import Empty from './components/Empty';
import TodoList from './components/TodoList';
const App = () => {
  const [todos, setTodos] = useState([
    {id: 1, text: '작업환경 설정', done: true},
    {id: 2, text: '리액트 네이티브 기초 공부', done: false},
    {id: 3, text: '투두리스트 만들기', done: false},
  ])
  const date = new Date;
  const onInsert = text => {
    const nextId = todos.length > 0 ? Math.max(...todos.map(todo => todo.id)) + 1 : 1;
    const todo = {
      id: nextId,
      text,
      done:false,
    }

    setTodos(todos.concat(todo))
  }
  console.log(date)
  const onToggle = (id) => {
    const nextTodos = todos.map(todo => todo.id === id ? { ...todo, done: !todo.done } : todo);
      setTodos(nextTodos);
  }
  return (
    <SafeAreaProvider>
      <SafeAreaView edges={['bottom']} style={styles.full}>
        <KeyboardAvoidingView behavior='padding' style={styles.full}>
          <DateHead date={date} />
          {todos.length === 0 ? <Empty /> : <TodoList todos={todos} onToggle={onToggle}/>}
          <AddTodo onInsert={onInsert}/>
          </KeyboardAvoidingView>
      </SafeAreaView>
      </SafeAreaProvider>
  )
  
};
const styles = StyleSheet.create({
  full: {
    flex:1
  },
  wrapper: {
    flex:1
  },
  numberArea: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  number: {
    fontSize: 72,
    fontWeight: 'bold',
  },
});
//flex:1은 자신이 위치한 곳의 영역을 모두 차지하겠다는 의미
export default App;
