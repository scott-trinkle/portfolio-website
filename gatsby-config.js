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
    cv: `#`, // file path defined in src/components/header/index.jsx
    contact: `#`, // file path defined in src/components/header/index.jsx
    // Content of the About Me section
    about: `I am a data scientist with experience developing image processing, segmentation,
and classification tools for preclinical medical imaging data. I am completing
my Ph.D. in Medical Physics at the University of Chicago in December 2021. My
work there has involved developing computer vision and image registration tools
for validation studies between multiple preclinical imaging modalities including
synchrotron x-ray microCT, diffusion MRI tractography, fluorescence microscopy,
and electron microscopy. I am also currently a Machine Learning Intern at Waters
Corporation where I am developing Python web apps to perform tissue
classification and interactive visualization of mass spectrometry imaging
data. In my free time, I can usually be found watching something from the
Criterion Channel, playing guitar, running, rock climbing, or baking bread.`,
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
          'Python package for extracting and visualizing the orientations of local structures in 3D image data using structure tensor analysis.',
        link: 'https://github.com/scott-trinkle/fiberorient',
      },
      {
        name: 'Nuclei Finder',
        description:
          'Web app for the automatic segmentation of cell nuclei in optical images. Model built with TensorFlow using a UNET architecture, app built with Streamlit.',
          link: 'https://share.streamlit.io/scott-trinkle/nuclei-finder/main/app.py',
      },	  
      {
        name: 'MSI Classifier',
        description:
          'Web app for the unsupervised classification of tissue types in multi-dimensional mass spectrometry imaging data using manifold learning and hierarchical density-based clustering. Built with Streamlit.',
        link: '/news/waters-internship/',
      },  
      {
        name: 'MSI Viewer',
        description:
          'Web app for the interactive visualization of mass spectrometry imaging data. Built with Streamlit and Bokeh.',
        link: '/news/waters-internship/',
      }
    ],
    // Optional: List your experience, they must have `name` and `description`. `link` is optional.
    experience: [
      {
        name: 'Waters Corporation',
        description: 'Machine Learning Intern, June 2021 - Present',
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
          'Python (including NumPy, Pandas, Scikit-learn, Matplotlib, Bokeh, Keras, TensorFlow, PyTorch), Bash, MATLAB, SQL, R, C++',
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
