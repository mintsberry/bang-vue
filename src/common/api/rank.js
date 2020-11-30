import { request } from './request'

export function getMoviesRank () {
  return request('/api/v2/movie/rank_list')
}
export function getBookRank () {
  return request('/api/v2/book/rank_list')
}
export function getTvRank () {
  return request('/api/v2/tv/rank_list')
}
export function getDetail (id, params) {
  return request(`/api/v2/subject_collection/${id}/items`, params)
}
// export function getMoviesRank () {
//   return request('/api/movie/rank_list')
// }
