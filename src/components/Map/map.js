// import React from 'react'

// const MapWrapper = React.memo(
//     () => {
//         return <div id="map-container" style={{ width: '100%', height: '100%' }}></div>;
//     },
//     () => true,
// );
// const MapGL = () => {
//     React.useEffect(() => {
//         const map = new mapgl.Map('map-container', {
//             center: [55.31878, 25.23584],
//             zoom: 13,
//             key: '/',
//         });

//         // Destroy the map, if Map component is going to be unmounted
//         return () => map.destroy();
//     }, []);

//     return (
//         <div style={{ width: '100%', height: '100%' }}>
//             <MapWrapper />
//         </div>
//     );
// };

// export default MapGL


