import * as S from 'templates/PostTemplate/styles'
import PostTemplate from 'templates/PostTemplate'
import { Container } from 'components/Container'
import SectionHeading from 'components/SectionHeading'
import SideCard from 'components/SideCard'
import SocialBanner, { SocialBannerProps } from 'components/SocialBanner'
import { ClockOutline as ClockIcon } from '@styled-icons/evaicons-outline/ClockOutline'
import { UserCircle as AuthorIcon } from '@styled-icons/boxicons-regular/UserCircle'
import mock from 'components/NewsCard/mock'
import NewsCard from 'components/NewsCard'
import { DiscussionEmbed } from 'disqus-react'

import {
  EmailShareButton,
  EmailIcon,
  FacebookShareButton,
  FacebookIcon,
  InstapaperShareButton,
  InstapaperIcon,
  RedditShareButton,
  RedditIcon,
  TwitterShareButton,
  TwitterIcon,
  WhatsappShareButton,
  WhatsappIcon
} from 'react-share'
import { NewsCardProps } from 'components/NewsCard'

const cards: NewsCardProps[] = Array.from(new Array(5)).reduce((acc) => {
  acc = acc.concat(mock)
  return acc
}, [])

const socialLinks: SocialBannerProps[] = [
  {
    title: 'Facebook',
    url: 'https://facebook.com',
    color: '#2d4a86'
  },
  {
    title: 'Twitter',
    url: 'https://twitter.com',
    color: '#1d9cd6'
  },
  {
    title: 'Instagram',
    url: 'https://instagram.com',
    color: '#405DE6'
  },
  {
    title: 'Google Plus',
    url: 'https://google.com',
    color: '#c44500'
  }
]

