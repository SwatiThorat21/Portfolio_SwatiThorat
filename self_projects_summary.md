1.Shortlist Builder
An AI-powered vendor discovery and comparison platform that converts business requirements into a ranked shortlist of suitable vendors. It researches public pricing and documentation pages, extracts relevant information, and produces an evidence-backed comparison.
Technologies
React.js 19
Vite
Tailwind CSS
Node.js
Express.js
Google Gemini API
Supabase PostgreSQL
Axios
Cheerio
Zod
Vitest and React Testing Library
Key features
Built a requirement form capturing budget, region, team size, features, and compliance constraints.
Integrated Gemini AI to discover relevant vendors and extract structured information.
Scraped public vendor pricing and documentation pages using Axios and Cheerio.
Created a deterministic scoring system to compare and rank vendors from 0–100.
Displayed pricing, matched features, risks, limitations, and supporting source links in a comparison table.
Added shortlist history using Supabase, with options to reopen and delete previous results.
Implemented Markdown export for sharing comparison results.
Added health monitoring for the Express backend, Supabase database, and Gemini API.
Implemented caching to reduce repeated scraping and external API requests.
Added Zod validation, rate limiting, CORS restrictions, URL validation, and scraper security controls.
Created automated frontend and backend tests using Vitest, Supertest, and Testing Library.
Compact portfolio version
Developed an AI-powered vendor discovery and shortlist platform using React, Node.js, Express, Gemini, and Supabase. The application discovers vendors from business requirements, scrapes public pricing and documentation pages, extracts evidence-backed insights, and ranks vendors using deterministic scoring. Implemented shortlist history, Markdown export, caching, service monitoring, input validation, rate limiting, and scraper security controls.
Resume-style bullet points
Developed a full-stack AI vendor discovery platform using React, Express, Gemini API, and Supabase.
Designed an automated discovery, scraping, extraction, scoring, and ranking pipeline.
Built an evidence-backed comparison interface covering pricing, feature matches, risks, and source links.
Improved reliability through caching, validation, rate limiting, error handling, and automated testing.
Implemented persistent shortlist history, health monitoring, and Markdown export functionality.
GitHub: Shortlist Builder Repository


2.Quizzie – Quiz and Poll Management Platform
A full-stack MERN application that allows users to create, publish, share, and analyse interactive quizzes and polls. Registered users can manage their quizzes through a dashboard, while participants can attempt quizzes through shareable links without signing in.
Technologies
React.js 18
JavaScript
CSS Modules
Node.js
Express.js
MongoDB Atlas
Mongoose
JSON Web Tokens (JWT)
bcrypt
Axios
React Router
React Timer Hook
React Toastify
Animate.css
Key features
Implemented user registration and login with JWT-based authentication.
Secured passwords using bcrypt hashing before storing them in MongoDB.
Built protected APIs for creating, editing, viewing, and deleting quizzes.
Supported two content types:
Q&A quizzes
Poll-based quizzes
Allowed creators to add multiple questions and answer options.
Supported text, image, and combined text-and-image answer options.
Added configurable timers for individual quiz questions.
Generated shareable links so participants can access quizzes directly.
Calculated and displayed final scores for Q&A quizzes.
Recorded voting counts for individual poll options.
Tracked quiz impressions and participant engagement.
Recorded correct and incorrect attempts for each question.
Created an analytics dashboard showing quiz performance and question-level results.
Added dashboard summaries and trending quiz information.
Implemented responsive routing and loading, error, and toast-feedback states.
Portfolio description
Developed Quizzie, a full-stack quiz and poll management application using React, Node.js, Express, and MongoDB. The platform enables authenticated users to create, edit, delete, and share interactive Q&A quizzes and polls. It supports timed questions, text and image-based options, result calculation, impression tracking, poll voting, and question-level analytics through a dedicated dashboard.
Short portfolio version
A MERN-stack platform for creating and sharing interactive quizzes and polls. It includes JWT authentication, timed questions, multiple answer formats, shareable quiz links, score calculation, voting, impression tracking, and performance analytics.
Résumé-style bullet points
Developed a full-stack quiz and polling platform using React, Express, Node.js, and MongoDB.
Implemented secure user authentication using JWT and bcrypt password hashing.
Built CRUD APIs for quizzes containing nested questions and multiple answer types.
Added timed quiz participation, score calculation, poll voting, and shareable links.
Created an analytics dashboard tracking impressions, correct and incorrect responses, and option-level votes.
Suggested portfolio card
Project: QuizzieCategory: Full-Stack MERN ApplicationTechnologies: React, Node.js, Express, MongoDB, Mongoose, JWT, bcrypt, AxiosGitHub: View repository
One correction: don’t describe this as merely a “quiz app.” That undersells it. The stronger and more accurate description is “quiz and poll creation platform with analytics.”


