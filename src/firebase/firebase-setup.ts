import { FirebaseApp, getApp, getApps, initializeApp } from 'firebase/app'
import { Auth, getAuth, initializeAuth } from 'firebase/auth'
import { getReactNativePersistence } from 'firebase/auth/react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import firebaseConfig from './firebase-config.json'
import { Database, getDatabase } from 'firebase/database'

let app: FirebaseApp
export let auth: Auth
export let db: Database

if (getApps().length < 1) {
    app = initializeApp(firebaseConfig)
    auth = initializeAuth(app, {
        persistence: getReactNativePersistence(AsyncStorage),
    })
    db = getDatabase(app)
} else {
    app = getApp()
    auth = getAuth()
    db = getDatabase()
}
