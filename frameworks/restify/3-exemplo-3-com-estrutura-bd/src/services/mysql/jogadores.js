const jogadores = deps => {
    return {
        all: () => {
            return new Promise((resolve, reject) => {
                const { conn, errorHandler } = deps
                conn.query('SELECT * FROM jogador', (error, results) => {
                    if (error) {
                        errorHandler(error, 'Falha ao listar os jogadores', reject)
                        return false
                    }

                    resolve({ jogadores: results })
                })
            })
        },
        save: (nome) => {
            return new Promise((resolve, reject) => {
                const { conn, errorHandler } = deps
                conn.query('INSERT INTO jogador (name) values (?)', [nome], (error, results) => {
                    if (error) {
                        errorHandler(error, `Falha ao salvar o jogador ${nome}`, reject)
                        return false
                    }

                    resolve({ jogador: { nome, id: results.insertId } })
                })
            })
        },
        update: (id, nome) => {
            return new Promise((resolve, reject) => {
                const { conn, errorHandler } = deps
                conn.query('UPDATE jogador SET name = ? WHERE id = ?', [nome, id], (error, results) => {
                    if (error || !results.affectedRows) {
                        errorHandler(error, `Falha ao atualizar o jogador ${nome}`, reject)
                        return false
                    }

                    resolve({ jogador: { nome, id, affectedRows: results.affectedRows } })
                })
            })
        },
        del: (id) => {
            return new Promise((resolve, reject) => {
                const { conn, errorHandler } = deps
                console.log(id)
                conn.query('DELETE FROM jogador WHERE id = ?', [id], (error, results) => {
                    if (error || !results.affectedRows) {
                        errorHandler(error, `Falha ao deletar o jogador ${nome}`, reject)
                        return false
                    }

                    resolve({ message: "Jogador removido com sucesso", affectedRows: results.affectedRows })
                })
            })
        },
    }
}

module.exports = jogadores