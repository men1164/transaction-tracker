import { collection, onSnapshot } from "firebase/firestore"
import { useEffect, useState } from "react"
import { projectFirestore } from "../firebase/config"

export const useCollection = collectionName => {
  const [documents, setDocuments] = useState(null)
  const [error, setError] = useState(null)

  useEffect(() => {
    let ref = collection(projectFirestore, collectionName)

    const unsub = onSnapshot(ref, snap => {
      let results = []
      snap.docs.forEach(doc => {
        // doc.data().createdAt && results.push({ ...doc.data(), id: doc.id })
        results.push({ ...doc.data(), docId: doc.id })
      })

      setDocuments(results)
      setError(null)
    }, err => {
      console.log(err)
      setError('Could not fetch the data')
    })

    return () => unsub()

  }, [collectionName])

  return { documents, error }
}