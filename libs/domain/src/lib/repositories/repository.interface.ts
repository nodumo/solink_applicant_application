export interface RepositoryI<Id, EntityI> {
  getById(id: Id): EntityI
  getAll(): EntityI[]
}
