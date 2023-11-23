import {Component} from "react";

import {commentsService} from "../../service/commentsService";
import {Comment} from "./Comment";

class Comments extends Component{
    constructor(props) {
        super(props);
        this.state = {
            comments: []
        }
    }

    componentDidMount() {
        commentsService.getAll().then(({data}) => this.setState({comments:data}))
    }

    render() {
        return (
            <div>
                <h1>Comments</h1>
                {this.state.comments.map(comment => <Comment key={comment.id} comment={comment}/>)}
            </div>
        )
    }

}

export {
    Comments
}