import { __prod__ } from "./constants";
import { Post } from "./entities/Post";
import { MikroORM } from "@mikro-orm/core";
import path from 'path'

export default {
    migrations: {
        path: path.join(__dirname, './migrations')
    },
    entities: [Post],//указываем, какие сущности будут управляться MikroORM
    dbName: 'lireddit',//далее параметры подключения к базе данных
    type: 'postgresql',
    debug: !__prod__
} as Parameters<typeof MikroORM.init>[0]//тут следующая магия:
//Parameters - встроенный typescript-тип, который позволяет извлекать типы
//  параметров из функции. Это удобный способ получения типов аргументов,
//  передаваемых в функцию.
//MikroOrm.init() - эта функция может принимать 3 типа интерфейсов. Первый из них мне и нужен, поэтому обращаемся к нулевому индексу