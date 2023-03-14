// Підключаємо технологію express для back-end сервера
const express = require('express')
// Cтворюємо роутер - місце, куди ми підключаємо ендпоїнти
const router = express.Router()

// ================================================================

var header = {
  name: { firstname: 'Sergiy', lastname: 'Sergiyenko' },
  position: 'Junior Front-end JS developer',
  salary: '600$',
  adress: "Планета Theмля"
}



var footer = {
  social: {
    email: {
      text: 'siroga@mail.com',
      href: "mailto:siroga@mail.com"
    },
    phone: {
      text: '+380670000123',
      href: "tel:+380670000123"
    },
    linkedin: {
      text: 'linkedin',
      href: "https://www.linkedin.com/in/siroga"
    }
  }
}

// ================================================================
// router.get Створює нам один ентпоїнт

//           ↙ тут вводимо шлях (PATH) до сторінки
router.get('/', function (req, res) {
  // res.render генерує нам HTML сторінку

  //            ↙ cюди вводимо назву файлу з сontainer
  res.render('index', {})
  //                  ↑↑ сюди вводимо JSON дані
})

// ================================================================

//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/summary', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('summary', {
    // ↙ сюди вводимо JSON дані
    page: {
      title: 'Resume | Summary',
    },
    header,
    main: {
      summary: {
        title: 'Summary',
        text: `   Open-minded for new technologies, with 1 years of experience in development. Whenever I start to
      work on a new project I learn the domain and try to understand the idea of the project. Good team
      player, every colleague is a friend to me.`,
      },
      experience: {
        title: 'Other experience',
        text: `Pet project for parsing sport betting data from different platforms ( odds ) and sport statistics (
          tournament position, goals etc), analyzing by simple mathematics models and preparing probability
          for such events like: money line - first win / draw / second win, totals etc.`
      },
    },
    footer,
  })
})
// ================================================================

//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/scills', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('scills', {
    // ↙ сюди вводимо JSON дані
    page: {
      title: 'Resume | Scills',
    },
    header,
    main: {
      scills: [
        { name: "HTML", point: 90, isTop: true },
        { name: "Handlebars", point: 80, isTop: true },
        { name: "VS Code", point: 80, isTop: false },
        { name: "GIT", point: 70, isTop: false },
        { name: 'NPM', point: 0 },
        { name: "PHP", point: null }
      ],
      hobbies: [
        { name: "Women", isMain: true },
        { name: "Wine", isMain: false },
        { name: "Punk rock", isMain: false }
      ]
    },
    footer,
  })

})
// ================================================================
// ================================================================

//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/education', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('education', {
    // ↙ сюди вводимо JSON дані
    page: {
      title: 'Resume | Education',
    },
    header,
    main: {
      universities: [
        { name: "Hogvard", isEnd: true },
        { name: "PTU #13", isEnd: true },
        { name: "Shchuchynska school", isEnd: true },
        { name: "Mogilivska school", isEnd: true },
        { name: "Cinic Academy", isEnd: false },
        { name: "Police Academy", isEnd: false },
      ],
      certificates: [
        { name: "About vaccination against rabies", id: 111222 },
        { name: "In field conditions without diarrhea", id: 111322 },
        { name: "The ability to smile happily while being a vile scumbag", id: 111422 },
      ]
    },
    footer,
  })

})

// ================================================================

