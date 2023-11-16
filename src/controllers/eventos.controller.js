// controller.js

// Array para almacenar eventos (simulación de base de datos)
let events = [
  { id: 1, title: 'Charla sobre prevención de la violencia', date: '2023-12-01' },
  { id: 2, title: 'Taller de empoderamiento', date: '2023-12-15' },
  // Agrega más eventos según sea necesario
];

// Obtener todos los eventos
exports.getEvents = (req, res) => {
  res.json(events);
};

// Obtener un evento por su ID
exports.getEventById = (req, res) => {
  const eventId = parseInt(req.params.id);
  const event = events.find((e) => e.id === eventId);

  if (event) {
    res.json(event);
  } else {
    res.status(404).json({ message: 'Evento no encontrado' });
  }
};

// Crear un nuevo evento
exports.createEvent = (req, res) => {
  const { title, date } = req.body;

  if (!title || !date) {
    return res.status(400).json({ message: 'Se requieren título y fecha para crear un evento.' });
  }

  const newEvent = {
    id: events.length + 1,
    title,
    date,
  };

  events.push(newEvent);
  res.status(201).json(newEvent);
};

// Actualizar un evento por su ID
exports.updateEventById = (req, res) => {
  const eventId = parseInt(req.params.id);
  const event = events.find((e) => e.id === eventId);

  if (!event) {
    return res.status(404).json({ message: 'Evento no encontrado' });
  }

  const { title, date } = req.body;

  if (title) {
    event.title = title;
  }

  if (date) {
    event.date = date;
  }

  res.json(event);
};

// Eliminar un evento por su ID
exports.deleteEventById = (req, res) => {
  const eventId = parseInt(req.params.id);
  events = events.filter((e) => e.id !== eventId);

  res.json({ message: 'Evento eliminado exitosamente.' });
};
