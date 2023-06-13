import Tweet from "../Tweet/Tweet"
import TweetBox from "../TweetBox/TweetBox"
import "./Feed.css"

export default function Feed(props) {
  return (
    <div className="col feed">
      <TweetBox tweets={props.tweets} userProfile={props.userProfile} setUserProfile={props.setUserProfile} setTweets={props.setTweets} tweetText={props.tweetText} setTweetText={props.setTweetText}/>

      <div className="see-new-tweets beet">
        <p>
          See <span>{13}</span> New Tweets
        </p>
      </div>

      <div className="twitter-feed">{
        props.tweets.map((tweet, index) => (
          <Tweet key={index} tweet={tweet}/>
        ))}
        </div>
    </div>
  )
}
