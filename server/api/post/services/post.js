require('dotenv').config({ path: require('find-config')('env') });
const axios = require('axios');
const parser = require('xml2json');
const slugify = require('slugify');
const axiosClient = axios.create({
  baseURL: `${process.env.GAMESPOT_URL}`
})

'use strict';

const setImage = async ({ url, post }) => {
  console.log('image from post: ', post.slug);
  const { data } = await axios.get(url, { responseType: 'arraybuffer' });
  console.log('image downloaded as buffer');
  const buffer = Buffer.from(data, 'base64');
  console.log('buffer set');

  const FormData = require('form-data');
  const formData = new FormData();

  formData.append('refId', post.id)
  formData.append('ref', 'post');
  formData.append('field', 'image');
  formData.append('files', buffer, { filename: `${post.slug}.jpg` });

  return axios.post(`http://${strapi.config.host}:${strapi.config.port}/upload`, formData, { headers: {
    'Content-Type': `multipart/form-data; boundary=${formData._boundary}`
  } })
}

module.exports = {
  populate: ({ page, limit }) => {
    const args = {
      page: page ? page : 1,
      limit: limit ? limit : 10
    }
    console.log(`page: ${args.page} | limit: ${args.limit}`);
    return new Promise(async (resolve, reject) => {
      try {
        const response = await axiosClient(`?api_key=${process.env.GAMESPOT_KEY}&sort=publish_date:desc&limit=${args.limit}&offset=${args.page * args.limit}`
        );
        const json = parser.toJson(response.data);
        const { response: jsonParsed } = JSON.parse(json);
        if (jsonParsed.error === 'OK') {
          console.log('no errors');
          const { results: { article: articles } } = jsonParsed;
          const promises = [];
          for (let i = 0; i < articles.length; i++) {
            const article = articles[i];
            const { categories: { category: categories } } = article;
            // console.log('categories: ', categories);
            if (Array.isArray(categories)) {
              for (let j = 0; j < categories.length; j++) {
                const matchingCategories = await strapi.services.category.find({ name: categories[j].name });
                // console.log('category exists: ', matchingCategories);
                if (matchingCategories.length === 0) {
                  const categoryName = categories[j].name;
                  const res = await strapi.services.category.create({
                    name: categoryName,
                    slug: slugify(categoryName, { lower: true, remove: /[*+~.()'"!:@]/g })
                  });
                  if (res) {
                    console.log('Category Created');
                  }
                }
              }
            }
            const postExists = await strapi.services.post.find({ originalId: article.id });
            console.log('post exists: ', postExists.length);
            if (postExists.length === 0) {
              let categoriesIds = [];
              for (let k = 0; k < categories.length; k++) {
                const categoryFound = await strapi.services.category.find({ name: categories[k].name });
                categoriesIds.push(categoryFound[0].id);
              }
              console.log(categoriesIds);
              const slug = slugify(article.title, { lower: true, remove: /[*+~.,()'"!/:@]/g});
              console.log('slug: ', slug);
              const post = {...articles[i], slug, originalId: article.id, imageUrl: article.image.original, categories: categoriesIds};
              delete post.image;
              delete post.associations;
              delete post.site_detail_url;
              const postRes = await strapi.services.post.create({ ...post });
              console.log('image upload started...');
              await setImage({ url: article.image.original, post: postRes });
              console.log('main image uploaded: ');
              console.log('post created');
            } else{
              console.log(`Post ${article.name} aleready exists`);
            }
          }
        }
        resolve({ ok: true });
      } catch(error) {
        console.log('error');
        console.log(error);
        reject(error);
      }
    })
  }
};
