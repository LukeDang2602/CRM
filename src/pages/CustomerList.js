import React from 'react'
import { useState, useEffect } from 'react';
import { db } from '../firebase-config'
import { collection, getDocs, addDoc, updateDoc, doc, deleteDoc } from 'firebase/firestore'

function CustomerList() {
	const [users, setUsers] = useState([]);
	const usersCollectionRef = collection(db, "users");
  
  
	const updateUser = async (id, age) => {
	  const userDoc = doc(db, "users", id);
	  const newFields = {age: age + 1};
	  await updateDoc(userDoc, newFields);
	}
  
	const deleteUser = async (id) => {
	  const userDoc = doc(db, "users", id);
	  await deleteDoc(userDoc);
	}
  
	useEffect(() => {
	  
	  const getUsers = async () => {
		const data = await getDocs(usersCollectionRef);
		setUsers(data.docs.map((doc) => ({...doc.data(), id: doc.id})))
	  }
  
	  getUsers()
	}, [])
  
	return (
	  <div className="App">
  
	   {users.map((user) => {
		return ( 
		<div> 
		<div><h1>Customer Lists: </h1></div>
		  {" "}
		  <h2>Name: {user.name}</h2>
		  <h2>Address: {user.address}</h2>
		  <h2>Phone: {user.phone}</h2>
		  <h2>Email: {user.email}</h2>
		  
		  {/* <button 
			onClick={() => {
			  updateUser(user.id, user.address, user.phone, user.email)
			}}>
			{" "}
			Increase Age
		  </button> */}
  
		  <button onClick={
			() => {deleteUser(user.id)}}>
			Delete User
		  </button>
		</div>
		
		);
	  })}
	  </div>
	  
	);
}

export default CustomerList