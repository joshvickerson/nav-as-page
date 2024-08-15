// Create a helpful production flag
const globals = require('./src/_data/global.js');
const isProduction = process.env.NODE_ENV === 'production';

module.exports = function(config) {
  // create an asset hash
  const assetHash = globals.random();
  config.addGlobalData('assetHash', assetHash);

  // Set directories to pass through to the dist folder
  config.addPassthroughCopy('./src/robots.txt');
  config.addPassthroughCopy('./src/fonts/*');
  config.addPassthroughCopy('./src/images/');
  config.addPassthroughCopy('./src/js/');

  // Tell 11ty to use the .eleventyignore and ignore our .gitignore file
  config.setUseGitIgnore(false);

  // Return your Object options:
  return {
    // the next 3 lines tell eleventy to process markdown and html files using nunjucks
    // this allows us to use plain .html files instead of require .njk files
    markdownTemplateEngine: 'njk',
    dataTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk',
    dir: {
      input: 'src',
      output: 'dist',
    }
  }
};