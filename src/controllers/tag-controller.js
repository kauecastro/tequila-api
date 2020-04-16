const tagCollection = require('../models/tag-model');
const { PostTagParameters, GetTagParameters, DeleteTagParameters } = require('../parameters');
const tagEnum = require('../enums/tags');

const getTags = (req, res) => {

    const parameters = new GetTagParameters(req); 

    const errors = parameters.validate(req);

    if (errors.length > 0) {
        return res.status(400)
          .json({
            status: false,
            message: errors
          });
      }

    const filters = parameters.getFilter();

    tagCollection.find(filters)
        .then(tags => res.status(200).json({ status: true, message: 'Success!', data: tags }))
        .catch(e => res.status(500).json({ status: false, message: e }))
};

const deleteTags = (req, res) => {

    const parameters = new DeleteTagParameters(req); 

    const errors = parameters.validate(req);

    if (errors.length > 0) {
        return res.status(400)
          .json({
            status: false,
            message: errors
          });
      }

    const filters = parameters.getFilter();

    tagCollection.deleteMany(filters)
        .then(tags => res.status(200).json({ status: true, message: 'Success!', data: tags }))
        .catch(e => res.status(500).json({ status: false, message: e }))
};

const createTags = (req, res) => {
    
    const parameters = new PostTagParameters(req);

    const errors = parameters.validate(req);

    if (errors.length > 0) {
        return res.status(400)
          .json({
            status: false,
            message: errors
          });
      }

    tagCollection.create(parameters.tag)
        .then(() => res.status(200).json({ status: true, message: 'Success!' }))
        .catch(e => res.status(500).json({ status: false, message: 'ocorreu um erro' }))
};

const getKeys = (req, res) => {
    return res.status(200).json({ status: true, message: 'Success!', data: tagEnum });
};

module.exports = { getKeys, createTags, deleteTags, getTags }; 