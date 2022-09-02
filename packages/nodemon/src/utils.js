export function debounce(fn, delay) {
  let timer
  return () => {
    clearTimeout(timer)
    timer = setTimeout(() => fn(), delay)
  }
}