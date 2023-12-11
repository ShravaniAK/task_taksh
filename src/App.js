import React, { useState } from "react";
import { CssBaseline, Box, Container, Button, TextField, Typography, Grid } from "@mui/material";
import { lightBlue } from "@mui/material/colors";
import { Provider } from "react-redux";
import store from "./store";
import QuestionCard from "./QuestionCard";
import Result from "./Result";
import questions from "./data/questions";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [selectedExam, setSelectedExam] = useState(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState([]);
  const finishedQuiz = currentQuestionIndex === questions.length;
  const currentQuestion = questions[currentQuestionIndex];

  const handleLogin = () => {
    
    setLoggedIn(true);
  };

  const handleExamSelection = (exam) => {
    setSelectedExam(exam);
    
    setCurrentQuestionIndex(0);
    setAnswers([]);
  };

  const goToNext = () => {
    setCurrentQuestionIndex((prevState) => prevState + 1);
  };

  const submitAnswer = (value) => {
    setAnswers((prevState) => [...prevState, value]);
    goToNext();
  };

  const restartQuiz = () => {
    setCurrentQuestionIndex(0);
    setAnswers([]);
    setSelectedExam(null);
  };

  if (!loggedIn) {
    return (
      
      <div>
        <CssBaseline />
        <Box sx={{ backgroundColor: lightBlue[500], height: "100vh", display: "flex", alignItems: "center" }}>
          <Container maxWidth="sm">
            <Grid container spacing={2} justifyContent="center" alignItems="center" textAlign="center">
              <Grid item xs={12}>
                <Typography variant="h4"> User Login</Typography>
              </Grid>
              <Grid item xs={12}>
                <TextField label="Username" variant="outlined" fullWidth margin="normal" />
              </Grid>
              <Grid item xs={12}>
                <TextField label="Password" variant="outlined" type="password" fullWidth margin="normal" />
              </Grid>
              <Grid item xs={12}>
                <Button variant="contained" color="primary" onClick={handleLogin}>Login</Button>
              </Grid>
            </Grid>
          </Container>
        </Box>
      </div>
    );
  }

  return (
    <Provider store={store}>
    <div>
      <CssBaseline />
      <Box sx={{ backgroundColor: lightBlue[500], height: "100vh", display: "flex", alignItems: "center" }}>
        <Container maxWidth="sm">
          {!selectedExam ? (
            <Grid container spacing={2} justifyContent="center" alignItems="center" textAlign="center">
              <Grid item xs={12}>
                <Typography variant="h4">Select an Exam</Typography>
              </Grid>
              <Grid item xs={12}>
                <Button variant="contained" color="primary" onClick={() => handleExamSelection("Exam A")}>Exam A</Button>
              </Grid>
              <Grid item xs={12}>
                <Button variant="contained" color="primary" onClick={() => handleExamSelection("Exam B")}>Exam B</Button>
              </Grid>
              
            </Grid>
          ) : (
            finishedQuiz ? (
              <Result restartQuiz={restartQuiz} answers={answers} />
            ) : (
              <QuestionCard
                question={currentQuestion}
                questionNumber={currentQuestionIndex + 1}
                submitAnswer={submitAnswer}
              />
            )
          )}
        </Container>
      </Box>
    </div>
     </Provider>
  );
}

export default App;
