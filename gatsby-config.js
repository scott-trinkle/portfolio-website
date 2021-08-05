module.exports = {
  siteMetadata: {
    // Site URL for when it goes live
    siteUrl: `https://www.scotttrinkle.com`,
    // Your Name
    name: 'Scott Trinkle',
    // Main Site Title
    title: `Scott Trinkle | Data scientist`,
    // Description that goes under your name in main bio
    description: `Data scientist based in Chicago, IL`,
    // Optional: Twitter account handle
    //author: `@rfitzio`,
    // Optional: Github account URL
    github: `https://github.com/scott-trinkle`,
    // Optional: LinkedIn account URL
    linkedin: `https://www.linkedin.com/in/trinkle/`,
    // Content of the About Me section
    about: `I am a Ph.D. student in Medical Physics at the University of Chicago. My
research involves multi-modal, multi-scale validation of various MRI
microstructure methods in the mouse brain. This includes benchmarking nerve
fiber orientations from diffusion MRI against structure-tensor derived
orientation measurements from synchrotron microCT, using graph theory and neural
tracer data to demonstrate geometric bias in structural brain networks derived
from MRI tractography, and using model-free analysis of echo-planar
spectroscopic imaging data to demonstrate compromised myelin sensitivity in a
number of biophysical white matter models.

Throughout, I have developed strong image processing and machine learning
skills, which led me to my current role as an intern at Waters Corporation,
using machine learning principles to develop lightweight micro-apps in the
domain of mass spectrometry.`,
    // Optional: List your projects, they must have `name` and `description`. `link` is optional.
      projects: [
      {
	name: 'Waters stuff',
	description: 'MSI imaging / segmentation',
	link: '/blog/my-third-blog/'
      },
      {
        name: 'Synchrotron stuff',
        description: 'Synchrotron stuff with diffusion MRI',
        link: 'https://github.com/RyanFitzgerald/devfolio',
      },
      {
        name: 'Graph theory stuff',
        description: 'Geometric surrogates, etc.',
        link: 'https://chromeextensionkit.com/?ref=devfolio',
      },
      {
        name: 'Myelin imaging',
        description: 'Asymmetry, etc.',
        link: 'https://github.com/RyanFitzgerald/devfolio',
      },
    ],
    // Optional: List your experience, they must have `name` and `description`. `link` is optional.
    experience: [
      {
        name: 'Waters Corporation',
        description: 'Machine Learning Intern, June 2021 - Present',
        link: 'https://github.com/RyanFitzgerald/devfolio',
      },
      {
        name: 'University of Chicago Committee on Medical Physics',
        description:
          'Graduate Research Assistant, September 2016 - December 2021',
        link: 'https://github.com/RyanFitzgerald/devfolio',
      },
    ],
    // Optional: List your skills, they must have `name` and `description`.
    skills: [
      {
        name: 'Languages & Frameworks',
        description:
          'JavaScript (ES6+), Golang, Node.js, Express.js, React, Ruby on Rails, PHP',
      },
      {
        name: 'Databases',
        description: 'MongoDB, PostreSQL, MySQL',
      },
      {
        name: 'Other',
        description:
          'Docker, Amazon Web Services (AWS), CI / CD, Microservices, API design, Agile / Scrum',
      },
    ],
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
              wrapperStyle: `margin: 0 0 30px;`,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `ADD YOUR TRACKING ID HERE`, // Optional Google Analytics
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `devfolio`,
        short_name: `devfolio`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`, // This color appears on mobile
        display: `minimal-ui`,
        icon: `src/images/icon.png`,
      },
    },
  ],
};