const bodyContent =
  '<p>Crash Bandicoot has come a long way since his days <a href="https://www.gamespot.com/articles/weirdest-playstation-ads-you-forgot-about/1100-6482949/" data-ref-id="1100-6482949">shouting at Nintendo</a>. In recent years, he\'s seen something of a resurgence, resulting in a remastered trilogy, an upcoming mobile game, and the first sequel in years, <a href="https://www.gamespot.com/games/crash-bandicoot-4-its-about-time/" data-ref-id="5000-514271">Crash Bandicoot 4: It\'s About Time</a>, which just released in October. If you want to catch up with his latest adventure, you\'ll soon be able to <strong><a href="https://goto.walmart.com/c/159047/565706/9383?u=https%3A%2F%2Fwww.walmart.com%2Fsearch%2F%3Fquery%3Dcrash%2520bandicoot%25204%26amp%3Bcat_id%3D2636&subid1=gs-gs{{TYPE_ID}}{{CONTENT_ID}}-dtp-en" data-target="true" target="_blank" rel="noopener nofollow" class="norewrite">grab it for 50% off at Walmart</a></strong>.</p><div title="6484773 - Crash Bandicoot 4 Black Friday" data-embed-type="buylink" data-ref-id="670" data-template="4" data-size="buylink__listicle" data-title="6484773 - Crash Bandicoot 4 Black Friday" data-collection="" class="norewrite"><div class="buylink-container">\n\n      <div class="js-buylink-item-container buylink-item-container">\n            <h2 class="item-title">\n        <a target="_blank" href="https://goto.walmart.com/c/159047/565706/9383?u=https%3A%2F%2Fwww.walmart.com%2Fsearch%2F%3Fquery%3Dcrash%2520bandicoot%25204%26cat_id%3D2636&amp;subid1=gs-gs{{TYPE_ID}}{{CONTENT_ID}}-dtp-en"\n  data-event-tracking=\'{"lead_type":"deal","merchant":"","link_location":"BuyButton","lead_dest_url":"https://goto.walmart.com/c/159047/565706/9383?u=https%3A%2F%2Fwww.walmart.com%2Fsearch%2F%3Fquery%3Dcrash%2520bandicoot%25204%26cat_id%3D2636&amp;subid1=gs-gs{{TYPE_ID}}{{CONTENT_ID}}-dtp-en","seamless_scroll_page":"1"}\'\n  data-vars-buy-link="https://goto.walmart.com/c/159047/565706/9383?u=https%3A%2F%2Fwww.walmart.com%2Fsearch%2F%3Fquery%3Dcrash%2520bandicoot%25204%26cat_id%3D2636&amp;subid1=gs-gs{{TYPE_ID}}{{CONTENT_ID}}-dtp-en"\n\n      class="js-lead-click-event-tracking"\n  \n      rel="nofollow"\n  >\n  Crash Bandicoot 4: It&#039;s About Time\n</a>      </h2>\n\n                    <h3 class="item-deck">\n          <a target="_blank" href="https://goto.walmart.com/c/159047/565706/9383?u=https%3A%2F%2Fwww.walmart.com%2Fsearch%2F%3Fquery%3Dcrash%2520bandicoot%25204%26cat_id%3D2636&amp;subid1=gs-gs{{TYPE_ID}}{{CONTENT_ID}}-dtp-en"\n  data-event-tracking=\'{"lead_type":"deal","merchant":"","link_location":"BuyButton","lead_dest_url":"https://goto.walmart.com/c/159047/565706/9383?u=https%3A%2F%2Fwww.walmart.com%2Fsearch%2F%3Fquery%3Dcrash%2520bandicoot%25204%26cat_id%3D2636&amp;subid1=gs-gs{{TYPE_ID}}{{CONTENT_ID}}-dtp-en","seamless_scroll_page":"1"}\'\n  data-vars-buy-link="https://goto.walmart.com/c/159047/565706/9383?u=https%3A%2F%2Fwww.walmart.com%2Fsearch%2F%3Fquery%3Dcrash%2520bandicoot%25204%26cat_id%3D2636&amp;subid1=gs-gs{{TYPE_ID}}{{CONTENT_ID}}-dtp-en"\n\n      class="js-lead-click-event-tracking"\n  \n      rel="nofollow"\n  >\n  Best deal: $30 at Walmart | available November 25\n</a>        </h3>\n      \n            <div class="image-container">\n\n                          <img class="main-image" src=https://gamespot1.cbsistatic.com/uploads/original/1585/15855271/3764330-3739190-image%281%29.png>\n        \n        <a target="_blank" href="https://goto.walmart.com/c/159047/565706/9383?u=https%3A%2F%2Fwww.walmart.com%2Fsearch%2F%3Fquery%3Dcrash%2520bandicoot%25204%26cat_id%3D2636&amp;subid1=gs-gs{{TYPE_ID}}{{CONTENT_ID}}-dtp-en"\n  data-event-tracking=\'{"lead_type":"deal","merchant":"","link_location":"BuyButton","lead_dest_url":"https://goto.walmart.com/c/159047/565706/9383?u=https%3A%2F%2Fwww.walmart.com%2Fsearch%2F%3Fquery%3Dcrash%2520bandicoot%25204%26cat_id%3D2636&amp;subid1=gs-gs{{TYPE_ID}}{{CONTENT_ID}}-dtp-en","seamless_scroll_page":"1"}\'\n  data-vars-buy-link="https://goto.walmart.com/c/159047/565706/9383?u=https%3A%2F%2Fwww.walmart.com%2Fsearch%2F%3Fquery%3Dcrash%2520bandicoot%25204%26cat_id%3D2636&amp;subid1=gs-gs{{TYPE_ID}}{{CONTENT_ID}}-dtp-en"\n\n      class="js-lead-click-event-tracking"\n  \n      rel="nofollow"\n  >\n  \n</a>      </div>\n\n            <div class="item-description"><p>The best deal for Crash 4: It\'s About Time can be found at Walmart, which will have the platformer throwback down to $30. The sale price will go live on <strong>November 25 at 4 PM PT / 7 PM ET</strong>. Keep an eye on Amazon as well--the retailer may end up price-matching.</p></div>\n        \n      <div class="item-buttons">\n                <div>\n          <a target="_blank" href="https://goto.walmart.com/c/159047/565706/9383?u=https%3A%2F%2Fwww.walmart.com%2Fsearch%2F%3Fquery%3Dcrash%2520bandicoot%25204%26cat_id%3D2636&amp;subid1=gs-gs{{TYPE_ID}}{{CONTENT_ID}}-dtp-en"\n  data-event-tracking=\'{"lead_type":"deal","merchant":"","link_location":"BuyButton","lead_dest_url":"https://goto.walmart.com/c/159047/565706/9383?u=https%3A%2F%2Fwww.walmart.com%2Fsearch%2F%3Fquery%3Dcrash%2520bandicoot%25204%26cat_id%3D2636&amp;subid1=gs-gs{{TYPE_ID}}{{CONTENT_ID}}-dtp-en","seamless_scroll_page":"1"}\'\n  data-vars-buy-link="https://goto.walmart.com/c/159047/565706/9383?u=https%3A%2F%2Fwww.walmart.com%2Fsearch%2F%3Fquery%3Dcrash%2520bandicoot%25204%26cat_id%3D2636&amp;subid1=gs-gs{{TYPE_ID}}{{CONTENT_ID}}-dtp-en"\n\n      class="js-lead-click-event-tracking"\n  \n      rel="nofollow"\n  >\n  See at Walmart\n</a>        </div>\n\n                          <div>\n            <a target="_blank" href="https://assoc-redirect.amazon.com/g/r/https://www.amazon.com/Crash-4-Its-About-Time-PlayStation/dp/B08BMDZBK8?tag=gamespotdeals-20&amp;ascsubtag=ag%3A%7Cvg%3A-%7Cst%3Adtp"\n  data-event-tracking=\'{"lead_type":"deal","merchant":"","link_location":"BuyButton","lead_dest_url":"https://assoc-redirect.amazon.com/g/r/https://www.amazon.com/Crash-4-Its-About-Time-PlayStation/dp/B08BMDZBK8?tag=gamespotdeals-20&amp;ascsubtag=ag%3A%7Cvg%3A-%7Cst%3Adtp","seamless_scroll_page":"1"}\'\n  data-vars-buy-link="https://assoc-redirect.amazon.com/g/r/https://www.amazon.com/Crash-4-Its-About-Time-PlayStation/dp/B08BMDZBK8?tag=gamespotdeals-20&amp;ascsubtag=ag%3A%7Cvg%3A-%7Cst%3Adtp"\n\n      class="js-lead-click-event-tracking"\n  \n      rel="nofollow"\n  >\n  See at Amazon\n</a>          </div>\n        \n                      </div>\n\n    </div>\n  </div></div><p> </p><p>The Black Friday Crash Bandicoot deals are available for both Xbox One and PS4. You can play these on your new PS5 with a disc drive or Xbox Series X if you\'ve already adopted the new generation. Crash 4 hasn\'t gotten a next-gen upgrade, but it should still benefit from some performance boost.</p><p>The game received an 8/10 in GameSpot\'s <a href="https://www.gamespot.com/reviews/crash-bandicoot-4-review-platformers-delight/1900-6417574/" data-ref-id="1900-6417574">Crash Bandicoot 4 review</a>. "Even more so than playing the N.Sane Trilogy, which literally remade the original Crash games from my youth, playing Crash 4 felt like getting back in touch with the series," critic Mike Epstein wrote. "It\'s an injection of new ideas into now-classic gameplay that surprises and delights, even as it feels like a homecoming. Truly, games like this are why we come running back to long-dormant franchises with open arms."</p><p dir="ltr">We\'ll be covering <a href="https://www.gamespot.com/articles/black-friday-2020-all-retailer-ads-best-deals-store-closings-and-more/1100-6480547/" data-ref-id="1100-6480547">Black Friday 2020 news and deals</a> from now through Cyber Monday, so stay tuned. Check out our roundup of the <a href="https://www.gamespot.com/gallery/best-gaming-deals-black-friday-2020-nintendo-switch-ps5-ps4-xbox-series-x-xbox-one/2900-3627/" data-ref-id="2900-3627">best Black Friday gaming deals</a> available this year, including the best deals for <a href="https://www.gamespot.com/gallery/black-friday-2020-best-nintendo-switch-deals/2900-3633/" data-ref-id="2900-3633">Nintendo Switch</a>, <a href="https://www.gamespot.com/gallery/best-black-friday-2020-ps5-ps4-deals/2900-3629/" data-ref-id="2900-3629">PS4/PS5</a>, and <a href="https://www.gamespot.com/gallery/best-black-friday-2020-xbox-series-x-and-xbox-one-deals/2900-3632/" data-ref-id="2900-3632">Xbox One/Series X</a>.</p><div data-embed-type="pinbox" data-ref-id="4304"><p class="associated-header">Black Friday 2020 Deals And News</p>\n\n<ul>\n    \n                        \n    \n    <li class=""><a href="https://www.gamespot.com/gallery/the-best-black-friday-game-deals-2020-switch-ps5-and-xbox-series-x-gaming-deals/2900-3627/">The Best Gaming Deals For Black Friday 2020 (Nintendo Switch, PS4/PS5, And Xbox One/Series X)</a></li>\n                        \n    \n    <li class=""><a href="https://www.gamespot.com/articles/black-friday-2020-deals-and-ads-at-walmart-target-best-buy-and-more/1100-6480547/">Black Friday 2020 Deals And Ads At Walmart, Target, Best Buy, And More</a></li>\n                        \n    \n    <li class=""><a href="https://www.gamespot.com/articles/black-friday-2020-ads-best-deals-at-walmart-target-gamestop-and-more/1100-6484290/">Black Friday Ad Scans 2020: Best Deals At Walmart, Target, And More</a></li>\n                        \n          <li class="pinbox__hide-link js-unhide-list link">\n        <span>+ Show More Black Friday 2020 Deals And News Links (5)</span>\n      </li>\n    \n    <li class="hide"><a href="https://www.gamespot.com/articles/walmart-ps5-xbox-series-x-restock-today-heres-when-stock-will-be-available/1100-6484499/">Walmart PS5, Xbox Series X Restock Today: Here&#039;s When Stock Will Be Available</a></li>\n                        \n    \n    <li class="hide"><a href="https://www.gamespot.com/articles/gamestop-will-restock-ps5-xbox-series-x-in-stores-on-black-friday-2020/1100-6484207/">GameStop Will Restock PS5, Xbox Series X In Stores On Black Friday 2020</a></li>\n                        \n    \n    <li class="hide"><a href="https://www.gamespot.com/gallery/black-friday-2020-best-nintendo-switch-deals/2900-3633/">Best Black Friday 2020 Nintendo Switch Deals: Games, Console Bundle, And More</a></li>\n                        \n    \n    <li class="hide"><a href="https://www.gamespot.com/gallery/best-black-friday-2020-ps5-ps4-deals/2900-3629/">Best Black Friday 2020 PS5 And PS4 Deals: Games, PS Plus, And More</a></li>\n                        \n    \n    <li class="hide"><a href="https://www.gamespot.com/gallery/best-black-friday-2020-xbox-series-x-and-xbox-one-deals/2900-3632/">Best Black Friday 2020 Xbox Series X And Xbox One Deals</a></li>\n  </ul></div><p dir="ltr"> </p>'
