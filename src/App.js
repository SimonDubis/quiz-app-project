import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './components/Home';
import QuizInstructions from './components/quiz/Quizinstructions';
import Play from './components/quiz/Play';
import Register from './components/auth/Register';

function App() {
  return (
    <Router>
      <Route path="/" exact component={Home} />
      <Route path="/register" exact component={Register} />
      <Route path="/play/instructions" exact component={QuizInstructions} />
      <Route path="/play/quiz" exact component={Play} />
    </Router>
  );
}

export default App;
