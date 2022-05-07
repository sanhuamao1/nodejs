const joi = require("joi");

const name=joi.string().required()
const alias=joi.string().alphanum().required()
const id=joi
    .number()
    .integer()
    .required()
const title=joi.string().required()
const content = joi.string().required().allow('')
const cate_id = joi.number().integer().min(1)
const state = joi.string().valid('已发布', '草稿').required()

exports.artsort_add_schema={
    body:{
        name,
        alias
    }
}

exports.id_required_schema={
    params:{
        id
    }
}

exports.artsort_update_schema={
    body:{
        id,
        name,
        alias
    }
}


exports.add_article_schema = {
    body: {
      title,
      cate_id,
      content,
      state,
    },
  }

exports.update_article_schema = {
    body: {
      id,
      title,
      cate_id,
      content,
      state,
    },
  }