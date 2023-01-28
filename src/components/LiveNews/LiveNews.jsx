import axios from 'axios'
import React, { useEffect, useState } from 'react'
import LiveMain from './LiveMain'
import LiveOthers from './LiveOthers'
import NewsShorts from './NewsShorts'
import NewsVideos from './NewsVideos'
import './LiveNews.css'
const baseURL = 'https://content.guardianapis.com'
const key ="f557d556-adff-4640-85ec-0fee7f41382a"
const apiKey = `api-key=${key}`
console.log(apiKey)
const LiveNews = () => {
    const [liveNews, setLiveNews] = useState()

    const fetchLiveNews = async() => {
        const dataLiveOthers = await axios.get(`${baseURL}/search?q=india&page-size=40&show-fields=thumbnail&${apiKey}`)

        // console.log(dataLiveOthers.data.response.results);
        
        setLiveNews(dataLiveOthers.data.response.results)
    }

    useEffect(() => {
        fetchLiveNews()
        // eslint-disable-next-line
    }, [])

    return (
        <div className="liveNews">
            <div className="liveNews__left">
                <LiveMain liveNews={liveNews} />
                <LiveOthers liveNews={liveNews} />
            </div>

            <div className="liveNews__center">
                <NewsVideos liveNews={liveNews} />
            </div>
            <div className="liveNews__right">
                <NewsShorts liveNews={liveNews} />
            </div>
        </div>
    )
}

export default LiveNews
