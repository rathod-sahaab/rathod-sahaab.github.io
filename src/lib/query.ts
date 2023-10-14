export function setQueryParams({ key, value }: { key: string; value: string }) {
  // set query param
  const urlParams = new URLSearchParams(window.location.search)
  urlParams.set(key, value)
  window.history.replaceState({}, '', `${window.location.pathname}?${urlParams}`)
}

export function getTagFromQuery({ key }: { key: string; }) {
  const urlParams = new URLSearchParams(window.location.search)
  return urlParams.get(key)
}

export function removeQueryParam({ key }: { key: string }) {
  const urlParams = new URLSearchParams(window.location.search)
  urlParams.delete(key)
  const queryString = urlParams.toString()
  window.history.replaceState({}, '', `${window.location.pathname}${queryString ? '?' + queryString : ''}`)
}
