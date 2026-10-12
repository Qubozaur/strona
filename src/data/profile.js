export const profile = {
  name: 'Jakub Stolarczyk',
  role: 'Machine Learning & Backend Developer & DevOps',
  location: 'Mazovia, Poland',
  email: 'stolarczykjakub25@gmail.com',
  github: 'https://github.com/qubozaur',
  linkedin: 'https://www.linkedin.com/in/jakub-stolarczyk-141b913b6/',
  microsoftLearn:
    'https://learn.microsoft.com/en-us/users/jakubstolarczyk-4121/credentials',

  phone: '',

  tagline:
    'Computer science student turning messy data into working systems, neural networks, NLP pipelines and the APIs that serve them.',

  about: [
    'I am a third-year computer science student at Bialystok University of Technology, with a grade average around 4.5 that puts me in the top ten of my year. My engineering thesis is a GitHub bot that uses large language models to automate code review, generate tests and keep track of code quality.',
    'Most of my work starts with a raw dataset and ends with something you can actually click: a dashboard, a REST API, or a bot that reviews code inside a GitHub repository. I work mainly in Python, using TensorFlow and Keras for deep learning, scikit-learn for classical models, spaCy and transformers for language, with Flask, Streamlit or Dash on the delivery side.',
    'The other half of the job is getting that work to run somewhere other than my laptop. I containerise with Docker on Linux, ship through GitHub Actions pipelines, and hold the Microsoft Azure Fundamentals (AZ-900) and GitHub Actions (GH-200) certificates. Alongside that I have hands-on experience with PL/SQL and with administering Oracle and PostgreSQL databases, and university projects run in two-week Scrum sprints.',
  ],
}

export const skills = [
  {
    group: 'Machine Learning',
    items: ['TensorFlow', 'Keras', 'scikit-learn', 'NumPy', 'pandas'],
  },
  {
    group: 'NLP',
    items: ['spaCy', 'transformers', 'BERTopic', 'RoBERTa', 'RAG / embeddings'],
  },
  {
    group: 'Backend & Data',
    items: ['Python', 'Flask', 'REST APIs', 'SQL', 'PL/SQL', 'Oracle', 'PostgreSQL'],
  },
  {
    group: 'DevOps & MLOps',
    items: [
      'Docker',
      'Linux',
      'GitHub Actions',
      'CI/CD',
      'Google Cloud Platform',
      'Microsoft Azure',
    ],
  },
  {
    group: 'Apps & Tooling',
    items: ['Streamlit', 'Dash', 'React', 'Git', 'Jupyter', 'Scrum / Agile'],
  },
]

export const projects = [
  {
    title: 'GitHub Code Review Bot',
    subtitle: 'Engineering thesis - in progress',
    featured: true,
    description:
      'A GitHub bot built on large language models that automates code review on pull requests, generates tests for changed code and reports on overall code quality. Repository content is embedded into a vector index, so its comments refer to the surrounding codebase rather than to the diff alone.',
    highlights: [
      'Automated pull request review with model routing through OpenRouter',
      'Test generation and code quality reporting for the files a change touches',
      'Flask webhook service reacting to GitHub events via PyGithub, repository context in Pinecone, conversation state in Firestore',
    ],
    tags: ['Python', 'Flask', 'PyGithub', 'OpenRouter', 'Pinecone', 'Firestore'],
    repo: 'https://github.com/Qubozaur/PracaInzynieskaPublic',
    demo: '',
  },
  {
    title: 'Half-Life 2 Dialogue Analysis',
    subtitle: 'NLP research project',
    featured: true,
    description:
      'An end-to-end NLP study of the complete dialogue of Half-Life 2. The pipeline discovers what the game talks about, how its tone shifts across chapters, and exposes the result as an interactive dashboard.',
    highlights: [
      'Unsupervised topic modelling with BERTopic over the full dialogue corpus',
      'Sentiment and emotion scoring using a fine-tuned RoBERTa classifier',
      'Entity and dependency analysis in spaCy, visualised in a Dash application',
    ],
    tags: ['Python', 'BERTopic', 'RoBERTa', 'spaCy', 'Dash'],
    repo: 'https://github.com/Qubozaur/projektNLP',
    demo: '',
  },
  {
    title: 'Neural Network Benchmark Suite',
    subtitle: 'Deep learning coursework',
    description:
      'Three parallel deep learning tasks built to compare architectures under identical training conditions: image classification, tabular classification and regression. Every design choice was settled by an experiment rather than assumed.',
    highlights: [
      'CIFAR-100 image classification with convolutional networks and augmentation',
      'California Housing regression reaching R-squared of 0.81 with an MLP and dropout',
      'Sweeps over activations, optimisers and layer depth, including a batch-normalisation study that measurably hurt the regression model',
    ],
    tags: ['Python', 'TensorFlow', 'Keras', 'scikit-learn'],
    repo: 'https://github.com/Qubozaur/projektSSNAUG',
    demo: '',
  },
  {
    title: 'Music Genre Analytics',
    subtitle: 'Data exploration app',
    description:
      'A Streamlit application that predicts a track genre from Last.fm tags combined with Spotify audio features, and lets you explore the dataset through four interactive views.',
    highlights: [
      'Genre classification from merged tag and audio-feature vectors, evaluated with top-2 accuracy',
      'Clustering view surfacing natural groupings of tracks independent of their labels',
      'Regression and recommendation modules sharing one preprocessing pipeline',
    ],
    tags: ['Python', 'Streamlit', 'scikit-learn', 'pandas'],
    repo: 'https://github.com/Qubozaur/EDIprojekt',
    demo: '',
  },
]

export const education = [
  {
    period: '10.2023 - present',
    title: 'Computer Science, BSc',
    org: 'Bialystok University of Technology',
    notes: [
      'Grade average around 4.5, among the top ten students of the year',
      'Engineering thesis on LLM-driven code review automation',
      'Coursework in databases, Python, cloud platforms and machine learning',
    ],
  },
  {
    period: '09.2019 - 04.2023',
    title: 'Mathematics and Physics profile',
    org: 'High School No. 1, Makow Mazowiecki',
    notes: [],
  },
]

export const certifications = [
  {
    name: 'Microsoft Azure Fundamentals',
    code: 'AZ-900',
    issuer: 'Microsoft',
    url: 'https://learn.microsoft.com/en-us/users/jakubstolarczyk-4121/credentials',
  },
  {
    name: 'GitHub Actions',
    code: 'GH-200',
    issuer: 'GitHub',
    url: '',
  },
]

export const languages = [
  { name: 'Polish', level: 'Native', value: 100 },
  { name: 'English', level: 'Advanced (C1)', value: 85 },
  { name: 'Russian', level: 'Basic (A2)', value: 30 },
]
