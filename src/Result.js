// Result.js

import React, { useMemo } from 'react';
import { Typography, Card, CardContent, CardActions, Button } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import questions  from './data/questions'; 

export default function Result() {
    const answers = useSelector((state) => state.answers);
    const dispatch = useDispatch();

    const correctAnswers = useMemo(() => {
        return questions.filter((q, i) => {
            return q.correctAnswer === parseInt(answers[i]);
        }).length;
    }, [answers]);

    const restartQuiz = () => {
        dispatch({ type: 'RESET_QUIZ' });
        // Perform any other necessary actions for resetting the quiz state
    };

    return (
        <Card variant='outlined' sx={{ pt: 3, pb: 3 }}>
            <CardContent>
                <Typography sx={{ display: "flex", justifyContent: "center", mb: 3 }} variant="h4" color="text.secondary">
                    Result
                </Typography>
                <Typography sx={{ display: "flex", justifyContent: "center", mb: 3 }} variant="h4" color="text.secondary">
                    {correctAnswers} / {questions.length}
                </Typography>
            </CardContent>
            <CardActions sx={{ display: "flex", justifyContent: "center" }}>
               
            </CardActions>
        </Card>
    )
}
