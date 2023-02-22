import stringSimilarity from 'string-similarity'

export const delayMs = (ms: number): Promise<void> => new Promise<void>(
  (resolve) => {
    setTimeout(resolve, ms)
  }
)

export const checkEqual = <T>(arr: T[]) => {
  const setItem = new Set(arr);
  return setItem.size <= 1;
}

export const computeArrSimilarity = (arr: string[]): number => {
  const scores = arr.map((e, i, arr) => {
    if (arr[i-1]) {
      return stringSimilarity.compareTwoStrings(e, arr[i-1])
    }
  })
  scores.shift()

  const sum = scores.reduce((acc, cur) => acc+cur, 0)
  const avg = sum / scores.length

  return avg
}