/*
const flashcards: Flashcard[] = [
  {
    topic_id:"",
    title: "What is web security?",
    description: "Web security is the practice of protecting websites and web applications from various types of online threats, such as hacking, phishing, and data breaches."
  },
  {
    topic_id:"",
    title: "Why is web security important?",
    description: "Web security is important because it ensures the confidentiality, integrity, and availability of data, protecting users and organizations from cyber-attacks."
  },
  {
    topic_id:"",
    title: "What are some common web security threats?",
    description: "Common threats include cross-site scripting (XSS), SQL injection, cross-site request forgery (CSRF), and data breaches."
  },
  {
    topic_id:"",
    title: "What is XSS?",
    description: "Cross-Site Scripting (XSS) is a vulnerability where an attacker injects malicious scripts into web pages viewed by users."
  },
  {
    topic_id:"",
    title: "How can XSS be prevented?",
    description: "By sanitizing and escaping user inputs, using Content Security Policy (CSP), and applying proper output encoding."
  },
  {
    topic_id:"",
    title: "What is SQL Injection?",
    description: "SQL Injection is a code injection technique where an attacker exploits vulnerabilities in a web application's database query execution."
  },
  {
    topic_id:"",
    title: "How is SQL Injection prevented?",
    description: "Use prepared statements, parameterized queries, and proper input validation."
  },
  {
    topic_id:"",
    title: "What is CSRF?",
    description: "Cross-Site Request Forgery (CSRF) is an attack where a user is tricked into performing actions on a website without their consent."
  },
  {
    topic_id:"",
    title: "How can CSRF be prevented?",
    description: "Use anti-CSRF tokens, same-site cookies, and check for the Referer header."
  },
  {
    topic_id:"",
    title: "What is the difference between authentication and authorization?",
    description: "Authentication is verifying the identity of a user, while authorization is determining the user's access rights."
  }
];
*/


/*
const quizzes: Quiz[] = [
  {
    id: '1',
    topic_id: '1',
    question: 'Which of the following is a common threat to web applications?',
    option_1: 'DDoS attacks',
    option_2: 'SQL Injection',
    option_3: 'Power failure',
    option_4: 'Network latency',
    correct_option: '2',
  },
  {
    id: '2',
    topic_id: '1',
    question: 'What is the primary goal of web security?',
    option_1: 'To improve website performance',
    option_2: 'To protect user data from unauthorized access',
    option_3: "To increase the website's traffic",
    option_4: 'To ensure high availability',
    correct_option: '2',
  },
  {
    id: '3',
    topic_id: '1',
    question: 'Which of these tools can be used for web security testing?',
    option_1: 'Google Analytics',
    option_2: 'Burp Suite',
    option_3: 'Photoshop',
    option_4: 'WordPress',
    correct_option: '2',
  },
];
const quiz2: Quiz[] = [
  {
    id: '4',
    topic_id: '2',
    question: 'What is the main goal of an XSS attack?',
    option_1: 'To crash the server',
    option_2: 'To steal cookies or session tokens',
    option_3: 'To overload the server with traffic',
    option_4: 'To break the encryption',
    correct_option: '2',
  },
  {
    id: '5',
    topic_id: '2',
    question: 'Which of the following is a type of XSS attack?',
    option_1: 'SQL Injection',
    option_2: 'Reflected XSS',
    option_3: 'CSRF',
    option_4: 'Phishing',
    correct_option: '2',
  },
  {
    id: '6',
    topic_id: '2',
    question: 'Which technique can help mitigate XSS vulnerabilities?',
    option_1: 'Using a WYSIWYG editor',
    option_2: 'Input validation and output encoding',
    option_3: 'Using JavaScript libraries',
    option_4: 'Enabling HTTP caching',
    correct_option: '2',
  },
  {
    id: '7',
    topic_id: '3',
    question: 'What is the main danger of SQL Injection?',
    option_1: 'It causes network latency',
    option_2:
      'It allows an attacker to manipulate or retrieve sensitive data from a database',
    option_3: 'It prevents users from logging in',
    option_4: 'It causes web pages to load slower',
    correct_option: '2',
  },
  {
    id: '8',
    topic_id: '3',
    question: 'Which of the following is a way to prevent SQL Injection?',
    option_1: 'Using a strong password',
    option_2: 'Using parameterized queries',
    option_3: 'Encrypting database backups',
    option_4: 'Disabling HTTP caching',
    correct_option: '2',
  },
  {
    id: '9',
    topic_id: '3',
    question: 'Which of the following is NOT a common SQL Injection technique?',
    option_1: 'Union-based',
    option_2: 'Error-based',
    option_3: 'Time-based blind',
    option_4: 'Layered DNS',
    correct_option: '4',
  },
  {
    id: '10',
    topic_id: '4',
    question: 'What is the goal of a CSRF attack?',
    option_1: 'To inject malicious scripts into a web page',
    option_2: 'To trick a user into making a request without their knowledge',
    option_3: 'To overload a server with requests',
    option_4: "To steal the user's credentials",
    correct_option: '2',
  },
];
*/


/*
const users: User[] = [
  { name: 'Akshat', username: 'akshat', password: 'akshat' },
  { name: 'Dipen', username: 'dipen', password: 'dipen' },
  { name: 'Nihar', username: 'nihar', password: 'nihar' },
];

const results: Result[] = [
  { question_id: '1', user_id: '0', status: true },
  { question_id: '2', user_id: '0', status: true },
  { question_id: '3', user_id: '0', status: true },
  { question_id: '1', user_id: '1', status: true },
  { question_id: '2', user_id: '1', status: true },
  { question_id: '3', user_id: '1', status: false },
  { question_id: '1', user_id: '2', status: false },
  { question_id: '2', user_id: '2', status: true },
  { question_id: '3', user_id: '2', status: false },
];
*/


/*
const topics: Topic[] = [
  {
    name: 'Introduction to Web Security',
    description:
      'Web security is the practice of protecting websites and web applications from various types of online threats, such as hacking, phishing, and data breaches.',
  },
  {
    name: 'Cross-Site Scripting (XSS)',
    description:
      'Cross-Site Scripting (XSS) is a vulnerability where an attacker injects malicious scripts into web pages viewed by users.',
  },
  {
    name: 'SQL Injection',
    description:
      "SQL Injection is a code injection technique where an attacker exploits vulnerabilities in a web application's database query execution.",
  },
  {
    name: 'Cross-Site Request Forgery (CSRF)',
    description:
      'Cross-Site Request Forgery (CSRF) is an attack where a user is tricked into performing actions on a website without their consent.',
  },
  {
    name: 'Authentication and Authorization',
    description:
      "Authentication is verifying the identity of a user, while authorization is determining the user's access rights.",
  },
  {
    name: 'TLS/SSL and HTTPS',
    description:
      'TLS (Transport Layer Security) and SSL (Secure Sockets Layer) are cryptographic protocols used to secure communication over the internet.',
  },
];
*/

