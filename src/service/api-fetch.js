// createWord, getAllWords, getWordById, updateWordById, deleteWordById

export const createWord = async (word) => {
  const res = await fetch('http://localhost:7890', {
    method: "POST",
    body: JSON.stringify(word),
    headers: { "Content-type": "application/json; charset=UTF-8" }
  })

  if (!res.ok) throw ('Failed to fetch from API')

  const apiRes = res.json()

  return apiRes
}
