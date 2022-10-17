import React from 'react'
import { useState, useEffect } from 'react';
import { db } from '../firebase-config'
import { collection, getDocs, addDoc, updateDoc, doc, deleteDoc } from 'firebase/firestore'

function CreateCustomer(username) {
	const [newName, setNewName] = useState(username);
	const [newAge, setNewAge] = useState(0);
  
	const [users, setUsers] = useState([]);
	const usersCollectionRef = collection(db, "users");
  
	const createUser = async () => {
	  await addDoc(usersCollectionRef, {name: username, age: Number(newAge) });
	};
    
	useEffect(() => {
	  
	  const getUsers = async () => {
		const data = await getDocs(usersCollectionRef);
		setUsers(data.docs.map((doc) => ({...doc.data(), id: doc.id})))
	  }
  
	  getUsers()
	}, [])

}

export default CreateCustomer