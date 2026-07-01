const gastosControllers = {};

gastosControllers.getGastos = async (req, res) => {
    res.json([
        {
            id: '100',
            gasto: 'Salud',
            monto: 14575.60,
            informacion: 'Corresponde a consultas médicas, pagos de seguros, medicinas'
        },
        {
            id: '200',
            gasto: 'Educacion',
            monto: 3575.60,
            informacion: 'Corresponde a pensiones de colegios, transporte escolar'
        },
        {
            id: '300',
            gasto: 'Vivienda',
            monto: 5575.60,
            informacion: 'Corresponde a pago servicios básicos'
        }
    ]);
};

gastosControllers.addGasto = async (req, res) => {
    console.log(req.body);
    res.send("Nuevo gasto registrado");
};

module.exports = gastosControllers;