export function api_callback(params) {
  return $http({
    url: `/callback`,
    method: "get",
    params
  }).then(resp => {
    return Promise.resolve(resp.data);
  });
}
export function fetchReportlist(params) {
  return $http({
    url: '/officer_reportlist',
    method: 'post',
    data: params
  })
}