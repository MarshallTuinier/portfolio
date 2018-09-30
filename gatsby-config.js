module.exports = {
  plugins: [
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {}
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography.js`
      }
    },
    {
      resolve: "gatsby-plugin-page-transitions",
      options: {
        transitionTime: 625
      }
    }
  ]
};
