import React from 'react';
import Rhymes from '../Rhymes/Rhymes';
import NotFound from '../../components/NotFound/NotFound';
import LoadingIndicator from '../../components/LoadingIndicator/LoadingIndicator';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './RhymesContainer.scss';

const RhymesContainer = ({ rhymes, queriedWord, errorMessage, isLoaded }) => {
  console.log(isLoaded);
  
  const allRhymes = rhymes.map(rhyme => {
    return <Rhymes
      key={rhyme.score}
      rhyme={rhyme.word}
    />
  })

  return(
    <section className='rhymes-container'>
    {!isLoaded && <LoadingIndicator />}
    {!rhymes.length && errorMessage ? <NotFound /> :
      <section>
        <Link className='page-nav-link' to='/'>
          <p>Home</p>
        </Link>
        <h3>{ `${queriedWord}` }</h3>
        {!rhymes.length && <p data-testid='no-rhymes-message'>There are no rhymes related to <span>emotion</span> for that word.</p>}
        <ul>
          { allRhymes }
        </ul>
      </section>
    }
    </section>
  )
}

const mapStateToProps = state => ({
  rhymes: state.rhymes,
  queriedWord: state.queriedWord,
  errorMessage: state.errorMessage,
  isLoaded: state.isLoaded
})

export default connect(mapStateToProps)(RhymesContainer);

RhymesContainer.propTypes = {
  rhymes: PropTypes.array,
  queriedWord: PropTypes.string,
  errorMessage: PropTypes.string,
  isLoaded: PropTypes.bool
}
