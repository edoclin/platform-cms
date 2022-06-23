import {_get, _post, _put, _delete} from "~/plugins/axios";

export const getTmpToken = () => _get('/api/tencent-cos/tmp-token', null)
export const getCOSConfig = () => _get('/api/tencent-cos/config', null)
