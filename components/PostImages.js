import React, { useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import { PlusOutlined } from '@ant-design/icons';

const PostImages = ({ images }) => {
	// 클릭하면 확대햐서 볼수 있게 만들어준다.
	const [showImagesZoom, setShowImageZoom] = useState(false);

	const onZoom = useCallback(() => {
		setShowImageZoom(true);
	}, []);

	if (images.length === 1) {
		return (
			<>
				<img
					role={'presentation'}
					src={images[0].src}
					alt={images[0].src}
					onClick={onZoom}
				/>
			</>
		);
	}
	if (images.length === 2) {
		return (
			<>
				<img
					role={'presentation'}
					style={{ width: '50%', display: 'inline-block' }}
					src={images[0].src}
					alt={images[0].src}
					onClick={onZoom}
				/>
				<img
					role={'presentation'}
					style={{ width: '50%', display: 'inline-block' }}
					src={images[1].src}
					alt={images[1].src}
					onClick={onZoom}
				/>
			</>
		);
	}

	return (
		<>
			<div>
				<img
					role={'presentation'}
					style={{ width: '50%' }}
					src={images[1].src}
					alt={images[1].src}
					onClick={onZoom}
				/>
				<div
					role={'presentation'}
					style={{
						display: 'inline-block',
						width: '50%',
						textAlign: 'center',
						verticalAlign: 'middle'
					}}
				>
					<PlusOutlined />
					<br />
					{images.length - 1} 개의 사진 더보기 >
				</div>
			</div>
		</>
	);
};

PostImages.prototype = {
	images: PropTypes.arrayOf(PropTypes.object)
};

export default PostImages;
