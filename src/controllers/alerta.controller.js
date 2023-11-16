// geolocalizacionController.js
export const obtenerCoordenadas = (req, res) => {
    const { latitud, longitud } = req.body;
  
    // Aquí puedes realizar acciones con las coordenadas, como almacenarlas en una base de datos.
    
    res.json({ mensaje: 'Coordenadas recibidas con éxito.' });
  };
  