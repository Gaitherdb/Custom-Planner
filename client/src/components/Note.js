//note div will act as the parent div for the note component

const Note = () => {
    return <div className='note'>
        <span>Whad up, this is a test for the first note.</span>
        <div className='note-footer'>
            <small>11/02/2021</small>
        </div>
        </div>;
};

export default Note;

// Lines 17 - 26 will go in App.Js or where applicable for run. This will import the note group into the application. 

//import NotesGroup from './components/NotesGroup';

// const App = () => {
//  return (
//    <div class Name= 'container'>
//   </div>
//  );
//};

//export default App;