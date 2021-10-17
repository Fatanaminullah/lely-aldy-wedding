module.exports = {
  siteMetadata: {
    siteUrl: "https://lelyaldywedding.com",
    title: "Lely & Aldy Wedding",
    description: `The Wedding Ceremony of Lely & Aldy`,
    author: `Lely&Aldy`,
    metaImage: `src/assets/richlink.jpg`,
  },
  plugins: [
    "gatsby-plugin-sass",
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Lely & Aldy Wedding',
        short_name: 'LelyAldyWedding',
        start_url: '/',
        background_color: '#f7f0eb',
        theme_color: '#e49191',
        display: 'standalone',
        icon: 'src/assets/images/favicon.png',
      },
    }
  ],
};
