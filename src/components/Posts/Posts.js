import {Component} from "react";

import {postsService} from "../../service/postsService";
import {Post} from "./Post";

class Posts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: []
        }
    }

    componentDidMount() {
        postsService.getAll().then(({data}) => this.setState({posts:data}))
    }

    render() {
        return(
            <div>
                <h1>Posts</h1>
                {this.state.posts.map(post => <Post key={post.id} post={post}/>)}
            </div>
        )
    }
}

export {
    Posts
}
