import { BrowserRouter as Router } from 'react-router-dom';
import { Route } from "react-router";
import { useState } from 'react';

// Util
import { UserContext } from './util/userContext.js';

// Pages
import CreateQuiz from './pages/CreateQuiz';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';

// Components
import Header from './components/Header.jsx';

export default function App() {
  const [user, setUser] = useState(null);

  return (
    <Router>
      <UserContext.Provider value={{ user, setUser }}>
        <Header />
        
        <main>
          <Route path='/quiz/create' component={CreateQuiz} exact/>
          <Route path='/dashboard' component={Dashboard} exact/>
          <Route path='/login' component={Login} exact />
        </main>
      </UserContext.Provider>
    </Router>
  );
}