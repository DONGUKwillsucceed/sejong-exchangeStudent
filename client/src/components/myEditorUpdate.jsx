import React, { Component, useState } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react'
import Editor from 'ckeditor5-custom-build/build/ckeditor';
import '../styles/myEditor.css'
import { useHistory } from 'react-router-dom';
import { useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

//	게시판종류/나라/(학교id)/write  ==>글쓰기 페이지
// content/country/(학교id)

//반응형으로 일정이상 줄어들면 따라서 줄어들도록.



export default function MyEditor(props) {

	let history = useHistory();

	let {postId} = useParams();
	
	let [titleData, setTitleData]= useState(props.titleData);
	let [postData, setPostData] = useState(props.postData);


	useEffect(()=>{
		console.log(postId);
	}, [])


	const editorConfiguration =  {
		toolbar: {
			items: [
				'heading',
				'|',
				'bold',
				'underline',
				'italic',
				'link',
				'bulletedList',
				'numberedList',
				'|',
				'outdent',
				'indent',
				'|',
				'imageUpload',
				'blockQuote',
				'insertTable',
				'mediaEmbed',
				'undo',
				'redo'
			]
		},
		language: 'ko',
		image: {
			toolbar: [
				'imageTextAlternative',
				'imageStyle:inline',
				'imageStyle:block',
				'imageStyle:side'
			]
		},
		table: {
			contentToolbar: [
				'tableColumn',
				'tableRow',
				'mergeTableCells'
			]
		}
	};

	return (
		<div className="container6">
			<input type="text" className="title6" placeholder="제목을 입력하세요" value={titleData} onChange={(e)=>{setTitleData(e.target.value)}}></input>
			<div className="editor6">
				<CKEditor
					editor={Editor}
					config={editorConfiguration}
					data={postData}
					onReady={editor => {
						console.log('Editor is ready to use!', editor);
						editor.editing.view.change((writer) => {
							writer.setStyle(
								"height", "800px", editor.editing.view.document.getRoot()
							);
						})
					}}
					onChange={(event, editor) => {
						setPostData(editor.getData());
						console.log({ event, editor, postData });
					}}
				onBlur={(event, editor) => {
					console.log('Blur.', editor);
				}}
				onFocus={(event, editor) => {
					console.log('Focus.', editor);
				}}
				/>
			</div>

			<button className="submitBtn6" onClick={() => {
				let date = new Date();
				let month = date.getMonth() +1;
				let updatedAt = date.getFullYear() +'-' + month +'-' + date.getDate() +' '+ date.getHours() +':' + date.getMinutes()+ ':' + date.getSeconds();
				let token = JSON.parse(localStorage.getItem('token'))
				axios.put(props.fetchURL + window.location.pathname.replace('/update', ''), {
					title: titleData,
					author: props.user.nickName,
					context: postData,
					user_id: props.user.id,
					updatedAt : updatedAt
				},
					{ headers: { 'Authorization': `Bearer ${token.accessToken}` } })
					.then((result) => {
						console.log('게시글 수정 완료');
					})
					.catch(() => {
						alert('게시글 수정 실패');
					})
				history.push(window.location.pathname.replace('/update', ''));
			}}>수정</button>
		</div>
	);
}


/* <Combobox className={combobox} /> */


				// onBlur={(event, editor) => {
				// 	console.log('Blur.', editor);
				// }}
				// onFocus={(event, editor) => {
				// 	console.log('Focus.', editor);
				// }}




// <div className={fileBox}>
// 				<label className={fileInputBtn} for="input_file">파일 첨부
// 				</label>
// 				<input type="file" multiple id="input_file" className={fileInput} onChange={(e)=>{
					
// 				console.log("처음") ;
// 				console.log(e.target.files);
// 				setCurrentFiles(e.target.files);
// 				console.log("현재");
// 				}}></input>
// 				<div className={fileList}>
// 				</div>
// 			</div>