import React , {useCallback, useContext, useEffect, useState} from 'react'
import {useHttp} from '../hooks/http.hook'
import {AuthContext} from '../context/AuthContext'

import './pages.scss'
export const ScorePage = () => {
  const {token} = useContext(AuthContext)
  const {request, loading} = useHttp()
  const [score, setScore] = useState()

  const getScore = useCallback(async () => {
    try {
      const fetched = await request('/api/score/topscore', 'GET', null, {Authorization: `Bearer ${token}`})
      setScore(fetched)
    } catch (e) {}
   }, [token, request])

   useEffect(() => {
     getScore()
   }, [getScore])

   if(loading || score === undefined){
     return <>Loading...</>
   }

   console.log("Score:", score)

  return(
    <div className="score">
      <table >
        <thead >
          <tr>
            <th>
              №
            </th>
            <th>
              id
            </th>
            <th>
              Name
            </th>
            <th>
              Point Scored
            </th>
          </tr>
        </thead>
        <tbody >
          {
            score.map((test, i) => {
              return(
                <tr key={i+1}>
                  <td>
                    {i}
                  </td>
                  <td>
                    {test._id}
                  </td>
                  <td>
                    {test.name}
                  </td>
                  <td>
                    {test.score}
                  </td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </div>
  )
}