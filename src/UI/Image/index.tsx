import React, {lazy, Suspense} from 'react'

const LazyImage = lazy(() => import("./Image"))

type Props = {}

const Image = (props: Props) => {
  return (
    <Suspense>
        <LazyImage />
    </Suspense>
  )
}

export default Image