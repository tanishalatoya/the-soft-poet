export const findRhymingWords = async (word) => {
  try {
    let response = await fetch(`https://api.datamuse.com/words?ml=emotion&rel_rhy=${word}`)
      if (!response.ok) {
        console.log(response);
        throw new Error('Your request was unsuccessful. Please try again.')
      } else {
        return await response.json()
      }
  } catch (error) {
    return error.message
  }
}

export const findWordDetails = async (word) => {
  try {
    let response = await fetch(`https://lingua-robot.p.rapidapi.com/language/v1/entries/en/${word}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'X-Rapidapi-key': '0c23c2afbdmsh9b5a46a83cc75e1p1e9e8ejsn569db86987ef'
      }
    })
    if (!response.ok) {
      throw new Error('Your request was unsuccessful. Please try again.')
    } else {
      return await response.json()
    }
  } catch (error) {
    return error.message
  }
}
