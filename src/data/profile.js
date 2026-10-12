// Single source of truth for every piece of text on the site.
// Edit this file to update the portfolio - no component changes needed.

export const profile = {
  name: 'Jakub Stolarczyk',
  role: 'Machine Learning & Backend Developer',
  location: 'Bialystok, Poland',
  email: 'stolarczykjakub25@gmail.com',

  // TODO: replace with your real profile URLs
  github: 'https://github.com/your-username',
  linkedin: 'https://linkedin.com/in/your-handle',

  // Shown under the name in the hero section
  tagline:
    'Computer science student turning messy data into working systems - neural networks, NLP pipelines and the APIs that serve them.',

  // About section, one paragraph per array entry
  about: [
    'I am a computer science student at Bialystok University of Technology, focused on applied machine learning. Most of my work starts with a raw dataset and ends with something you can actually click: a dashboard, a REST API, or a bot that answers inside a GitHub repository.',
    'I work mainly in Python - TensorFlow and Keras for deep learning, scikit-learn for classical models, spaCy and transformers for language. On the delivery side I use Flask for APIs and Streamlit or Dash when an experiment needs a front end fast.',
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
    items: ['Python', 'Flask', 'REST APIs', 'Pinecone', 'Firestore', 'SQL'],
  },
  {
    group: 'Apps & Tooling',
    items: ['Streamlit', 'Dash', 'React', 'Git', 'Jupyter'],
  },
]

// Each project renders as one card. `featured: true` pins it to the top row.
export const projects = [
  {
    title: 'GitHub LLM Assistant',
    subtitle: 'Engineering thesis',
    featured: true,
    description:
      'A bot that lives inside a GitHub repository and answers questions about its own codebase. Repository content is chunked and embedded into a vector index, so every answer is grounded in the actual source rather than in model memory.',
    highlights: [
      'Retrieval-augmented generation over repository files using Pinecone vector search',
      'Flask webhook service reacting to GitHub issue and comment events via PyGithub',
      'Model routing through OpenRouter, with conversation state persisted in Firestore',
    ],
    tags: ['Python', 'Flask', 'PyGithub', 'OpenRouter', 'Pinecone', 'Firestore'],
    repo: '', // TODO: add repository URL
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
    repo: '',
    demo: '',
  },
  {
    title: 'Neural Network Benchmark Suite',
    subtitle: 'Deep learning coursework',
    description:
      'Three parallel deep learning tasks built to compare architectures under identical training conditions: image classification, tabular classification and regression. Every design choice was validated by an experiment rather than assumed.',
    highlights: [
      'CIFAR-100 image classification with convolutional networks and augmentation',
      'California Housing regression reaching R-squared of 0.81 with an MLP and dropout',
      'Systematic sweeps over activations, optimisers and layer depth, including a batch-normalisation study that measurably hurt the regression model',
    ],
    tags: ['Python', 'TensorFlow', 'Keras', 'scikit-learn'],
    repo: '',
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
    repo: '',
    demo: '',
  },
]
