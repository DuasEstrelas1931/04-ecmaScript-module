async function connectToDatabase(dataName) {
    // lógica de conexão
    console.log(`connect from database ${dataName}`);
};

async function disconnectDatabase(dataName) {
    // lógica de desconexão
    console.log(`disconnect from database ${dataName}`);
    
}

export {connectToDatabase,
        disconnectDatabase
};
