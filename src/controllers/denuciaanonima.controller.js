// denunciaAnonima.controller.js

export const enviarDenunciaAnonima = (req, res) => {
  // Aquí procesas la denuncia anónima y realizas acciones necesarias
  const denunciaAnonima = req.body;

  // Puedes almacenar la denuncia en la base de datos o realizar otras acciones
  console.log('Denuncia Anónima recibida:', denunciaAnonima);

  res.json({ message: 'Denuncia Anónima recibida exitosamente.' });
};

