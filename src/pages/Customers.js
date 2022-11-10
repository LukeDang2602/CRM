import React from 'react'
import { useState, useEffect } from 'react';
import { db } from '../firebase-config'
import { collection, getDocs, addDoc, updateDoc, doc, deleteDoc } from 'firebase/firestore'

function Customers() {
	const [newName, setNewName] = useState("");
	const [newAddress, setNewAddress] = useState("");
	const [newPhone, setNewPhone] = useState("");
	const [newEmail, setNewEmail] = useState("");
  
	const [users, setUsers] = useState([]);
	const usersCollectionRef = collection(db, "users");
  
	const createUser = async () => {
	  await addDoc(usersCollectionRef, {
		name: newName,
		address: newAddress,
		phone: newPhone,
		email: newEmail
	});
	};
  
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
		<div><h1>Create Customer</h1></div>
		<div>
			<input placeHolder ="Name..." 
				onChange={(event) => {
				setNewName(event.target.value);
			}}/>
		</div>

		<div>
			<input placeHolder ="Address..." 
				onChange={(event) => {
				setNewAddress(event.target.value);
			}}/>
		</div>

		<div>
			<input placeHolder ="Phone..." 
				onChange={(event) => {
				setNewPhone(event.target.value);
			}}/>
		</div>

		<div>
			<input placeHolder ="Email..." 
				onChange={(event) => {
				setNewEmail(event.target.value);
			}}/>
		</div>
		
		<button onClick={createUser}>Create User</button>
  
	   {users.map((user) => {
		return ( 
		<div> 
		  {/* {" "}
		  <h1>Name: {user.name}</h1>
		  <h1>Address: {user.address}</h1>
		  <h1>Phone: {user.phone}</h1>
		  <h1>Email: {user.email}</h1> */}
		  
		  {/* <button 
			onClick={() => {
			  updateUser(user.id, user.address, user.phone, user.email)
			}}>
			{" "}
			Increase Age
		  </button> */}
  
		  {/* <button onClick={
			() => {deleteUser(user.id)}}>
			Delete User
		  </button> */}

		</div>
		
		);
	  })}
	  </div>
	  
	);
}


export default Customers