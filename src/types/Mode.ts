import type { PERMISSIONS } from '../conts'

type Permissions = typeof PERMISSIONS

type Permission = Permissions[keyof Permissions]

type Mode = `${Permission}${Permission}${Permission}`

export default Mode
