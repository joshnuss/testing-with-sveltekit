export function error(errors) {
  return result({ success: false, errors })
}

export function success(data) {
  return result({ success: true, data })
}

function result({ success, data, errors }) {
  return { success, data, errors }
}
