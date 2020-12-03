'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/v3.x/concepts/controllers.html#core-controllers)
 * to customize this controller
 */

module.exports = {
  populate: async (ctx) => {
    const { page, limit } = ctx.query;
    console.log(page, limit, ctx.query);

    const response = await strapi.services.post.populate({ page, limit });
    ctx.send({ ok: true });
    // ctx.send({ data: {...response} });
  }
};
