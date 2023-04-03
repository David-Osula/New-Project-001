import {Row,Col} from 'react-bootstrap'
import React from 'react'
import useFetchData from '../../hooks/useFetchData'
import { MediaCard, PageLayout } from '../../components'
import Spinner from '../../utils/Spinner'
import useInfiniteScroll from '../../hooks/useInfiniteScroll'

export default function Popular() {
    const {error,data,setPage,newData} =useFetchData ('movie/popular')
    const [isFetching, setIsFetching] = useInfiniteScroll(fetchMore)
    function fetchMore () {
      setTimeout(() => {
        setPage ((prev)=> prev + 1)
        setIsFetching(false)
        },5000);
    }
    if(data) return <Spinner/>
  return (
    <PageLayout  heading= 'popular' error ={error}>
    <Row className='gy-2'>
          {[...newData, ...data].map((popular) => (
            <Col xs={6} md={3} xl={2} key={popular.id}>
              <MediaCard {...popular}/>
            </Col>
          ))}
        </Row>
        {isFetching && <Spinner/>}
    </PageLayout>
  )
}
