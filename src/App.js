import React, { useState } from 'react';
import FeedbackData from './data/FeedbackData';
import Header from './components/Header';
import FeedbackList from './components/FeedbackList';
import '../src/index.css';

const App = () => {
  const [feedback, setFeedback] = useState(FeedbackData);

  const deleteFeedback = (id) => {
    if (window.confirm('Are you sure you want to delete?')) {
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };

  return (
    <>
      <Header />
      <FeedbackList feedback={feedback} handleDelete={deleteFeedback} />
    </>
  );
};

export default App;