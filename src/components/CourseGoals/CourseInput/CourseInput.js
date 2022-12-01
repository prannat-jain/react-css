import React, { useState } from "react";
import styled from "styled-components";
import Button from "../../UI/Button/Button";
import "./CourseInput.css";

//creating two components in one file using styledcomponents
const FormControl = styled.div`
   {
    margin: 0.5rem 0;
  }

  & label {
    font-weight: bold;
    display: block;
    margin-bottom: 0.5rem;
  }

  & input {
    display: block;
    width: 100%;
    border: 1px solid #ccc;
    font: inherit;
    line-height: 1.5rem;
    padding: 0 0.25rem;
  }

  & input:focus {
    outline: none;
    background: #f3e6ef;
    border-color: #8b005d;
  }

  &.invalid input {
    border-color: red;
    background: rgb(255, 185, 185);
  }

  &.invalid label {
    color: red;
  }
`;

const CourseInput = (props) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [inputValid, setInputValid] = useState(true);

  const goalInputChangeHandler = (event) => {
    if (event.target.value.trim().length > 0) {
      //if input is correct, revert boolean in state and color changes back to transparent
      setInputValid(true);
    }
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();

    //trim removes all whitespace.....so if nothing is input, just return
    if (enteredValue.trim().length === 0) {
      //input is invalid so set:
      setInputValid(false);

      return;
    }
    props.onAddGoal(enteredValue);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      {/*in react we can have className change dynamically*/}
      {/* backticks construct a string, i.e anything inside them becomes a string......${} in this we can put any JS and that get converted to string by backticks*/}

      <FormControl className={!inputValid && "invalid"}>
        {/*if input invalid label is red*/}
        <label>Course Goal</label>
        <input type="text" onChange={goalInputChangeHandler} />
      </FormControl>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
