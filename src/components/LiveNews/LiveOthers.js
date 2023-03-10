import React from 'react';
import { truncate } from "../../utils";

const LiveOthers = ({ liveNews }) => {
    return (
        <div className="liveOthers">
        {liveNews && liveNews.slice(1, 13).map(liveNew => (
            <a
                key={liveNew.id} 
                href={liveNew.webUrl} 
                target="_blank" 
                rel="noopener noreferrer"
            >
                <div className="liveOther__single">
                    <p>{truncate(liveNew.webTitle, 60)}</p>
                    <div className="liveOther__img">
                        <img 
                            src={liveNew.fields.thumbnail} 
                            alt={liveNew.webTitle}
                        />
                    </div>
                </div>
            </a>
        ))
        }
        </div>
    )
}

export default LiveOthers