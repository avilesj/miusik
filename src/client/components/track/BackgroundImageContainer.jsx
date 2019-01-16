import React from 'react';

let BackgroundImageContainer = () => {
    return (
        <div id="background-image-container">
            <div
                id="background-image"
                style={{ background: "linear-gradient(to bottom, rgba(53,56,57,0) 50%, rgba(53,56,57,1)), url(https://i.scdn.co/image/3aa37254a41cf96e81572524ec523cb870f2bb89) no-repeat center/cover" }}
            ></div>
        </div>
    )
}

export default BackgroundImageContainer;