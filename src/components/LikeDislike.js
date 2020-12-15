import cx from 'classnames';
import React, { Component } from "react";



export default class LikeDislike extends Component {
    state = {
        Likes: 100,
        Dislikes: 25,
        toggleLike: false,
        toggleDislike: false,
    };

    handleLike = () => {

        if (this.state.toggleDislike === true && this.state.toggleLike === false) {
            this.setState({
                Dislikes: this.state.Dislikes - 1,
                toggleDislike: !this.state.toggleDislike
            })
        }

        (this.state.toggleLike === false) ?
            (this.setState({
                Likes: this.state.Likes + 1,
                toggleLike: !this.state.toggleLike
            })) :
            (this.setState({
                Likes: this.state.Likes - 1,
                toggleLike: !this.state.toggleLike
            }))
    }

    handleDislike = () => {

        if (this.state.toggleLike === true && this.state.toggleDislike === false) {
            this.setState({
                Likes: this.state.Likes - 1,
                toggleLike: !this.state.toggleLike
            })

        }
        (this.state.toggleDislike === false) ?
            (this.setState({
                Dislikes: this.state.Dislikes + 1,
                toggleDislike: !this.state.toggleDislike
            })) :
            (this.setState({
                Dislikes: this.state.Dislikes - 1,
                toggleDislike: !this.state.toggleDislike
            }))
    }

    render() {

        const wrapperLike = cx('like-button', { 'liked': this.state.toggleLike === true })
        const wrapperDislike = cx('dislike-button', { 'disliked': this.state.toggleDislike === true })

        return (
            <>
                <div>
                    <button onClick={this.handleLike} type="button" className={wrapperLike}>Like | <span>{this.state.Likes}</span></button>
                    <button onClick={this.handleDislike} type="button" className={wrapperDislike}>Dislike | <span>{this.state.Dislikes}</span></button>
                </div>
                <style>{`
                    .like-button, .dislike-button {
                        font-size: 1rem;
                        padding: 5px 10px;
                        color:   #585858;
                    }

                    .liked, .disliked {
                        font-weight: bold;
                        color: #1565c0;
                    }
                `}</style>
            </>
        );
    }
}
