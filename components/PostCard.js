import React, { useCallback, useState } from 'react';
import { Avatar, Button, Card, Comment, Image, List, Popover } from 'antd';
import {
	EllipsisOutlined,
	HeartOutlined,
	HeartTwoTone,
	MessageOutlined,
	RetweetOutlined
} from '@ant-design/icons';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import PostImages from './PostImages';
import CommentForm from './CommentForm';

const PostCard = ({ post }) => {
	const [liked, setLiked] = useState(false);
	const [commentFormOpened, setCommentFormOpened] = useState(false);

	const id = useSelector((state) => state.user.me?.id);
	const onToggleLike = useCallback(() => {
		// 토글을 만드는 메서드 방식
		setLiked((prev) => !prev);
	}, []);
	const onToggleComment = useCallback(() => {
		setCommentFormOpened((prev) => !prev);
	}, []);

	return (
		<div style={{ marginBottom: 20 }}>
			<Card
				cover={post.Images[0] && <PostImages images={post.Images} />}
				actions={[
					<RetweetOutlined key={'retweet'} />,
					liked ? (
						<HeartTwoTone
							twoToneColor={'#eb2f96'}
							key={'heart'}
							onClick={onToggleLike}
						/>
					) : (
						<HeartOutlined key={'heart'} onClick={onToggleLike} />
					),
					<MessageOutlined key={'comment'} onClick={onToggleComment} />,
					<Popover
						key={'more'}
						content={
							<Button.Group>
								{id && post.User.id === id ? (
									<>
										<Button>수정</Button>
										<Button type={'danger'}>삭제</Button>
									</>
								) : (
									<Button> 신고 </Button>
								)}
							</Button.Group>
						}
					>
						<EllipsisOutlined />
					</Popover>
				]}
			>
				<Card.Meta
					avatar={<Avatar>{post.User.nickname[0]}</Avatar>}
					title={post.User.nickname}
					description={post.content}
				/>
			</Card>
			{commentFormOpened && (
				<div>
					<CommentForm post={post} />
					<List
						header={`${post.Comments.length}개의 댓글`}
						itemLayout={'horizontal'}
						dataSource={post.Comments}
						renderItem={(item) => (
							<li>
								<Comment
									author={item.User.nickname}
									avatar={<Avatar>{item.User.nickname[0]}</Avatar>}
									content={item.content}
								/>
							</li>
						)}
					></List>
				</div>
			)}
			{/*<CommentForm />*/}
			{/*<Comments />*/}
		</div>
	);
};

PostCard.prototype = {
	post: PropTypes.shape({
		id: PropTypes.number,
		user: PropTypes.object,
		content: PropTypes.string,
		createAt: PropTypes.object,
		comment: PropTypes.arrayOf(PropTypes.object),
		Images: PropTypes.arrayOf(PropTypes.object)
	}).isRequired
};

export default PostCard;
