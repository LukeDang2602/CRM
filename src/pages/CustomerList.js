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
  		<div><h1>Customer List: </h1></div>
		  <label>Name</label>
		  <label>Address</label>
		  <label>Phone</label>
		  <label>Email</label>

	   {users.map((user) => {
		return ( 
		<div> 
		{" "}  
		<div>
		  <customer>{user.name}</customer>
		  <customer>{user.address}</customer>
		  <customer>{user.phone}</customer>
		  <customer>{user.email}</customer> 
		  <button onClick={
			() => {deleteUser(user.id)}}>
			Delete User
		  </button>
		</div>

		  {/* <button 
			onClick={() => {
			  updateUser(user.id, user.address, user.phone, user.email)
			}}>
			{" "}
			Increase Age
		  </button> */}		
		  
		</div>
		
		);
	  })}
	  </div>
	  
	);
}

export default CustomerList