---
title: 'New position: Machine learning internship at Waters Corporation'
date: '2021-06-21T12:00:00.00Z'
description: 'I have been hired as a Machine Learning Intern at Waters Corporation, where I will be developing python web apps for mass spectrometry imaging.'
---

I'm excited to announce that I have been hired as a Machine Learning Intern for
the next three months at [Waters
Corporation](https://www.waters.com/waters/en_US/Waters/nav.htm?cid=513691&locale=en_US).

My responsibilities involve the development of lightweight Python web apps in
the domain of [mass spectrometry
imaging](https://en.wikipedia.org/wiki/Mass_spectrometry_imaging) (MSI) using
[Streamlit](https://streamlit.io/), with deployment through
[Docker](https://www.docker.com/) and [AWS](https://aws.amazon.com/). I am
also responsible for unit and e2e testing of the web apps, documentation and
version control with git.

MSI data is multi-dimensional, with 2-3 spatial dimensions as well as a spectral
dimension quantifying the presence of 1000s of specific analytes with a given
m/z value. Fortunately, my past experience with multi-dimensional preclinical
imaging data is already coming in handy!

Right now I'm working on two apps:

## MSI Viewer

MSI Viewer provides interactive visualization of 2D MSI analyte data. Contains
widgets and controls to view 2D intensity images at specific m/z values, as well
as spectral data at a given x-y location, with interactivity enabled through the
[Bokeh](https://bokeh.org/) library.

## MSI Classifier

MSI Classifier provides an interactive pipeline for unsupervised tissue and
analyte classification of 2D MSI data.

For tissue classification, I am using [manifold
learning](https://umap-learn.readthedocs.io/en/latest/) to embed x-y points from
the ~1000-element spectral dimension into 2-3 dimensions, which allows for
efficient [hierarchical density-based
clustering](https://hdbscan.readthedocs.io/en/latest/index.html)

While tissue classification groups similar x-y pixels together based on their
mass spectral signature, analyte clustering instead groups similar spectral
points together based on their spatial distributions. This allows researchers to
discover linked distribution patterns of differrent analytes, which can aid in
pharmaceutical research.

For analyte clustering, I am using [Ward's hierarchical
clustering](https://en.wikipedia.org/wiki/Ward%27s_method) to cluster and label
each analyte image based on a user-defined maximum number of clusters.
