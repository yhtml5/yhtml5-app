function namespace(namespace, name, v) {
  return (
    namespace + '-' + name
  )
}

const UpdateState = namespace('Gobang', 'UpdateState')

export { UpdateState }

