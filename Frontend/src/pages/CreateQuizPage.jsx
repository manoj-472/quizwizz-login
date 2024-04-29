
import React, { useState } from 'react';

const CreateQuizPage = () => {
  const [quizName, setQuizName] = useState('');
  const [quizDescription, setQuizDescription] = useState('');
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState({
    question: '',
    type: 'MCQ',
    options: [],
    answer:'',
    marks: 1
  });
 
  const handleQuestionChange = (e) => {
    setCurrentQuestion({
      ...currentQuestion,
      [e.target.name]: e.target.value
    });
  };

  const handleOptionChange = (e, index) => {
    const updatedOptions = [...currentQuestion.options];
    updatedOptions[index] = e.target.value;
    setCurrentQuestion({
      ...currentQuestion,
      options: updatedOptions
    });
  };

  const handleAddOption = () => {
    setCurrentQuestion({
      ...currentQuestion,
      options: [...currentQuestion.options, '']
    });
  };

  const handleRemoveOption = (index) => {
    const updatedOptions = [...currentQuestion.options];
    updatedOptions.splice(index, 1);
    setCurrentQuestion({
      ...currentQuestion,
      options: updatedOptions
    });
  };

  const handleAddQuestion = () => {
    setQuestions([...questions, currentQuestion]);
    setCurrentQuestion({
      question: '',
      type: 'MCQ',
      options: [],
      answer: '',
      marks: 1
    });
  };

  const handleRemoveQuestion = (index) => {
    const updatedQuestions = [...questions];
    updatedQuestions.splice(index, 1);
    setQuestions(updatedQuestions);
  };

  const handleSaveQuiz = () => {
    // Here you can save the quiz data to your backend or wherever you need
    const quizData = {
      name: quizName,
      description: quizDescription,
      questions: questions
    };
    console.log(quizData);
    // You can add further logic to save the data as required
  };

  return (
    <div>
      <h1>Create Quiz</h1>
      <label>
        Quiz Name:
        <input type="text" value={quizName} onChange={(e) => setQuizName(e.target.value)} />
      </label>
      <br />
      <label>
        Quiz Description:
        <textarea value={quizDescription} onChange={(e) => setQuizDescription(e.target.value)} />
      </label>
      <br />
      {questions.map((q, index) => (
        <div key={index}>
          <h3>Question {index + 1}</h3>
          <p>Question: {q.question}</p>
          <p>Type: {q.type}</p>
          {q.type === 'MCQ' && (
            <>
              <p>Options:</p>
              <ul>
                {q.options.map((option, i) => (
                  <li key={i}>{option}</li>
                ))}
              </ul>
            </>
          )}
          <p>Answer: {q.answer}</p>
          <p>Marks: {q.marks}</p>
          <button onClick={() => handleRemoveQuestion(index)}>Remove Question</button>
        </div>
      ))}
      <div>
        <h3>Add New Question</h3>
        <label>
          Question:
          <input type="text" name="question" value={currentQuestion.question} onChange={handleQuestionChange} />
        </label>
        <br />
        <label>
          Question Type:
          <select name="type" value={currentQuestion.type} onChange={handleQuestionChange}>
            <option value="MCQ">Multiple Choice Question</option>
            <option value="LA">Long Answer</option>
            <option value="SA">Short Answer</option>
          </select>
        </label>
        <br />
        {currentQuestion.type === 'MCQ' && (
          <>
            {currentQuestion.options.map((option, index) => (
              <div key={index}>
                <label>
                  Option {index + 1}:
                  <input type="text" value={option} onChange={(e) => handleOptionChange(e, index)} />
                </label>
                <button onClick={() => handleRemoveOption(index)}>Remove Option</button>
              </div>
            ))}
            <button onClick={handleAddOption}>Add Option</button>
          </>
        )}
        <br />
        {/* {currentQuestion.type !== 'MCQ' && ( */}
          <label>
            Answer Option:
            <input type="text" name="answer" value={currentQuestion.answer} onChange={handleQuestionChange} />
          </label>
        {/* )} */}
        <br />
        <label>
          Marks:
          <input type="number" name="marks" value={currentQuestion.marks} onChange={handleQuestionChange} />
        </label>
        <br />
        <button onClick={handleAddQuestion}>Add Question</button>
      </div>
      <button onClick={handleSaveQuiz}>Save Quiz</button>
    </div>
  );
};

export default CreateQuizPage;
