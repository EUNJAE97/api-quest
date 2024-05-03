import {BrowserRouter, Route, Routes} from "react-router-dom";
import Layout from "./layouts/Layout";
import './App.css';
import Main from "./pages/Main";
import UserList from "./pages/UserList";
import UserDetail from "./pages/UserDetail";
import PostList from "./pages/PostList";
import PostDetail from "./pages/PostDetail";
function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route index element={<Main/>}/>
            <Route path="user">
              <Route index element={<UserList/>}/>
                <Route path=":id" element={<UserDetail/>}/>
            </Route>
              <Route path="post">
                  <Route index element={<PostList/>}/>
                  <Route path=":id" element={<PostDetail/>}/>
              </Route>


          </Route>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
