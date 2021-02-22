import React from 'react'
import getYouTubeID from 'get-youtube-id' 
import YouTube from 'react-youtube'

const YouTubePreview = ({value}) => {
	const { url } = value
	const id = getYouTubeID(url)
	return (<YouTube videoId={id} />)
};

export default{
    name: 'youtube',
    type: 'object',
    title: 'YouTube Embed',
    fields: [
        {
            name: 'url',
            type: 'url',
            title: 'URL'
        }
    ],
    preview: {
        select: {
            url: 'url'
        },
        component: YouTubePreview,
    }
}