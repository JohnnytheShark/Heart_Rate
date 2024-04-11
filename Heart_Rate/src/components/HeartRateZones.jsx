
import Table from '../UI/Table/Table';
import {useState,useEffect} from 'react';
import styles from '../styles/Analysis.module.scss';

export default function HeartRateZones({data}) {
  const [updatedData,updateData] = useState("");
  const [zones,updateZones] = useState("");
  const [Age] = useState(27);
  const [RestingHeartRate] = useState(60);

  useEffect(()=>{
    if (data && data.tracks && data.tracks.length > 0){
      let MaxHeartRate = 220 - Age;
      let HeartRateReserve = MaxHeartRate - RestingHeartRate;
      let zone1 = Math.round(HeartRateReserve * 0.5 + RestingHeartRate);
      let zone2 = Math.round(HeartRateReserve * 0.6 + RestingHeartRate);
      let zone3 = Math.round(HeartRateReserve * 0.7 + RestingHeartRate);
      let zone4 = Math.round(HeartRateReserve * 0.8 + RestingHeartRate);
      let zone5 = Math.round(HeartRateReserve * 0.9 + RestingHeartRate);

      updateData([{"Max Heart Rate":MaxHeartRate,"Resting Heart Rate":RestingHeartRate,"Heart Rate Reserve":HeartRateReserve,"Age":Age}]);
      updateZones([
      {"Zone":1,"Description":"Warm-Up, Recovery, Easy","Intensity":"Moderate-Low","Percentage of Max Heart Rate":"50% - 60%","Target Heart Rate (Low End)":zone1.toString() + " BPM"},
      {"Zone":2,"Description":"Aerobic, Endurance, Base, Light","Intensity":"Moderate","Percentage of Max Heart Rate":"60% - 70%","Target Heart Rate (Low End)":zone2.toString() + " BPM"},
      {"Zone":3,"Description":"Tempo, Threshold, Cardio, Moderate","Intensity":"Moderate-High","Percentage of Max Heart Rate":"70% - 80%","Target Heart Rate (Low End)":zone3.toString() + " BPM"},
      {"Zone":4,"Description":"Lactate Threshold, Redline, Hard","Intensity":"High","Percentage of Max Heart Rate":"80% - 90%","Target Heart Rate (Low End)":zone4.toString() + " BPM"},
      {"Zone":5,"Description":"Anaerobic, V02 Max, Peak, Maximum","Intensity":"Very High","Percentage of Max Heart Rate":"90% - 100%","Target Heart Rate (Low End)":zone5.toString() + " BPM"}])
    }
  },[data]);

  return (
    <div className={styles.tableContainer}>
        <h1>Decoding Heart Rate Patterns by Age</h1>
        <h3>The data shown below is based on myself at the age of {Age}.</h3>
        <Table data={updatedData} arialabel={"Heart Rate Constants"}/>
        <Table data={zones} arialabel={"Heart Rate Zones"}/>
    </div>
  )
}
