module.exports = {
  siteMetadata: {
    // Site URL for when it goes live
    siteUrl: `https://www.scotttrinkle.com`,
    // Your Name
    name: 'Scott Trinkle',
    // Main Site Title
    title: `Scott Trinkle | Data scientist`,
    // Description that goes under your name in main bio
    description: `Data scientist based in Atlanta, GA`,
    // Optional: Twitter account handle
    //author: `@rfitzio`,
    // Optional: Github account URL
    github: `https://github.com/scott-trinkle`,
    // Optional: LinkedIn account URL
    linkedin: `https://www.linkedin.com/in/trinkle/`,
    cv: `#`, // file path defined in src/components/header/index.jsx
    contact: `#`, // file path defined in src/components/header/index.jsx
    // Content of the About Me section
    about: `I am a data scientist with experience developing image processing, segmentation,
and classification tools for image data. I completed my Ph.D. in Medical Physics
at the University of Chicago in December 2021. My work there involved developing
computer vision and image registration tools for validation studies between
multiple preclinical imaging modalities including synchrotron x-ray microCT,
diffusion MRI tractography, fluorescence microscopy, and electron
microscopy. Now at Waters Corporation, I work as a Data Engineer developing
machine learning tools and software for processing and exploring mass
spectrometry imaging data. In my free time, I can usually be found watching
something from the Criterion Channel, playing guitar, running, rock climbing, or
baking bread.`,
    // Optional: List your projects, they must have `name` and `description`. `link` is optional.
    projects: [
      {
        name: 'Braingraphgeo',
        description:
          'Python package for performing analysis on structural brain networks using random geometric surrogate graphs.',
        link: 'https://github.com/scott-trinkle/braingraphgeo',
      },
      {
        name: 'Fiberorient',
        description:
          'Python package for extracting and visualizing the orientations of local structures in 3D imaging data using structure tensor analysis.',
        link: 'https://github.com/scott-trinkle/fiberorient',
      },
      {
        name: 'Nuclei Finder',
        description:
          'Personal side-project for the segmentation of cell nuclei in multiple optical imaging modalities. Model built with TensorFlow using a UNET architecture, app built and deployed with Streamlit.',
        link: 'https://github.com/scott-trinkle/nuclei-finder',
      },
    ],
    // Optional: List your experience, they must have `name` and `description`. `link` is optional.
    experience: [
      {
        name: 'Waters Corporation',
        description: 'Data Engineer, January 2022 - Present',
        link:
          'https://www.waters.com/waters/en_US/Waters/nav.htm?cid=513691&locale=en_US',
      },
      {
        name: 'University of Chicago Committee on Medical Physics',
        description:
          'Graduate Research Assistant, September 2016 - December 2021',
        link: 'https://medphys.uchicago.edu',
      },
      {
        name:
          'University of Florida Advanced Laboratory for Radiation Dosimetry Studies',
        description:
          'Undergraduate Research Assistant, January 2013 - May 2016',
        link:
          'https://medphysics.med.ufl.edu/medical-physics-graduate-program/faculty-facilities/research-labs/advanced-laboratory-for-radiation-dosimetry-studies/',
      },
    ],
    // Optional: List your skills, they must have `name` and `description`.
    skills: [
      {
        name: 'Programming',
        description:
          'Python (NumPy, Pandas, Scikit-learn, Matplotlib, Bokeh, Keras, TensorFlow, PyTorch), Bash, MATLAB, SQL, R, C++',
      },
      {
        name: 'Analysis',
        description:
          'Computer vision, machine learning, image segmentation, network analysis',
      },
      {
        name: 'Tools',
        description: 'git, GNU Emacs, LaTeX, Jupyter, Docker, AWS',
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
        path: `${__dirname}/content/news`,
        name: `news`,
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
        trackingId: `UA-204361692-1`, // Optional Google Analytics
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
