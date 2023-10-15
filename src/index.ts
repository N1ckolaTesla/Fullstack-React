import { MikroORM } from '@mikro-orm/core'
import { __prod__ } from './constants'
import { Post } from './entities/Post'
import mikroOrmConfig from './mikro-orm.config'

const main = async () => {
    const orm = await MikroORM.init(mikroOrmConfig)//инициализация MikroORM и подключение к базе данных
    const em = orm.em.fork() //создаём контексный EntityManager
    const post = em.create(Post, {createAt: new Date(), title: 'my first post'})//создаём экзепляр сущности Post
    await orm.em.persistAndFlush(post)
    console.log('------------------sql 2 --------------')
}
main().catch(err => console.log(err))
