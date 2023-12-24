import { SaveDB,InsertDb,GetDB } from "./db";

export const newNote= async (notes,tags)=>{
    const newNote={
        tags,
        id:Date.now(),
        content: note,
    }
    await InsertDb(newNote)
    return newNote
    

}
export const GetAllNote =async()=>{
    const {notes}=await GetDB()
    return notes
}
export const findNotes= async (filter)=>{
    const {notes}=await GetDB()
    return notes.filter(note=>note.content.toLowerCase().includes(filter.toLowerCase))

}
export const RemoveNote =async()=>{
    const {notes}= await GetDB()
    const match=notes.find(note=> (note.id)===id )

    if (match) {
        const newNotes= notes.filter(note=>note.id !== id)
        await SaveDB({notes: newNotes})
        return id
    }
}
export const removeAllNotes =async()=> SaveDB({notes:[]})
