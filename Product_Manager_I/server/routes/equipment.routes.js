const EquipmentController = require('../controllers/equipment.controller');

module.exports = (app) => {
    app.post('/api/equipment', EquipmentController.create);
    app.get('/api/equipment', EquipmentController.getAll);
    app.get('/api/equipment/:id', EquipmentController.getOne);
    app.put('/api/equipment/:id', EquipmentController.update);
    app.delete('/api/equipment/:id', EquipmentController.delete);
}