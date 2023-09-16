import React from "react";
import QuestionItem from "./QuestionItem";


function QuestionList({questions, onUpdateQuestion, onDeleteQuestion}) {
  
    

  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>
        
        {/* display QuestionItem components here after fetching */}</ul>
        {questions.map((question) => (
        <QuestionItem key={question.id} question= {question} onUpdateQuestion= {onUpdateQuestion} onDeleteQuestion= {onDeleteQuestion} />
        ))}
        
    </section>
  );
}

export default QuestionList;
