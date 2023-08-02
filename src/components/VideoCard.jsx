import { Link } from 'react-router-dom';
import { Typography, Card, CardContent, CardMedia } from '@mui/material';
import { CheckCircle} from '@mui/icons-material'
import { demoThumbnailUrl, demoChannelTitle, demoChannelUrl, demoVideoTitle, demoVideoUrl } from '../utils/constants'

const VideoCard = ({video: {id:{ videoId }, snippet}}) => {
   
    return (
        <Card>
           <Link>
              <CardMedia image={snippet?.
                thumbnails.Card.high?.url} />
           </Link>
        </Card>
    )
}


export default VideoCard
