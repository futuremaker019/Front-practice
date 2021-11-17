import { Form } from "antd";
import { useCallback } from "react";

const PostForm = () => {
	const onSubmit = useCallback(() => {

	}, []);

	return (
		<Form style={{margin: '10px 0 20px'}} encType="multipart/form-data" onFinish={onSubmit}>
			<Input.TextArea value={text} onChange={onChangeText} maxLength={140} placeholder={"어떤 신기한 일이 있었나요?"} />
		</Form>
	)
}

export default PostForm;