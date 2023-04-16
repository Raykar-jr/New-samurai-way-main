import React from 'react';

const Music = () => {
    return (
        <div style={{display: 'flex', justifyContent: 'center'}}>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/jfKfPfyJRdk"
                    title="YouTube video player" frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen>

            </iframe>
        </div>
    );
};

export default Music;