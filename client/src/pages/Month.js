import React, { useState, useEffect, useRef } from "react";
import { Container } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { GET_ME } from "../utils/queries";

const Month = (props) => {
    const { loading, data, refetch } = useQuery(GET_ME);
    const todos = data?.me || [];
    const thisMonthNotes = todos.savedTodos;
    var renderMonthlyReview;
    var monthId;

    console.log(thisMonthNotes);

    if (todos.savedTodos) {
        renderMonthlyReview = true;

        if (!loading) {
            // var thisMonthTodo = todos.savedTodos.filter(todo => todo.date === monthId)
            //if they have ever posted before, they can see the notes section. We link part of the prop in the note section, and if they dont have todos it'll break
        }
    }

    if (!thisMonthNotes) {
        return <h3>No notes for this month yet.</h3>;
    }

    return (
        <>
            <Container className="wholeCon">
                <div className="todolDiv text-center">
                    {renderMonthlyReview ? (
                        <div className="col-12 col-md-8 mb-3">
                            {loading ? (
                                <div>Loading...</div>
                            ) : (
                                <ol>
                                    {thisMonthNotes.map((todo) => (
                                        <li className=" d-flex mb-1 listItem" key={todo._id}>
                                            {todo.task}
                                        </li>
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