//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/work', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('work', {
    // ↙ сюди вводимо JSON дані
    layout: 'big',
    page: {
      title: 'Resume | Work',
    },
    header,
    main: {
      works: [
        {
          position: 'Junior Full Stack Developer',
          company: {
            name: 'IT Brains', url: null
          }, //'https://itbrains.com.ua', },
          duration: { from: '20.02.2021', to: null, },
          projektAmount: 3,
          projekts: [{
            name: "Resume",
            url: 'https://resume.com.ua',
            about: 'Pet project for parsing sport betting data from different platforms ( odds ) and sport statistics ( tournament position, goals etc), analyzing by simple mathematics models and preparing probability for such events like: money line - first win / draw / second win, totals etc.',
            stacks: [
              { name: "HTML" },
              { name: "Handlebars" },
              { name: "VS Code" },

            ],
            avards: [
              { name: "About vaccination against rabies", id: 111222 },
              { name: "In field conditions without diarrhea", id: 111322 },
            ],
            stacksAmaunt: 5,
            avardsAmaunt: 2,
          }]
        },

      ]

    },
    footer,
  })

  // ================================================================

  //              ↙ тут вводимо шлях (PATH) до сторінки
  router.get('/person', function (req, res) {
    //             ↙ cюди вводимо назву файлу з сontainer
    res.render('person', {
      layout: 'basic',
      person: {
        name: 'Emma Johnson',
        age: 32,
        gender: 'Female',
        address: {
          street: '123 Main St',
          city: 'New York',
          state: 'NY',
          zip: '10001',
          country: 'USA',
        },
        education: [
          {
            degree: 'Bachelor of Science',
            major: 'Computer Science',
            university:
              'Massachusetts Institute of Technology',
            graduationYear: 2012,
          },
        ],
        workExperience: [
          {
            company: 'Google',
            title: 'Software Engineer',
            startDate: '2012-06-01',
            endDate: '2016-12-31',
            responsibilities: [
              'Developed new features for Google Maps',
              'Worked on improving search algorithms',
            ],
            year_founded: 1990,
            industry: 'Technology',
            employees: [
              {
                name: 'John Smith',
                position: 'CEO',
                department: 'Executive',
                projects: [
                  {
                    name: 'Project Alpha',
                    description:
                      'Developing new software platform',
                    status: 'In Progress',
                    teams: [
                      {
                        team_name: 'Awesome Team',
                        team_leader: {
                          name: 'John Smith',
                          title: 'Team Leader',
                          email: 'john.smith@example.com',
                        },
                        team_members: [
                          {
                            name: 'Alice Johnson',
                            title: 'Software Engineer',
                            email:
                              'alice.johnson@example.com',
                            skills: ['Java', 'Python', 'SQL'],
                            projects: [
                              {
                                name: 'Project A',
                                description:
                                  'Lorem ipsum dolor sit amet',
                                technologies: [
                                  'Java',
                                  'Spring Framework',
                                ],
                                team_members: [
                                  {
                                    name: 'Bob Lee',
                                    title:
                                      'Software Engineer',
                                  },
                                  {
                                    name: 'Cindy Chen',
                                    title: 'UI Designer',
                                  },
                                ],
                              },
                            ],
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
    })
  })

  // ================================================================



  // ================================================================

  router.get('/program', function (req, res) {
    //             ↙ cюди вводимо назву файлу з сontainer
    res.render('program', {
      layout: 'basic',
      program: {
        excursion: {
          name: 'Cultural Tour',
          location: {
            city: 'Paris',
            country: 'France',
          },
          date: '2023-06-15',
          program: [
            {
              name: 'Museum Visit',
              type: 'Art',
              duration: 3,
              details: {
                museum: {
                  name: 'The Louvre',
                  location: {
                    address: 'Rue de Rivoli',
                    city: 'Paris',
                    country: 'France',
                  },
                  exhibits: [
                    {
                      name: 'Mona Lisa',
                      artist: 'Leonardo da Vinci',
                      description: 'Iconic portrait painting',
                      audio_guide: true,
                    },
                    {
                      name: 'Winged Victory of Samothrace',
                      artist: null,
                      description:
                        'Ancient Greek statue of Nike, the goddess of victory',
                      audio_guide: true,
                    },
                  ],
                },
                guide: {
                  name: 'Francois',
                  language: 'French',
                  rating: 4.8,
                },
              },
            },
            {
              name: 'Cultural Show',
              type: 'Music and Dance',
              duration: 2,
              details: {
                venue: {
                  name: 'Moulin Rouge',
                  location: {
                    address: '82 Boulevard de Clichy',
                    city: 'Paris',
                    country: 'France',
                  },
                },
                performers: [
                  {
                    name: 'Mireille Mathieu',
                    type: 'Chanson singer',
                  },
                  {
                    name: "Ballet de l'Opéra National de Paris",
                    type: 'Classical ballet company',
                  },
                ],
                guide: {
                  name: 'Sophie',
                  language: 'English',
                  rating: 4.6,
                },
              },
            },
          ],
        },
      },
    })
  })

  // ================================================================

  // ================================================================

  router.get('/web', function (req, res) {
    //             ↙ cюди вводимо назву файлу з сontainer
    res.render('web', {
      layout: 'basic',
      web: {
        languages: [
          {
            name: 'HTML',
            version: 'HTML5',
            description:
              'Hypertext Markup Language is the standard markup language for creating web pages and web applications.',
            elements: [
              {
                name: 'div',
                description:
                  'Defines a division or a section in an HTML document.',
                attributes: [
                  {
                    name: 'id',
                    description:
                      'Specifies a unique id for an HTML element.',
                  },
                  {
                    name: 'class',
                    description:
                      'Specifies one or more class names for an HTML element.',
                  },
                ],
              },
              {
                name: 'p',
                description:
                  'Defines a paragraph in an HTML document.',
                attributes: [
                  {
                    name: 'id',
                    description:
                      'Specifies a unique id for an HTML element.',
                  },
                  {
                    name: 'class',
                    description:
                      'Specifies one or more class names for an HTML element.',
                  },
                ],
              },
            ],
          },
          {
            name: 'CSS',
            version: 'CSS3',
            description:
              'Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in HTML or XML.',
            properties: [
              {
                name: 'color',
                description: 'Sets the color of the text.',
                values: [
                  {
                    value: 'red',
                    description:
                      'Sets the text color to red.',
                  },
                  {
                    value: 'blue',
                    description:
                      'Sets the text color to blue.',
                  },
                ],
              },
              {
                name: 'background-color',
                description:
                  'Sets the background color of an element.',
                values: [
                  {
                    value: 'white',
                    description:
                      'Sets the background color to white.',
                  },
                  {
                    value: 'black',
                    description:
                      'Sets the background color to black.',
                  },
                ],
              },
            ],
          },
          {
            name: 'JavaScript',
            version: 'ES6',
            description:
              'JavaScript is a programming language used to create interactive effects within web browsers.',
            functions: [
              {
                name: 'alert()',
                description:
                  'Displays an alert box with a specified message and an OK button.',
                parameters: [
                  {
                    name: 'message',
                    type: 'string',
                    description:
                      'The message to display in the alert box.',
                  },
                ],
              },
              {
                name: 'getElementById()',
                description:
                  'Returns the element with the specified ID.',
                parameters: [
                  {
                    name: 'id',
                    type: 'string',
                    description:
                      'The ID of the element to find.',
                  },
                ],
              },
            ],
          },
        ],
      },
    })
  })

  // ================================================================

})
// Підключаємо роутер до бек-енду
module.exports = router
