import React, { useState, useRef } from 'react';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../firebase-config';
import '../styles/createTask.css';

export default function CreateTask() {
    //declare states
    const [task,setTask] = useState("");
    const taskRef = useRef();
    const [date,setDate] = useState("");
    const dateRef = useRef();
    const [priority,setPriority] = useState("");
    const priorityRef = useRef();

    //get task collection from firestore database
    const taskCollectionRef = collection(db, "tasks");
    
    async function handleCreateTask(){

        //add task object to firestore
        try{
            const docRef = await addDoc(taskCollectionRef,{
                task: task,
                date: date,
                status: "",
                priority: priority,
                customer: ""
            });
            console.log("Document wrritten with ID: ", docRef.id);
            
            //clear inputs
            taskRef.current.value = null;
            dateRef.current.value = null;
            priorityRef.current.value = null;

            //clear states
            setTask("");
            setDate("");
            setPriority("");

        }catch(e){
            console.error("Error adding document: ", e);
        } 
        
    };

    return(
        <div class="formDiv">
            <h1>Create a task</h1>   
            <form class="taskForm">
                <text class="formLabels">Task</text><br/>
                <input class="input" placeholder='Enter a task' ref={taskRef} onChange={e => {setTask(e.target.value);}}/> 
                <br/><text class="formLabels">Date</text><br/>
                <input class="input" type='Date' ref={dateRef} onChange={e => {setDate(e.target.value)}}/>
                <br/><text class="formLabels">Priority</text><br/>
                <select class="input" name="priority" ref={priorityRef} onChange={e => {setPriority(e.target.value)}}>
                        <option value="Low Priorty">Low Priority</option>
                        <option value="Medium Priority">Medium Priority</option>
                        <option value="High Priority">High Priority</option>
                </select>
                <br/><br/>
                <button type="button" onClick={handleCreateTask}>Submit</button>
            </form>
        </div>
    );
}

