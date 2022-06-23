import {_get, _post, _put, _delete} from "~/plugins/axios";

export const login = (params: any) => _post('/api/user/cms/login', params)
export const getPublicKey = () => _get('/api/user/cms/public-key', null)
