import PropTypes from 'prop-types'
import { BounceLoader } from 'react-spinners'

function FullScreenLoader({isLoading}) {
    if(!isLoading) return;
  return (
    <section className='min-h-[50vh] flex items-center justify-center'><BounceLoader/></section>
  )
}

FullScreenLoader.propTypes = {
    isLoading: PropTypes.bool
}

export default FullScreenLoader