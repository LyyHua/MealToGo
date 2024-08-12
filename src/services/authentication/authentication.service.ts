import { signInWithEmailAndPassword } from "firebase/auth";

export const loginRequest = (auth: any, email: string, password: string) =>
  signInWithEmailAndPassword(auth, email, password);