3.Rate My Style AI App

### Portfolio description

> Contributed across the full-stack development of Rate My Style AI, a production mobile application built with React Native and Supabase. The application uses Gemini and OpenAI APIs to analyse outfit photos and generate personalised style ratings, colour insights, strengths, improvement recommendations, and contextual fashion guidance. Worked closely with the project owner across application development, frontend-backend integration, testing, debugging, and production release.

### Technologies

* React Native
* JavaScript
* Supabase
* PostgreSQL
* Supabase Authentication
* Gemini API
* OpenAI API
* REST API integration
* Git and GitHub

Only include Expo if the project actually used it.

### Contribution highlights

* Contributed across the end-to-end development of a production AI-powered mobile application.
* Developed and refined React Native screens and reusable UI components across the application.
* Integrated React Native interfaces with Supabase services for authentication, data storage, and application workflows.
* Integrated Gemini and OpenAI APIs to generate contextual outfit analysis and personalised styling feedback.
* Contributed to outfit-image submission, AI analysis, result presentation, and follow-up interaction workflows.
* Implemented UI states for loading, validation, success, empty results, and API failures.
* Helped develop support for style ratings, colour analysis, outfit strengths, improvement suggestions, and occasion-based feedback.
* Contributed to multiple stylist personas and contextual AI conversations.
* Worked on result-sharing and premium-feature user flows.
* Improved responsive layouts, visual consistency, navigation, and usability across mobile screens.
* Collaborated with the project owner through Git-based development, testing, debugging, and bug resolution.
* Diagnosed frontend, backend-integration, and AI-response issues affecting production workflows.
* Contributed to releases delivered through mobile application stores.

Remove any bullet covering a feature you did not personally touch.

### Short portfolio card

**Project:** Rate My Style AI
**Role:** Full-Stack Development Contributor
**Category:** AI-Powered Mobile Application
**Technologies:** React Native, Supabase, Gemini API, OpenAI API
**Website:** [ratemystyle.ai](https://ratemystyle.ai/)

**Summary:**

> Contributed across the full-stack development of an AI-powered styling application using React Native and Supabase. Integrated Gemini and OpenAI APIs to analyse outfit photos and deliver personalised scores, colour insights, improvement recommendations, stylist personas, and contextual follow-up guidance.

### Résumé-style bullets

* Contributed to the end-to-end development of a production AI styling application using React Native and Supabase.
* Integrated Gemini and OpenAI APIs for image-based outfit analysis and personalised fashion recommendations.
* Developed reusable mobile interfaces and connected frontend workflows with authentication, database, and AI services.
* Implemented robust loading, validation, success, and failure states across image-analysis workflows.
* Collaborated on testing, debugging, usability improvements, and production mobile releases.

### Strong case-study version

> As a Full-Stack Development Contributor, I worked closely with the project owner across the complete development lifecycle of Rate My Style AI. I contributed to React Native interfaces, Supabase-backed application workflows, and Gemini/OpenAI integrations that transform outfit photos into structured ratings and personalised recommendations. My work also covered API integration, application states, responsive mobile UI, testing, debugging, and production-release support.

Use **“Full-Stack Development Contributor”**, not “Software Development Contributor.” It communicates your scope more accurately while remaining honest about shared ownership.







