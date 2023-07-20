export const findSentiment = value => {
  if (value > 66) return 'positive'
  if (value < 34) return 'negetive'
  return 'neutral'
}
