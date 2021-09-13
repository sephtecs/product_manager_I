const Equipment = require('../models/equipment.models');


module.exports = {
    getAll: (req, res) => {
        Equipment.find({})
            .then((allEquipment) => {
                console.log(allEquipment);
                res.json(allEquipment);
            })
            .catch((err) => {
                console.log("error at getAll");
                console.log(err);
                res.json(err);
            });
    },

    create: (req, res) => {
        console.log(req.body);

        Equipment.create(req.body)
            .then((newEquipment) => {
                console.log(newEquipment);
                res.json(newEquipment);
            })
            .catch((err) => {
                console.log("error at create");
                console.log(err);
                res.json(err);
            });
    },

    getOne: (req, res) => {
        console.log(req.params.id);

        Equipment.findById(req.params.id)
            .then((oneEquipment) => {
                console.log(oneEquipment);
                res.json(oneEquipment);
            })
            .catch((err) => {
                console.log("error at getOne");
                console.log(err);
                res.json(err);
            });
    },

    update: (req, res) => {
        console.log(req.params.id);
        console.log(req.body);

        Equipment.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true,
        })
            .then((updatedEquipment) => {
                console.log(updatedEquipment);
                res.json(updatedEquipment);
            })
            .catch((err) => {
                console.log("error at update");
                console.log(err);
                res.json(err);
            });
    },

    delete: (req, res) => {
        console.log(req.params.id);

        Equipment.findByIdAndDelete(req.params.id)
            .then((deletedEquipment) => {
                console.log(deletedEquipment);
                res.json(deletedEquipment);
            })
            .catch((err) => {
                console.log("error at delete");
                console.log(err);
                res.json(err);
            });
    },


}