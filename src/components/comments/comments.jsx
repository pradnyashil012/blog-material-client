import { Box, TextareaAutosize, Button, makeStyles } from "@material-ui/core";
import { useState, useEffect } from "react";

//components
import { newComment, getComments } from "../../service/api";
import Comment from "./comment";

const useStyles = makeStyles({
    component: {
        marginTop: 100,
        display: 'flex',
        
    },
    image: {
        width: 50,
        height: 50,
        borderRadius: '50%',
    },
    textarea: {
        width: '100%'
    },
    button: {
        height: 40,
        margin: '0 20px'
    }
});

const initialValues = {
    name: '',
    postId: '',
    date: new Date(),
    comments: ''
}

const Comments = ({post}) => {
    const url = 'https://static.thenounproject.com/png/12017-200.png';

    const classes = useStyles();

    const [comment, setComment] = useState(initialValues);
    const [comments, setComments] = useState([]);
    const [data, setData] = useState();
    const [toggle, setToggle] = useState(false);

    useEffect(()=>{
        const getData = async () => {
            const response = await getComments(post._id);
            setComments(response);
        }
        getData();
    }, [post, toggle]);

    const handleChange = (e) => {
        setComment({
            ...comment,
            name: post.username,
            postId: post._id,
            comments: e.target.value
        });
        setData(e.target.value);
    }

    const postComment = async () => {
        await newComment(comment);
        setData('');
        setToggle(prev => !prev);
    }

    return (
        <Box>
            <Box className={classes.component}>
                <img src={url} alt="dp" className={classes.image} />
                <TextareaAutosize 
                    className={classes.textarea} 
                    rowsMin={5}
                    onChange={(e)=> handleChange(e)}
                    value={data}
                />
                <Button
                    className={classes.button}
                    size="medium"
                    variant="contained"
                    color="primary"
                    onClick={()=> postComment()}
                >
                    Post
                </Button>
            </Box>
            {
                comments && comments.map((comment) => (
                    <Comment comment={comment} setToggle={setToggle} />
                ))
            }
        </Box>
    );
}

export default Comments;