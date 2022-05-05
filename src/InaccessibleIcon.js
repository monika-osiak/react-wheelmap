import L from 'leaflet'

const InaccessibleIcon = () => {
    return L.icon({
        iconUrl: require('./static/inaccessible-marker.png'),
        iconSize: [30, 30]
    })
}
 
export default InaccessibleIcon;