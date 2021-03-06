import * as types from './socket-types'

export const join = (socket, joinId) => socket.emit(types.JOIN_IDE, {joinId})
export const updateCode = (socket, update) => socket.emit(types.UPDATE_CODE, {idx: update.idx, master:update.master, code: update.code })

export const initContainer = (socket, uid) => socket.emit(types.CONTAINER_INIT, {uid})
export const cpContainer = (socket, uid, filenames) => socket.emit(types.CONTAINER_CP, {uid, filenames})
export const cmdContainer = (socket, uid, cmd) => socket.emit(types.CONTAINER_COMMAND, {uid, cmd})
