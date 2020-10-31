// createWord, getAllWords, getWordById, updateWordById, deleteWordById

export const createWord = async (word) => {
  const res = await fetch('http://localhost:7890/api/v1/words', {
    method: "POST",
    body: JSON.stringify(word),
    headers: { "Content-type": "application/json; charset=UTF-8" }
  })

  if (!res.ok) throw ('Failed to fetch from API')

  const apiRes = await res.json()

  return apiRes
}

export const getAllWords = async () => {
  const res = await fetch('http://localhost:7890/api/v1/words')

  if (!res.ok) throw ('Failed to fetch from API')

  const apiRes = await res.json()

  return apiRes
}

export const getWordById = async (id) => {
  const res = await fetch(`http://localhost:7890/api/v1/words/${id}`)

  if (!res.ok) throw ('Failed to fetch from API')

  const apiRes = await res.json()

  return apiRes
}
