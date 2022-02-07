import { addDoc, collection } from "firebase/firestore"
import { useEffect, useReducer, useState } from "react"
import { projectFirestore } from "../firebase/config"

let initialState = {
  document: null,
  isPending: false,
  error: null,
  success: null
}

const firestoreReducer = (state, action) => {
  switch(action.type) {
    default:
      return state
  }
}

export const useFirestore = (collectionName) => {
  const [response, dispatch] = useReducer(firestoreReducer, initialState)
  const [isCancelled, setIsCancelled] = useState(false)

  const ref = collection(projectFirestore, collectionName)

  const addDocument = (document) => {

  }

  const deleteDocument = (id) => {

  }

  useEffect(() => {
    return () => setIsCancelled(true)
  }, [])

  return { addDocument, deleteDocument, response }
}