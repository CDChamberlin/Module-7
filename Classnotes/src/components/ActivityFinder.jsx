import { useState, useEffect } from "react";
import { useData } from "../hooks/useData";
function ActivityFinder() {
  // Fetches a random activity
  const [participants, setParticipants] = useState(1);
  const data = useData(`https://www.boredapi.com/api/activity?participants=${participants}`);
 {/* const [activity, setActivity] = useState("");
  useEffect(() => {
    console.log('Running Effect')
    let ignore = false
    fetch(
      "https://www.boredapi.com/api/activity?" + "participants=" + participants
    )
      .then((response) => response.json())
      .then((json) => {
        if (!ignore)
        setActivity(json.activity);
      });
      return () => {
        ignore = true
        console.log('Cleanup effect')
      }
  }, [participants]);
*/}
  const activity = data ? data.activity : 'not Found'
  return (
    <div className="ActivityFinder componentBox">
      <h3>Activity Finder</h3>
      <label>
        Choose number of participants:
        <select
          value={participants}
          onChange={(e) => setParticipants(e.target.value)}
        >
          <option>1</option>
          <option>2</option>
          <option>3</option>
        </select>
      </label>
      <div>
        <strong>Suggested Activity: </strong>
        {activity}
      </div>
    </div>
  );
}
export default ActivityFinder;
