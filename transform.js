module.exports = {
    clean: (operationId) => {  
        return operationId.split('_').slice(-2, -1)[0]
    }
}
