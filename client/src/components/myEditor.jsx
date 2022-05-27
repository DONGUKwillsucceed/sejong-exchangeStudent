import React, { Component, useState } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react'
import Editor from 'ckeditor5-custom-build/build/ckeditor';
import '../styles/myEditor.css'
import { useHistory } from 'react-router-dom';
import { useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';




export default function MyEditor(props) {

	let history = useHistory();
	
	let [titleData, setTitleData]= useState('');
	let [postData, setPostData] = useState('');

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
				let createdAt = date.getFullYear() + '-' + month + '-' + date.getDate() +' '+ date.getHours() +':' + date.getMinutes()+ ':' + date.getSeconds();
				console.log(createdAt);
				let token = JSON.parse(localStorage.getItem('token'))
				axios.post(props.fetchURL + window.location.pathname.replace('/write', '') , {
					title: titleData,
					author: props.user.nickName,
					context: postData,
					user_id: props.user.id,
					createdAt : createdAt,
					updatedAt : createdAt
				},
					{ headers: { 'Authorization': `Bearer ${token.accessToken}` } })
					.then((result) => {
						console.log('게시글 저장 완료');
					})
					.catch(() => {
						alert('게시글 저장 실패');
					})
				history.push(window.location.pathname.replace('/write', ''));
				window.location.reload();
				//얘도 새로고침 해야 반영해주네 아아아아아ㅏ아ㅏㄱ

			}}>저장</button>
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