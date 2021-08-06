---
title: June 28, 2019 - Awarded F31 predoctoral fellowship from the NIH
date: '2019-06-28T12:00:00.00Z'
description: 'I have been awarded my own fellowship for my thesis project entitled "A novel multi-modal, multi-scale imaging pipeline for the validation of diffusion MRI of the brain".'
---

I have been awarded a [Ruth L. Kirschstein Predoctoral Individual National
Research Service
Award](https://researchtraining.nih.gov/programs/fellowships/f31#) for my thesis
project entitled ["A novel multi-modal, multi-scale imaging pipeline for the
validation of diffusion MRI of the
brain"](https://app.dimensions.ai/details/grant/grant.8555152). This award will
fund up to three years (totalling $120,979) of my thesis research through the
National Institute of Neurological Disorders and Stroke
([NINDS](https://www.ninds.nih.gov/)). 

# Specific aims

Diffusion Tensor Imaging (DTI) is a powerful magnetic resonance imaging tool
used to noninvasively report 3D microstructural properties of nervous tissue on
a macroscopic scale, and it has played an important role in the understanding
and diagnosis of a number of neurological disease processes. New methods of
reconstructing orientation distribution functions (ODFs) from DTI data are
rapidly being developed, each seeking to identify and model the orientation
distribution of distinct, sub-voxel axon fiber populations. The 3D orientations
of these fiber populations are passed into tractography algorithms as a
potential noninvasive means of performing neural connectivity analysis across
whole brains. However, efforts to validate tractography pipelines have found
poor specificity when compared primarily to histological- or phantom-based
ground-truth datasets. **These failures have led to a push for more
microstructure-driven, multi-scale validation and improvement efforts for DTI.**

Studies seeking to validate ODF reconstruction methods have typically relied on
serial optical histology as a ground-truth dataset. The typical pipeline is to
generate ODFs from the high-resolution histology data using a computer-vision
technique called "structure tensor analysis," which uses image intensity
gradients to estimate local, voxel-wise fiber orientations. These orientation
estimates are then binned across regions of interest (ROI) the size of a DTI
voxel in order to form ground-truth ODFs, which are compared pair-wise to ODFs
reconstructed from DTI data of the same specimen. Histology-based ground-truth
datasets used for this purpose rely on the labor-intensive process of physically
sectioning, staining, and optically scanning hundreds of slices of the tissue of
interest. The slice thickness is necessarily at least 4-20 times thicker than
the achievable in-plane resolution ~5000 nm vs. 250 nm), yielding non-isotropic
volumetric reconstructions; distortions introduced by sectioning further limit
the ability to align the slices and extract faithful information on the 3D
orientation of fiber populations.

We are pioneering the use of metal-stained synchrotron micro computed tomography
(microCT) as a means of performing isotropic, 3D imaging of whole mouse brain
specimens at micron resolution, with the potential ability to resolve every axon
in the brain. We propose to optimize a pipeline to use microCT data together
with serial electron microscopy (EM) to validate and characterize DTI ODF
reconstruction algorithms with respect to the underlying neurological tissue
structure. Imaging the same mouse brain using DTI, microCT and EM will provide
\textbf{an unprecedented DTI validation dataset with resolution scales spanning
six orders of magnitude}. The results of this work will address the limitations
of previous histology-based validation studies, and provide a key
microanatomical understanding of the basis of the DTI signal. The specific aims
are:


**Aim 1: Model phase contrast to optimize microCT data acquisition.** Techniques
to exploit phase contrast in synchrotron x-ray imaging typically make the
assumption of a non- or weakly-absorbing sample. However, in preliminary
studies, we have observed phase effects in strongly-absorbing mouse brain
specimens stained with heavy metals. We propose to develop a novel theoretical
imaging model that accounts for both phase and absorption contrast in these
samples. This model will be used to optimize parameters of the microCT data
acquisition to enhance the contrast of axon fiber bundles.

**Aim 2: Validate DTI reconstruction methods using ground-truth microCT ODFs.**
We will compute ground-truth ODFs from the microCT data across a whole mouse
brain using structure tensor analysis. After spatial registration, the
ground-truth ODFs will be compared to ODFs calculated using a variety of
reconstruction methods on DTI data from the same specimen, generating
algorithm-specific spatial maps of DTI accuracy. These maps will highlight gross
anatomical regions associated with DTI success and failure.

**Aim 3: Characterize DTI performance using underlying tissue microstructure.**
A number of ROIs from aim~2 displaying either large or small ODF discrepancies
will be selected for follow-up imaging with EM. Morphological features from the
nanometer-scale EM data and micron-scale microCT data will be used to
characterize the performance of DTI. The statistical relationship between these
features and scalar ODF validation metrics will be used to identify significant
anatomical characteristics that are correlated with both the success and failure
of ODF reconstruction algorithms.

Upon completion, this project will generate a comprehensive validation map for a
number of DTI reconstruction methods, exploiting the advantages of a novel
dataset **uniquely tailored to this purpose**. The understanding of key
microstructural features that influence DTI algorithm performance can be used in
future work to create better, adaptive models and acquisition schemes to
**better leverage fiber orientation and connectivity information in the
treatment of neurological disease.**
