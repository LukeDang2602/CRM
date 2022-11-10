import React, { useState } from 'react'
import { collection, addDoc } from 'firebase/firestore'
import { db } from '../firebase-config'

export default function CreateTask() {
    //create a task object 
    let taskObj ={
        text: '',
        date: '',
        status: '',
        customer:''
    };

    //get task collection from firestore database
    const taskRef = collection(db, "tasks");
    
    function addTask(e){
        taskObj.text = e.target.value
    };

    function addDate(e){
        taskObj.date = e.target.value
    };

    function addStatus(e){
        taskObj.status = e.target.value
    };

    let addCustomer = (e) => {taskObj.customer = e.target.value}
    
    return (
        <div>
            <h1>Create a task </h1>    
            <form>
                <input placeholder='Task...' onChange={addTask} />
                <br/>
                <input type='Date' placeholder='Date...' onChange={addDate} />
            </form> 
        </div>
    );
}