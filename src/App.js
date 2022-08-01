import { PureComponent } from 'react';
import Header from './components/header/Header';
import './App.css';
import Category from './components/category/Category';
import PDP from './components/PDP/PDP';
import Cart from "./components/cart/Cart"
import { Routes , Route} from 'react-router-dom';


export class App extends PureComponent {
  render() {
    return (
      <>
       <Header/>
      <Routes>
       <Route path="/" element={ < Category/>} />
       <Route path="/pdp" element={ < PDP/>} />
       <Route path="/cart" element={ < Cart/>} />
       
      </Routes>
      </>
     
      
       
     
      
    )
  }
}


export default App;

// import React from 'react';

// import { QueryClient, QueryClientProvider, useQuery } from "react-query";
// import { QueryClientHook } from 'react-query-class-component';

// const queryClient = new QueryClient();

// export default function App() {
//     return (
//         <QueryClientProvider client={queryClient}>
//             <TodoList/>
//         </QueryClientProvider>
//     );
// }

// class TodoList extends React.Component {
//     render() {
//         return (
//             <QueryClientHook
//                 hook={useQuery} // react query hook
//                 params={
//                     [
//                         'todos', // keyName
//                         () => { // query function
//                             return fetch('https://jsonplaceholder.typicode.com/todos').then(res => res.json());
//                         },
//                         // ...options
//                     ]
//                 }>
//                 {({data, isLoading}) => {
//                     if (isLoading) return <h1>Loading</h1>;
//                     return (
//                         <div className="App">
//                             <h2>Todo list</h2>
//                             {
//                                 data.map((query, key) => {
//                                     return <li key={key}>{query?.title}</li>;
//                                 })
//                             }
//                         </div>
//                     );
//                 }}
//             </QueryClientHook>
//         )
//     }
// }



// client//////////
//   .query({
//     query: GET_POSTS,
//     variables: { limit: 5 },
//   })
//   .then((response) => console.log(response.data))
//   .catch((err) => console.error(err));

// executing mutations//////////////////
// client
//   .mutate({
//     mutation: CREATE_POST,
//     variables: { title: "Hello", body: "World" },
//   })
//   .then((response) => console.log(response.data))
//   .catch((err) => console.error(err));

// // executing subscriptions
// client
//   .subscribe({
//     subscription: GET_POST,
//     variables: { id: "8883346c-6dc3-4753-95da-0cc0df750721" },
//   })
//   .then((response) => console.log(response.data))
  // .catch((err) => console.error(err));