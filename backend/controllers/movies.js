const Movie = require('../models/Movie')

const createMovie = async (req, res) => {
    const movie = await Movie.create(req.body)
    res.status(200).json({ movie })
}

module.exports ={ 
    createMovie 
}