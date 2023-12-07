import Game, { GameTemplateProps } from '@/templates/Game'

import galleryMock from '@/components/Gallery/mock'
import gamesMock from '@/components/GameCardSlider/mock'
import highlightMock from '@/components/Highlight/mock'
export const dynamicParams = false

export async function generateStaticParams() {
  return [{ slug: 'cyberpunk-2077' }]
}

async function getGameProps(): Promise<GameTemplateProps> {
  const descriptionHTML = `
  <div class="description">
    <div class="banner welcome-offer-banner ng-scope ng-hide" welcome-offer-banner="" timer="1403717740000"
        ng-show="welcomeOfferBanner.isCounterReady &amp;&amp; !timer.finished">
        <div class="banner__header">

        </div>

    </div><a href="https://www.gog.com/game/cyberpunk_2077_ultimate_edition"><img
            src="https://items.gog.com/not_a_cp_pl/ENG_1540X400_bundle_banner_cyberpunk_phantom_liberty.png"></a><br>
    <hr><img src="https://items.gog.com/not_a_cp/addon_en.png">
    <hr><br><video muted="" preload="auto" loop="" autoplay="autoplay" style="margin: auto;display:block;width:100%">
        <source src="https://items.gog.com/not_a_cp/action.mp4">
    </video><br><b>Cyberpunk 2077</b> is an open-world, action-adventure RPG set in the megalopolis of Night City, where
    you play as a cyberpunk mercenary wrapped up in a do-or-die fight for survival. Improved and featuring all-new free
    additional content, customize your character and playstyle as you take on jobs, build a reputation, and unlock
    upgrades. The relationships you forge and the choices you make will shape the story and the world around you.
    Legends are made here. What will yours be?
    <br><br><a target="“_blank”" href="https://www.cyberpunk.net/en/news/49060/update-2-0"><img alt=""
            src="https://items.gog.com/not_a_cp/update/CP2077_Update_2.0_16x9_EN.jpg"></a><br><br>
    <h4>DISCOVER UPDATE 2.0</h4>
    Experience new and overhauled gameplay mechanics to fulfill your wildest cyberpunk fantasies. The free Update 2.0
    brings brand new ways to play Cyberpunk 2077, including totally redesigned perks and cyberware systems, pulsating
    vehicle combat and car chases, a revamped police system, enhanced enemy combat AI, and more.

    <br><br><video muted="" preload="auto" loop="" autoplay="autoplay" style="margin: auto;display:block;width:100%">
        <source src="https://items.gog.com/not_a_cp/character.mp4">
    </video><br>
    <h4>CREATE YOUR OWN CYBERPUNK</h4>
    Become an urban outlaw equipped with cybernetic enhancements and build your legend on the streets of Night City.

    <br><br><video muted="" preload="auto" loop="" autoplay="autoplay" style="margin: auto;display:block;width:100%">
        <source src="https://items.gog.com/not_a_cp/world.mp4">
    </video><br>
    <h4>EXPLORE THE CITY OF THE FUTURE</h4>
    Night City is packed to the brim with things to do, places to see, and people to meet. And it’s up to you where to
    go, when to go, and how to get there.

    <br><br><video muted="" preload="auto" loop="" autoplay="autoplay" style="margin: auto;display:block;width:100%">
        <source src="https://items.gog.com/not_a_cp/tech.mp4">
    </video><br>
    <h4>BUILD YOUR LEGEND</h4>
    Go on daring adventures and build relationships with unforgettable characters whose fates are shaped by the choices
    you make.

    <br><br><video muted="" preload="auto" loop="" autoplay="autoplay" style="margin: auto;display:block;width:100%">
        <source src="https://items.gog.com/not_a_cp/music.mp4">
    </video><br>
    <h4>CLAIM EXCLUSIVE ITEMS</h4>
    Claim in-game swag &amp; digital goodies inspired by CD PROJEKT RED games as part of the My Rewards program.

    <br><br>
    <hr><a target="“_blank”" href="https://www.gog.com/promo/cyberpunk_hub"><img alt=""
            src="https://items.gog.com/not_a_cp/learn_more.png"></a>
    <hr>
    <center><img alt="" width="32%" height="32%" src="https://items.gog.com/not_a_cp/awards/awardscp1.png"><img alt=""
            width="32%" height="32%" src="https://items.gog.com/not_a_cp/awards/awardscp2.png"></center>
    <hr>

    * Exclusive Digital Comic - Cyberpunk 2077: Big City Dreams is available in English only.


    <p class="description__copyrights">
        CD PROJEKT®, Cyberpunk®, Cyberpunk 2077® are registered trademarks of CD PROJEKT S.A. © 2019
        CD PROJEKT S.A. All rights reserved. All other copyrights and trademarks are the property of their
        respective owners.
    </p>
</div>
  `

  return {
    cover: 'https://source.unsplash.com/user/willianjusten/1042x500',
    gameInfo: {
      title: 'Cyberpunk 2077',
      price: '59.00',
      description:
        'Cyberpunk 2077 is an open-world, action-adventure story set in Night City, a megalopolis obsessed with power, glamour and body modification. You play as V, a mercenary outlaw going after a one-of-a-kind implant that is the key to immortality'
    },
    gallery: galleryMock,
    description: descriptionHTML,
    details: {
      developer: 'CD PROJEKT RED',
      releaseDate: '2020-12-10T23:00:00',
      platforms: ['windows'],
      publisher: 'CD PROJEKT RED',
      rating: 'BR18',
      genres: ['Action', 'Role-playing']
    },
    upcomingGames: gamesMock,
    upcomingHighlight: highlightMock,
    recommendedGames: gamesMock
  }
}

export default async function GameTemplate() {
  const props = await getGameProps()
  return <Game {...props} />
}
