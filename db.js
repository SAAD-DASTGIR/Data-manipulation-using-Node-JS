import fs from 'node:fs/promises'
const DB_PATH = new URL('../db.json',import.meta.url).pathname

export const GetDB = async() => {
    const db= await fs.readFile(DB_PATH,'utf-8')
    return JSON.parse(db)
} 

export const SaveDB = async(db)=>{
    fs.writeFile(DB_PATH,JSON.stringify(db))
    return(db)
}

export const InsertDb = async(note)=>{
    const db= await GetDB()
    db.notes.push(note)
    await SaveDB(db)
    return note
}

