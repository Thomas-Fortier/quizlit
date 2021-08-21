import react from 'react';
import axios from 'axios';
import { Route, useParams } from 'react-router-dom';

export default function QuizView({ id }) {
  return (
    <h1>{id}</h1>
  );
}