bodyContent.replace('href', 'target="blank" href')
const Post = () => (
  <PostTemplate>
    <S.PostContent>
      <Container>
        <S.MidSection>
          <S.Section>
            <S.ContentTitle>
              Black Friday 2020: Crash Bandicoot 4 Spins Down To $30
            </S.ContentTitle>
            <S.MetaWrapper>
              <S.AuthorInfoWrapper>
                <S.TimeContent>
                  <ClockIcon />
                  <span>June 29, 2019</span>
                </S.TimeContent>
                <S.AuthorWrapper>
                  <AuthorIcon />
                  Post by: <span>Admin</span>
                </S.AuthorWrapper>
              </S.AuthorInfoWrapper>
              <S.ShareWrapper>
                <span>Share:</span>
                <EmailShareButton url="url">
                  <EmailIcon size={24} borderRadius={5} />
                </EmailShareButton>
                <FacebookShareButton url="url">
                  <FacebookIcon size={24} borderRadius={5} />
                </FacebookShareButton>
                <TwitterShareButton url="url">
                  <TwitterIcon size={24} borderRadius={5} />
                </TwitterShareButton>
                <WhatsappShareButton url="url">
                  <WhatsappIcon size={24} borderRadius={5} />
                </WhatsappShareButton>
                <RedditShareButton url="url">
                  <RedditIcon size={24} borderRadius={5} />
                </RedditShareButton>
                <InstapaperShareButton url="url">
                  <InstapaperIcon size={24} borderRadius={5} />
                </InstapaperShareButton>
              </S.ShareWrapper>
            </S.MetaWrapper>
            <S.Line />
            <S.BodyWrapper
              dangerouslySetInnerHTML={{ __html: bodyContent }}
            ></S.BodyWrapper>
            <S.Line />
            <SectionHeading title="You can also like" />
            <S.RelatedContainer>
              {cards &&
                cards.slice(0, 3).map((card, index) => {
                  return <NewsCard key={index} {...card} />
                })}
            </S.RelatedContainer>
            <DiscussionEmbed
              shortname="games-news-2"
              config={{
                url:
                  'http://localhost:3000/post/black-friday-2020-crash-bandicoot-4-spins-down-to-dollar30',
                identifier: '20',
                title: 'Black Friday 2020: Crash Bandicoot 4 Spins Down To $30',
                language: 'en_US' //e.g. for Traditional Chinese (Taiwan)
              }}
            />
          </S.Section>
          <S.Section>
            <SectionHeading title="Most Viewed" />
            <S.SideCardsContainer>
              {cards &&
                cards.map((card, index) => {
                  return <SideCard {...card} key={index} />
                })}
            </S.SideCardsContainer>
            <SectionHeading title="Follow us" />
            <S.SocialBannersContainer>
              {socialLinks &&
                socialLinks.map((banner, index) => {
                  return <SocialBanner key={index} {...banner} />
                })}
            </S.SocialBannersContainer>
          </S.Section>
        </S.MidSection>
      </Container>
    </S.PostContent>
  </PostTemplate>
)

export default Post
