// TO-DO: Create a Controlled field where a users input persists
import Note from './Note'
// this class is responsible for returning a standard format to the notes, so they are similar no matter what values are passed to it
class Note{
    constructor(val){
        this.title = val.title ?? 'default title'
        this.text = val.text ?? 'default text content'
        this.time = Date.now()
    }
    // there is an easier way for default returns 
    getNote(){
        return {
            title: this.title,
            text: this.text,
            time: this.time
        }
    }
}

const Form = (props) => {
    const [title, setTitle] = React.useState()
    const [text, setText] = React.useState()

    const handleAdd = () => {
        props.onAdd({title, text})
    }

    return(
        <>
            <input value={title} onChange={e => setTitle(e.target.value)} />
            <input value={text} onChange={e => setText(e.target.value)} />
            <button onClick={handleAdd}>Submit</button>
        </>
        )
}


const Home = () => {
    const [notes, setNotes] = React.useState(()=>localStorage.getItem('notes'))

    const onAdd = (value) => {
        setNotes(prevState => {
            return [
                ...prevState,
                // generate a new note with defaults based on this class
                new Note(value).getNote()
            ]
        })
    }

    return (
        <>
            <h1>Title</h1>
            {/* pass the add note function to the form, so it can be called from form */}
            <Form onAdd={onAdd}/>
            {/* map over the array of notes and return the element */}
            {notes.map(n => <Note content={n} />)}


        </>
    )
}

export default Form