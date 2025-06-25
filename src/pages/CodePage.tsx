import React from 'react'
import MediaContainer from '../components/MediaContainer'
import TextSection from '../components/TextSection'

const CodePage = () => {
  return (
    <React.Fragment>
      <TextSection title='Software Commissions' h5 fontstyle={{ fontSize: "1.2rem" }}>
          Do you have in mind just the perfect app you wish existed? Or maybe you want to automate some task, like sending an email everyday with a specific content? I made this website you're currrently browsing, in React, which I had no previous knowledge about whatsoever, so I think I can help with that. Even if you're not sure if the thing you want would be better as a site or a program, I can guide you and more importantly, bring your vision to life!
      </TextSection>
      <TextSection title='Programming Classes' h5 fontstyle={{ fontSize: "1.2rem" }}>
          Are you struggling with programming in school or do you know someone who is? Thankfully, not only do I know several programming languages, but I also have tutoring experience! These sessions are over call and cost 4.5€ for every 30mins, except for the first 30mins which cost 8. The standard duration for a "class" is projected to be 1.5 hours, but obviously that's just a recommendation
      </TextSection>
      <TextSection>
        If you're curious about my code projects, you can browse <a href='https://github.com/Phantasiae-git'>my github</a>, even though I don't update it much besides school projects :P
      </TextSection>
  </React.Fragment>
  )
}

export default CodePage