/* eslint-disable @typescript-eslint/no-explicit-any */
import * as S from './styles'
import { Stack, Button } from '@chakra-ui/react'
import { useEffect, useState } from 'react'

export type PaginationProps = {
  totalPages: number
  currentPage: number
  fetchMore?: any
}

const Pagination = ({
  totalPages = 10,
  currentPage = 1,
  fetchMore = () => ({})
}: PaginationProps) => {
  const [pages, setPages] = useState<number[]>([])
  useEffect(() => {
    const aux = Array.from(new Array(1000)).map(
      (_: undefined, index) => index + 1
    )
    let p: number[] = []
    if (currentPage >= 2) {
      p = aux.slice(currentPage - 2, currentPage + 3)
      console.log(p)
      const hasTP = p.findIndex((page) => page === totalPages)
      if (hasTP !== -1) {
        console.log('tem', p, p.slice(0, hasTP + 1), hasTP)
        setPages([...p.slice(0, hasTP + 1)])
      } else {
        setPages([...p])
      }
    } else {
      const cp: number[] = Array.from(new Array(5)).map(
        (_, index: number) => index + 1
      )
      setPages([...cp])
    }
  }, [totalPages, currentPage])
  return (
    <S.Wrapper>
      <Stack direction="row" spacing={4}>
        <Button
          disabled={currentPage === 1}
          colorScheme="gray"
          size="lg"
          variant="outline"
        >
          prev
        </Button>
        {pages &&
          pages.map((page, index) => {
            return (
              <Button
                size="lg"
                colorScheme={currentPage === page ? 'red' : 'gray'}
                variant={currentPage === page ? 'solid' : 'outline'}
                key={index}
                onClick={() =>
                  fetchMore({
                    variables: {
                      offset: page,
                      limit: 6
                    }
                  })
                }
              >
                {page}
              </Button>
            )
          })}
        <Button
          disabled={currentPage === totalPages}
          colorScheme="gray"
          size="lg"
          variant="outline"
        >
          next
        </Button>
      </Stack>
    </S.Wrapper>
  )
}

export default Pagination
