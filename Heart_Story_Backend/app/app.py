from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route('/upload-gpx', methods=['POST'])
def upload_gpx():
    if 'file' not in request.files:
        return jsonify({'error': "No File Sent Over"}), 400
    file = request.files['file']
    if file.filename == '':
        return jsonify({'error': 'No selected file'}),400
    if file and file.filename.endswith('.gpx'):
        gpx = gpxpy.parse(file)
        data = {
            'waypoints': [],
            'tracks': [],
            'routes': []
        }
        for waypoint in gpx.waypoints:
            data['waypoints'].append({
                'name': waypoint.name,
                'latitude': waypoint.latitude,
                'longitude': waypoint.longitude,
                'elevation': waypoint.elevation,
                'time': waypoint.time.isoformat() if waypoint.time else None
            })

        for track in gpx.tracks:
            track_data = {
                'name': track.name,
                'segments': []
            }
        for segment in track.segments:
            segment_data = []
            for point in segment.points:
                segment_data.append({
                    'latitude': point.latitude,
                    'longitude': point.longitude,
                    'elevation': point.elevation,
                    'time': point.time.isoformat() if point.time else None
                })
            track_data['segments'].append(segment_data)
        data['tracks'].append(track_data)

        for route in gpx.routes:
            route_data = {
                'name': route.name,
                'points': []
            }
            for point in route.points:
                route_data['points'].append({
                    'latitude': point.latitude,
                    'longitude': point.longitude,
                    'elevation': point.elevation,
                    'time': point.time.isoformat() if point.time else None
                })
            data['routes'].append(route_data)

        return jsonify(data), 200
    else:
        return jsonify({'error':'Unsupported file type'}), 400
    
if __name__ == '__main__':
    app.run(debug=True)