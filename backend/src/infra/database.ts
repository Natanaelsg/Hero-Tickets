import mongoose from 'mongoose';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";


export async function connect() {
    try {
        await mongoose.connect('mongodb+srv://nael:xWiIEM3xiBgJJDe2@cluster0.oklae6p.mongodb.net/hero')
        console.log('Conectado com sucesso!');
    } catch (error) {
        console.log(" ~ file : database ts : 5 ~ connect ~ error:", error);
        
    }
}
