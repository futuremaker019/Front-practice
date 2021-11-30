import React from 'react';
import { Card } from 'antd';

const PostCard = ({ post }) => {
	return (
		<div>
			<Card cover={post.images[0]}></Card>
		</div>
	);
};

export default PostCard;
