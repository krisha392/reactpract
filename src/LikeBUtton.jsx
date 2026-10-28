
import { useState } from "react";

export default function LikeButton() {
    const [isLiked, setIsLiked] = useState(false);

    const toggleLike = () => {
        setIsLiked(!isLiked);
    };

    const likeStyle = { color: "red", fontSize: "30px" };

    return (
        <div>
            <p onClick={toggleLike} style={{ cursor: "pointer" }}>
                {isLiked ? (
                    <i
                        className="fa-solid fa-heart"
                        style={likeStyle}
                    ></i>
                ) : (
                    <i className="fa-regular fa-heart"></i>
                )}
            </p>
        </div>
    );
}
