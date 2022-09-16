import { initializeApp } from "firebase/app";

import {
      getAuth, 
      createUserWithEmailAndPassword,
      signInWithEmailAndPassword,
      signOut,
      onAuthStateChanged
    } from "firebase/auth"

import {getFirestore, doc, getDoc, setDoc, collection, writeBatch, query, getDocs} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyBI7OyzHc3MYWghfFvrCHC6DQmVyIiYy3w",
  authDomain: "netflix-clone-143f1.firebaseapp.com",
  projectId: "netflix-clone-143f1",
  storageBucket: "netflix-clone-143f1.appspot.com",
  messagingSenderId: "1041815498601",
  appId: "1:1041815498601:web:29cb4c26f3d0c13bb417f8"
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);

export const auth = getAuth()
export const db = getFirestore()

export const addCollectionAndDocuments = async(collectionKey, objectsToAdd) => {
  const collectionRef = collection(db, collectionKey)
  const batch = writeBatch(db)

  objectsToAdd.forEach(object => {
    const docRef = doc(collectionRef, object.category)
    batch.set(docRef, object)
  })
  await batch.commit()
}

export const getCategoriesAndDocuments = async () => {
  const collectionRef = collection(db, "categories")
  const q = query(collectionRef)

  const querySnapshot = await getDocs(q)
  const categoriesMap = querySnapshot.docs.reduce((acc, docSnapshot) => {
    const {category, items} = docSnapshot.data()
    acc[category] = items
    return acc
  }, {})

  return categoriesMap
}

export const createUserDocumentFromAuth = async(userAuth, additionalInfo={}) => {
  if (!userAuth) return
  const userDocRef = doc(db, 'users', userAuth.uid)

  //console.log(userDocRef) 

  const userSnapshot = await getDoc(userDocRef)
  // console.log(userSnapshot)
  // console.log(userSnapshot.exists())

  if(!userSnapshot.exists()){
      const {displayName, email} = userAuth
      const createdAt = new Date()

      try {
          await setDoc(userDocRef, {
              displayName,
              email,
              createdAt,
              ...additionalInfo
          })
      } catch (error){
          console.log(error.message)
      }

  }
  return userDocRef

}

export const createAuthUserWithEmailAndPassword = async (email, password)=>{
  if(!email || !password) return

  return await createUserWithEmailAndPassword(auth, email, password)
}

export const signInAuthUserWithEmailAndPassword = async (email, password)=>{
  if(!email || !password) return

  return await signInWithEmailAndPassword(auth, email, password)
}

export const signOutUser = async () =>  await signOut(auth)

export const onAuthStateChangedListener = (callback) => onAuthStateChanged(auth, callback)
 