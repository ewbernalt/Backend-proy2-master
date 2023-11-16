import { pool } from '../connection.js'

export const getPersona = async (req, res) => {
    
    try{
        const result = await pool.query('select * from persona;');
        res.json(result);
        console.log(result[0])
    }
    catch(e){
        return res.status(500).json({
            message:"Ocurrio un error en getPersona"
        })
    }
}


export const createPersona = async(req, res)=>{
   try {
        const {ci, nombre, paterno, materno,  telf, civil, fecnac, sexo, ocupacion, nacionalidad}=req.body;
        const response = await pool.query('insert into persona(ci, nombre, paterno, materno, telf, fecnac, civil, sexo, ocupacion, nacionalidad) values(?, ?, ?, ?, ?, ?, ?, ?, ?, ?);', [ci, nombre, paterno, materno, telf,  fecnac, civil, sexo, ocupacion, nacionalidad]);
        
        res.send({
            ci,nombre, paterno, materno, telf, fecnac, civil, sexo, ocupacion, nacionalidad
        });
   } catch (error) {
    return res.status(500).json({
        message:error
    })
   }
}

export const getPersonasByCi = async(req, res) => {
    try {
        const ci=req.params.ci;
        const response =await pool.query('select * from persona where ci=?;', [ci])
        
        //console.log(response)
        if(response[0].length===0) return res.status(404).json({
            message:"Persona no encontrada"
        })
        res.json(response[0]);
    } catch (error) {
        return res.status(500).json({
            message:"Ocurrio un error en getPersonasByCi"
        })
    }
    
}

export const deletePersona = async(req, res) => {
    try {
        const ci=req.params.ci;
        const response = await pool.query('delete from persona where ci=?',[ci])
        //console.log(response);
        if(response[0].affectedRows===0) return res.status(404).json({
            message:"Persona no encontrada"
        })
        res.send(`La persona ${ci} a sido eliminado`);
    } catch (error) {
        return res.status(500).json({
            message:"Ocurrio un error en deletePersona"
        })
    }
}

export const updatePersona = async(req, res) => {
    try {
        const ci=req.params.ci;
        const {nombre, paterno, materno, sexo, fecnac}=req.body;
        const response = await pool.query('update persona set nombre=IFNULL(?, nombre), paterno=IFNULL(?, paterno), materno=IFNULL(?,materno), sexo=IFNULL(?, sexo), fecnac=IFNULL(?, fecnac) where ci=?',[
            nombre,
            paterno, 
            materno, 
            sexo, 
            fecnac,
            ci
        ])
        console.log(response);
        if(response[0].affectedRows===0) return res.status(404).json({
            message:"Persona no encontrada"
        })
        res.json(`Los datos de la persona con ${ci} ha sido actualizado`);
    } catch (error) {
        return res.status(500).json({
            message:"Ocurrio un error en updatePersona"
        })
    }
}

