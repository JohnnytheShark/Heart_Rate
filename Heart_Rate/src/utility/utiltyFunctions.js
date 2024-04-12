// Function to convert degrees to radians
function toRadians(degrees) {
    return degrees * Math.PI / 180;
   }
   
   // Haversine formula to calculate distance between two points
   function haversineDistance([lat1, lon1], [lat2, lon2], isMiles = false) {
    const RADIUS_OF_EARTH_IN_KM = 6371;
    const dLat = toRadians(lat2 - lat1);
    const dLon = toRadians(lon2 - lon1);
    const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
               Math.cos(toRadians(lat1)) * Math.cos(toRadians(lat2)) *
               Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    let distance = RADIUS_OF_EARTH_IN_KM * c;
   
    if (isMiles) {
       distance /= 1.60934; // Convert to miles
    }
   
    return distance;
   }
   
   // Function to calculate total distance from an array of coordinates
   function calculateTotalDistance(coordinates, isMiles = false) {
    let totalDistance = 0;
    for (let i = 0; i < coordinates.length - 1; i++) {
       const distance = haversineDistance(coordinates[i], coordinates[i + 1], isMiles);
       totalDistance += distance;
    }
    return totalDistance;
   }
   
   // Example usage
   const coordinates = [
    [42.741, -71.3161],
    [42.806911, -71.290611],
    // Add more coordinates as needed
   ];
   
   const totalDistanceKm = calculateTotalDistance(coordinates);
   const totalDistanceMiles = calculateTotalDistance(coordinates, true);
   
   console.log(`Total distance in km: ${totalDistanceKm}`);
   console.log(`Total distance in miles: ${totalDistanceMiles}`);