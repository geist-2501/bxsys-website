import React, { useState } from 'react'
import style from './Links.module.scss';
import PropTypes from 'prop-types';
import { GithubLink } from '../mediaLink/MediaLink.comp';
import { LinkedInLink } from '../mediaLink/MediaLink.comp';
import MediaLink from '../mediaLink/MediaLink.comp';

const compMatchers = [
  [/.*github\.com.*/g, (link) => <GithubLink url={link} />],
  [/.*linkedin\.com.*/g, (link) => <LinkedInLink url={link} />],
  [/.*/g, (link) => <MediaLink url={link} />]
]

const Links = ({links}) => {

  const [linkComps, setLinkComps] = useState([]);

  useEffect(() => {
    let comps = [];
    for (const link of links) {
      matcher = compMatchers.find(matcher => matcher[0].test(link));
      comps.push(matcher[1](link)); // This makes me scream inside.
    }

    setLinkComps(comps);
  }, [links]);

  return (
    <>
      {linkComps.map((LinkComp, i) => <LinkComp key={i} />)}
    </>
  )
}

Links.propTypes = {
  links: PropTypes.array.isRequired
}

export default Links;
