//SWAGGER
let swaggerUI = require('swagger-ui-express')
let swaggerJsDoc = require('swagger-jsdoc')
let swaggerSpec = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'API',
      description: 'API fruteria DAW',
      contact: {
        name: 'Fruteria DAW',
        email: 'support@gmail.com',
        url: 'http://www.fruteriadaw.com',
      },
      license: {
        name: 'GPLv3',
        url: 'https://www.gnu.org/licenses/gpl-3.0.en.html',
      },
      version: '1.0.0',
    },
    paths: {
      '/api/listarfruta': {
        get: {
          summary: 'Return all fruits',
          tags: ['fruits'],
          responses: {
            '200': {
              description: 'A list of fruits.',
              content: {
                'application/json': {
                  schema: {
                    type: 'object',
                    properties: {
                      id: {
                        type: 'integer',
                        format: 'int64',
                      },
                      nombre: {
                        type: 'string',
                      },
                      color: {
                        type: 'string',
                      },
                    },
                    example: {
                      id: 1,
                      nombre: 'Naranja',
                      color: 'naranja'
                    },
                  },
                },
              },
            },
          },
        },
      },
      '/api/savefruta': {
        post: {
          summary: 'Save a fruit in the system',
          tags: ['fruits'],
          requestBody: {
            description: 'A fruit to create',
            required: true,
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  properties: {
                    nombre: {
                      type: 'string',
                    },
                    color: {
                      type: 'string',
                    },
                  },
                },
              },
            },
          },
          responses: {
            '200': {
              description: 'A list of fruits.',
              content: {
                'application/json': {
                  schema: {
                    type: 'array',
                    items: {
                      type: 'object',
                      properties: {
                        id: {
                          type: 'integer',
                          format: 'int64',
                        },
                        nombre: {
                          type: 'string',
                        },
                        color: {
                          type: 'string',
                        },
                      },
                      example: {
                        id: 1,
                        nombre: 'Naranja',
                        color: 'naranja'
                      },
                    },
                  },
                },
              },
            },
          },
        },
      },
      '/api/updatefruta/{id}': {
        put: {
          summary: 'Update a fruit from the system',
          tags: ['fruits'],
          parameters: [
            {
              name: 'id',
              in: 'path',
              description: 'ID of fruit to update',
              required: true,
              schema: {
                type: 'integer',
                format: 'int64',
              },
            },
          ],
          requestBody: {
            description: 'A fruit to update',
            required: true,
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  properties: {
                    nombre: {
                      type: 'string',
                    },
                    color: {
                      type: 'string',
                    },
                  },
                },
              },
            },
          },
          responses: {
            '200': {
              description: 'A list of fruits.',
              content: {
                'application/json': {
                  schema: {
                    type: 'array',
                    items: {
                      type: 'object',
                      properties: {
                        id: {
                          type: 'integer',
                          format: 'int64',
                        },
                        nombre: {
                          type: 'string',
                        },
                        color: {
                          type: 'string',
                        },
                      },
                      example: {
                        id: 1,
                        nombre: 'Naranja',
                        color: 'naranja'
                      },
                    },
                  },
                },
              },
            },
          },
        },
      },
      '/api/deletefruta/{id}': {
        delete: {
          summary: 'Delete a fruit from the system',
          tags: ['fruits'],
          parameters: [
            {
              name: 'id',
              in: 'path',
              description: 'ID of fruit to delete',
              required: true,
              schema: {
                type: 'integer',
                format: 'int64',
              },
            },
          ],
          responses: {
            '200': {
              description: 'A list of fruits.',
              content: {
                'application/json': {
                  schema: {
                    type: 'object',
                    properties: {
                      id: {
                        type: 'integer',
                        format: 'int64',
                      },
                      nombre: {
                        type: 'string',
                      },
                      color: {
                        type: 'string',
                      },
                    },
                    example: {
                      id: 1,
                      nombre: 'Naranja',
                      color: 'naranja',
                    },
                  },
                },
              },
            },
          },
        },
      },
      '/api/listarverdura': {
        get: {
          summary: 'Return all verduras',
          tags: ['verduras'],
          responses: {
            '200': {
              description: 'A list of verduras.',
              content: {
                'application/json': {
                  schema: {
                    type: 'object',
                    properties: {
                      id: {
                        type: 'integer',
                        format: 'int64',
                      },
                      nombre: {
                        type: 'string',
                      },
                      color: {
                        type: 'string',
                      },
                    },
                    example: {
                      id: 1,
                      nombre: 'Pepino',
                      color: 'Verde',
                    },
                  },
                },
              },
            },
          },
        },
      },
      '/api/saveverdura': {
        post: {
          summary: 'Save a verdura in the system',
          tags: ['verduras'],
          requestBody: {
            description: 'A verdura to create',
            required: true,
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  properties: {
                    nombre: {
                      type: 'string',
                    },
                    color: {
                      type: 'string',
                    },
                  },
                },
              },
            },
          },
          responses: {
            '200': {
              description: 'A list of verduras.',
              content: {
                'application/json': {
                  schema: {
                    type: 'object',
                    properties: {
                      id: {
                        type: 'integer',
                        format: 'int64',
                      },
                      nombre: {
                        type: 'string',
                      },
                      color: {
                        type: 'string',
                      },
                    },
                    example: {
                      id: 1,
                      nombre: 'Pepino',
                      color: 'Verde',
                    },
                  },
                },
              },
            },
          },
        },
      },
      '/api/updateverdura/{id}': {
        put: {
          summary: 'Update a verdura from the system',
          tags: ['verduras'],
          parameters: [
            {
              name: 'id',
              in: 'path',
              description: 'ID of verdura to update',
              required: true,
              schema: {
                type: 'integer',
                format: 'int64',
              },
            },
          ],
          requestBody: {
            description: 'A verdura to update',
            required: true,
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  properties: {
                    nombre: {
                      type: 'string',
                    },
                    color: {
                      type: 'string',
                    },
                  },
                },
              },
            },
          },
          responses: {
            '200': {
              description: 'A list of verduras.',
              content: {
                'application/json': {
                  schema: {
                    type: 'object',
                    properties: {
                      id: {
                        type: 'integer',
                        format: 'int64',
                      },
                      nombre: {
                        type: 'string',
                      },
                      color: {
                        type: 'string',
                      },
                    },
                    example: {
                      id: 1,
                      nombre: 'Pepino',
                      color: 'Verde',
                    },
                  },
                },
              },
            },
          },
        },
      },
      '/api/deleteverdura/{id}': {
        delete: {
          summary: 'Delete a verdura from the system',
          tags: ['verduras'],
          parameters: [
            {
              name: 'id',
              in: 'path',
              description: 'ID of verdura to delete',
              required: true,
              schema: {
                type: 'integer',
                format: 'int64',
              },
            },
          ],
          responses: {
            '200': {
              description: 'A list of verduras.',
              content: {
                'application/json': {
                  schema: {
                    type: 'object',
                    properties: {
                      id: {
                        type: 'integer',
                        format: 'int64',
                      },
                      nombre: {
                        type: 'string',
                      },
                      color: {
                        type: 'string',
                      },
                    },
                    example: {
                      id: 1,
                      nombre: 'Pepino',
                      color: 'Verde',
                    },
                  },
                },
              },
            },
          },
        },
      },
    },
  },
  apis: ['routes/routes.js'],
}
let swaggerDocs = (app, port) => {
  app.use(
    '/api/docs',
    swaggerUI.serve,
    swaggerUI.setup(swaggerJsDoc(swaggerSpec)),
  )
  console.log(`Swagger docs disponible en https://localhost:${port}/api/docs`)
}

module.exports = { swaggerDocs }
