import { useEffect, useRef } from 'react';

const GoogleMap = () => {
  const mapContainerRef = useRef(null);

  useEffect(() => {
    const apiKey = "AIzaSyAw-ekB6N5mH_0eXG7eGopUoZkl3w0oIhY"; // Reemplaza con tu propia API key

    // Cargar el script de Google Maps
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&callback=initMap`;
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);

    // Función para inicializar el mapa
    window.initMap = () => {
      new google.maps.Map(mapContainerRef.current, {
        center: { lat: -12.192621, lng: -76.944743 }, // Cambia las coordenadas si es necesario
        zoom: 20,
      });
    };

    return () => {
      // Limpiar el script cuando se desmonte el componente
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div
      ref={mapContainerRef}
      style={{ width: '100%', height: '500px' }}
    ></div>
  );
};

export default GoogleMap;
