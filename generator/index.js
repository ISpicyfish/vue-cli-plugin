module.exports = (api, options) => {
  api.render('/templates/default');

  api.extendPackage({
    dependencies: {},
    devDependencies: {},
    scripts: {
      'dev': 'vue-cli-service serve'
    },
  })

  console.log(options)
}