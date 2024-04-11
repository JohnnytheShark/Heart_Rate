import HeartRate from "../components/HeartRate"
import HeartRateZones from "../components/HeartRateZones"
import data from '../example-data/MarthonRun.json'
import styles from '../styles/Analysis.module.scss'

export default function Analysis() {
  return (
    <div className={styles.details}>
      <HeartRate data={data}/>
      <HeartRateZones data={data}/>
    </div>
  )
}
