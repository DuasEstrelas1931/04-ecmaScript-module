export const key = {
    name: 'key',
    type: 'object',
    properties: {
        id: { type: 'integer' },
        name: { type: 'string' },
        description: { type: 'string' },
        },
    required: ['id', 'name'],
};

export const getDataFromApi = (params) => {
    console.log(`Data from api... ${params}`)
}