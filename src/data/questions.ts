const questionsData = [
  {
    id: 1,
    statement:'What is the capital of France?',
    answers:[
      { id: 1, text: 'Paris', correct: true },
      { id: 2, text: 'London', correct: false },
      { id: 3, text: 'Berlin', correct: false },
      { id: 4, text: 'Madrid', correct: false }
    ]
  },
  {
    id: 2,
    statement:'What is the capital of Brazil?',
    answers:[
      { id: 1, text: 'Rio de Janeiro', correct: false },
      { id: 2, text: 'Brasilia', correct: true },
      { id: 3, text: 'Argentina', correct: false },
      { id: 4, text: 'São Paulo', correct: false }
    ]
  },
  {
    id: 3,
    statement:'What is the capital of Japan?',
    answers:[
      { id: 1, text: 'Chinatown', correct: false },
      { id: 2, text: 'China', correct: false },
      { id: 3, text: 'Tokio', correct: true },
      { id: 4, text: 'Coreia', correct: false }
    ]
  }
]

export default questionsData;
