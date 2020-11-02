import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { deleteWordById } from '../service/api-fetch'

export default function WordDeleteContainer() {
  const [deleteWord, setDeleteWord] = useState(false)
  const { id } = useParams()

  useEffect(async () => {
    await deleteWordById(id);
    await setDeleteWord(true)
  }, [])
  return (
    <div>
      {deleteWord === true ? <h1>Delete complete!</h1> : <h1>Failed to delete...</h1>}
    </div>
  )
}
