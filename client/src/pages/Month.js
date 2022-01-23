import React, { useState, useEffect, useRef } from "react";
import { Container } from "react-bootstrap";
import { useQuery } from "@apollo/client";
import { GET_ME } from "../utils/queries";
import dateHelp from '../utils/dateHelp';

const Month = (props) => {
    const { loading, data, refetch } = useQuery(GET_ME);
    const todos = data?.me || [];
    var allTodos = todos.savedTodos;

    const year = dateHelp.getYear();
    const day = dateHelp.getDay();
    const monthLetters = dateHelp.getMonthLetters();
    const monthNumber = dateHelp.monthConversion(monthLetters);
    const thisMonth = monthNumber;
    const fullNameMonth = dateHelp.monthFullName(thisMonth);
    console.log(fullNameMonth)
   

    var renderMonthlyReview;
    var monthId;
    

   



    if (allTodos) {
        renderMonthlyReview = true;


        if (!loading) {
            //gets all the todos that were created this month
            var thisMonthTodo = allTodos.filter(todo => dateHelp.getMonth(todo.date) === thisMonth)
           console.log(thisMonthTodo, "this")
        }
    }

    if (!allTodos) {
        return <h3>No notes for this month yet.</h3>;
    }

    return (
        <>
            <Container className="wholeCon">
                <div className="todolDiv">
                    {renderMonthlyReview ? (
                        <div className="col-12 col-md-8 mb-3">
                            {loading ? (
                                <div>Loading...</div>
                            ) : (

                                <ol>{fullNameMonth} To-Dos
                                    {thisMonthTodo.map((todo) => (

                                        todo.isComplete ? (
                                            <li className=" d-flex mb-1 listItem" key={todo._id}>  ✔ {todo.task} {todo.date}</li>
                                        ) : (
                                            <li className=" d-flex mb-1 listItem" key={todo._id}>  ✖ {todo.task} {todo.date}</li>
                                        )

                                    ))
                                    }
                                </ol>
                            )}
                        </div>
                    ) : (
                        <div>Add a note to a date to see your monthly review!</div>
                    )}
                </div>
            </Container>
        </>
    );
};

export default Month;
