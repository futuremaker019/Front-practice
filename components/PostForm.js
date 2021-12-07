import { Button, Form, Input } from 'antd';
import { useCallback, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addPost } from '../reducers/post';

const PostForm = () => {
	const { imagePaths } = useSelector((state) => state.post);
	const dispatch = useDispatch();

	// DOM에 직접 접근하기 위해 사용한다.
	const imageInput = useRef();
	const [text, setText] = useState('');

	const onChangeText = useCallback((e) => {
		setText(e.target.value);
	}, []);

	// 이미지 버튼 클릭시 파일 검색창이 나오게 만들어준다.
	const onClickImageUpload = useCallback(() => {
		imageInput.current?.click();
	}, [imageInput.current]);

	const onSubmit = useCallback(() => {
		dispatch(addPost);
		setText('');
	}, []);

	return (
		<Form
			style={{ margin: '10px 0 20px' }}
			encType="multipart/form-data"
			onFinish={onSubmit}
		>
			<Input.TextArea
				value={text}
				onChange={onChangeText}
				maxLength={140}
				placeholder={'어떤 신기한 일이 있었나요?'}
			/>
			<div>
				<input type={'file'} multiple hidden ref={imageInput} />
				<Button onClick={onClickImageUpload}>이미지 업로드</Button>
				<Button type={'primary'} style={{ float: 'right' }} htmlType={'submit'}>
					짹짹
				</Button>
			</div>
			<div>
				{imagePaths.map((v) => (
					<div key={v} style={{ display: 'inline-block' }}>
						<img src={v} style={{ width: '200px' }} />
						<div>
							<Button>제거</Button>
						</div>
					</div>
				))}
			</div>
		</Form>
	);
};

export default PostForm;
