import styles from '../styles/Home.module.scss';
import {Form} from 'react-router-dom';

function Home() {

  return (
    <div className={styles.details}>
    <div>
    <h1>Heart 🫀 Story</h1>
      <p>Still working on branding for this application, but here is the broad overview.
        I wanted to create an application that would allow me to better visualize my runs, workouts, and sprints. 
        This came out of a desire to understand my heart. Long story short, I was born with a heart condition, underwent surgery for it, and now I just want to understand what makes my heart tick during workouts.
      </p>
    </div>
    <br/>
    <div>
      <h2>Upload your GPX File Here:</h2><br/>
      <Form method="post" className={styles.gpxForm}>
      <label>Age:</label><br/>
      <input type="number" step="1" maximum="140" defaultValue={20}/><br/>
      <label>GPX File:</label><br/>
      <input type="file" name="uploaded_file" accept=".gpx" />
      <button>Submit</button>
      </Form>
    </div>
    <div>
      <h3>Disclaimer</h3>
      <p>This app visualizes data from GPX files, which may include heart rate data. The app does not analyze or interpret this data for medical purposes. Heart rate is an individual metric, and users should not rely on it for diagnosing or treating any medical conditions. We recommend consulting with a healthcare professional before using this app to make decisions about your exercise routine or if you have any health concerns.</p>
    </div>
    <div>
      <h3>Privacy Disclaimer</h3>
      <p>Privacy Disclaimer: This app prioritizes your privacy. We do not store any of the GPX data you upload, including location, elevation, or heart rate information. The app utilizes a secure API to convert your GPX file to a temporary JSON format for visualization purposes only. This temporary data is discarded after use and not retained by our servers.</p>
    </div>
    </div>
  )
}

export default Home
