const Mood = require("../model/Mood");

const getAllMoods = async (req, res) => {
    const employees = await Mood.find();
    if (!employees) return res.status(204).json({ 'message': 'No moods found' });
    res.json(employees);
}

const createNewMood = async (req, res) => {
    if (!req?.body?.type) {
        return res.status(400).json({ 'message': 'Mood type is required' });
    }

    try {
        const result = await Mood.create({
            type: req.body.type,
        });

        res.status(201).json(result);
    } catch (err) {
        console.error(err);
    }
}

module.exports = {
    getAllMoods,
    createNewMood
}