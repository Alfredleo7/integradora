const { Client } = require("pg");

const coneccionData = {
    user: "exjkbatc",
    host: "raja.db.elephantsql.com",
    database: "exjkbatc",
    password: "veDmLgEoEka-hSHtR2bjtKzmmtbhpSXB",
    port: 5432
};

const con = new Client(coneccionData);

con
    .connect()
    .then(() => {
        console.log("Conectado a la base de datos Postgres");
    })
    .catch(err => {
        console.error("Error al conectar a la base de datos Postgres" + err);
    });

async function asyncForEach(array, callback) {
    for (let index = 0; index < array.length; index++) {
        await callback(array[index], index, array);
    }
}

module.exports = {
    getEscenarios: async () => {
        let escenarios = (
            await con.query(
                `SELECT * FROM escenario`
            )
        ).rows;
        return escenarios;
    },
    getJuegosByEscenario: async (idEscenario) => {
        let rooms = (
            await con.query(
                `SELECT * FROM room WHERE id_escenario = ${idEscenario}`
            )
        ).rows;
        let games = (
            await con.query(
                `SELECT * FROM game WHERE ${rooms.map(room=>`id = ${room.id_juego}`).join(' OR ')}`
            )
        ).rows;
        return games;
    },
    getLevelsByGame: async (gameId) => {
        let chapters = (
            await con.query(
                `SELECT * FROM chapter WHERE id_game = ${gameId}`
            )
        ).rows;
        let levels = (
            await con.query(
                `SELECT * FROM nivel WHERE ${chapters.map(chapter=>`id_chapter = ${chapter.id}`).join(' OR ')}`
            )
        ).rows;
        return levels;
    },
    getMetrics: async () => {
        let metricas = (
            await con.query(
                `SELECT * FROM metrica`
            )
        ).rows;

        await asyncForEach(
            metricas,
            async metrica => {
                let caracteristica = (
                    await con.query(
                        `SELECT nombre, descripcion FROM caracteristica WHERE id = ${metrica.id_caracteristica}`
                    )
                ).rows[0];
                metrica.nombre_car = caracteristica.nombre;
                metrica.descripcion_car = caracteristica.descripcion;
            }
        )
        return metricas;
    },
    getJugadores: async () => {
        let jugadores = (
            await con.query(
                `SELECT * FROM jugador`
            )
        ).rows;
        await asyncForEach(
            jugadores,
            async jugador => {
                jugador.cantidad = (
                    await con.query(
                        `SELECT COUNT(*) FROM nivel_usuario WHERE id_usuario = ${jugador.id}`
                    )
                ).rows[0].count;
            }
        )
        return jugadores;
    },
    getLevelUser: async () => {
        let level_user = (
            await con.query(
                `SELECT * FROM nivel_usuario`
            )
        ).rows;
        return level_user;
    },
    getLearnUserByLevel: async (levelId) => {
        let level = (
            await con.query(
                `SELECT * FROM nivel WHERE id = ${levelId}`
            )
        ).rows[0];
        let learn_user = (
            await con.query(
                `SELECT * FROM learn_jugador WHERE id_learning = ${level.id_learning}`
            )
        ).rows;
        return learn_user;
    },
    getNivelById: async (levelId) => {
        let nivel = (
            await con.query(
                `SELECT * FROM nivel WHERE id = ${levelId}`
            )
        ).rows;
        return nivel;
    },
    getJugadoresByEscenario: async (idEscenario) => {
        let rooms = (
            await con.query(
                `SELECT * FROM room WHERE id_escenario = ${idEscenario}`
            )
        ).rows;
        let jugadores = (
            await con.query(
                `SELECT * FROM jugador WHERE ${rooms.map(room=>`id_room=${room.id}`).join(' OR ')}`
            )
        ).rows;
        return jugadores;
    },
    getJugadoresExceptAnEscenario: async (idEscenario) => {
        let rooms = (
            await con.query(
                `SELECT * FROM room WHERE id_escenario != ${idEscenario}`
            )
        ).rows;
        let jugadores = (
            await con.query(
                `SELECT * FROM jugador WHERE ${rooms.map(room=>`id_room=${room.id}`).join(' OR ')}`
            )
        ).rows;
        return jugadores;
    },
    getLevelUserByEscenario: async (idEscenario) => {
        let room = (
            await con.query(
                `SELECT * FROM room WHERE id_escenario = ${idEscenario}`
            )
        ).rows;
        let jugadores = (
            await con.query(
                `SELECT * FROM jugador`
            )
        ).rows;
        let level_user = (
            await con.query(
                `SELECT * FROM nivel_usuario`
            )
        ).rows;
        let jugador_resp = [], respuesta = [];
        for(let i = 0; i < jugadores.length; i++) {
            for(let j = 0; j < room.length; j++) {
                if(jugadores[i].id_room == room[j].id) {
                    jugador_resp.push(jugadores[i]);
                    break;
                }
            }
        }
        for(let i = 0; i < level_user.length; i++) {
            for(let j = 0; j < jugador_resp.length; j++) {
                if(level_user[i].id_usuario == jugador_resp[j].id) {
                    respuesta.push(level_user[i]);
                    break;
                }
            }
        }

        return respuesta;
    },
    getReglaLinguisticaByCaracteristicaCodigo: async (idCaracteristica, codigo) => {
        let reglas = (
            await con.query(
                `SELECT * FROM regla WHERE id_caracteristica = '${idCaracteristica}' AND codigo = '${codigo}'`
            )
        ).rows;
        if(reglas.length)
            return reglas[0];
        else
            return null;
    },
    save_registro: async (registro) => {
        let campos = [
            'escenario',
            'escenario_description',
            'juego',
            'juego_nombre',
            'nivel',
            'nivel_nombre',
            'tiempo_juego',
            'n_wrong_prom',
            'n_right_prom',
            'num_try_prom',
            'intentos_ok',
            'correctas_ok',
            'incorrectas_ok',
            'tiempo_juego_ok',
            'eficiencia_valoracion',
            'eficiencia_conclusion',
            'efectividad_valoracion',
            'efectividad_conclusion',
            'flexibilidad_valoracion',
            'flexibilidad_conclusion',
            'satisfaccion_valoracion',
            'satisfaccion_conclusion',
            'jugabilidad_valoracion',
            'jugabilidad_conclusion',
        ];
        let query = `
INSERT INTO ML (
${campos.join(',\n')}
)
VALUES (
    ${
        campos.map(
            campo => {
                let value = registro[campo];
                if(typeof value == 'number') {
                    if(isNaN(value)) return 'null';
                    else return Number(value.toFixed(2));
                }
                else
                    return `'${value}'`
            }
        ).join(',\n')
    }
)
`;
        console.log(query);
        await con.query(query);
        console.log('Guardado')
    }
};