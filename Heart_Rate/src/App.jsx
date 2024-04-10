import './App.css'

function App() {

  return (
    <>
    <div>
    <h1>Heart 🫀 Story</h1>
      <p>Still working on branding for this application, but here is the broad overview.
        I wanted to create an application that would allow me to better visualize my runs, workouts, and sprints. 
        This came out of a desire to understand my heart. Long story short, I was born with a heart condition, underwent surgery for it, and now I just want to understand what makes my heart tick during workouts.
      </p>
    </div>
    <div>
      <h2>Upload your GPX File Here:</h2>
      <input type="file" name="uploaded_file" accept=".gpx" />
      <button>Submit</button>
    </div>

    </>
  )
}

export default App
