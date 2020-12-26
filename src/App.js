import React, { useState, useEffect } from 'react';
import './App.css';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';
import { listNotes } from './graphql/queries';
import { createNote as createNoteMutation, deleteNote as deleteNoteMutation } from './graphql/mutations';
import { API, Storage } from 'aws-amplify';

const initialFormState = { name: '', description: '' }

function App() {
  const [notes, setNotes] = useState([]);
  const [formData, setFormData] = useState(initialFormState);


  return (
  <div id="parent">
	  <header id="banner" role="banner">
		<div id="heading">
			<h1 class="site-title">
			<a class="logo custom-logo" href="/web/home-community" title="Go to home-community">
			<img alt="home-community" height="61" src="/header_image.png" width="2118" />
			</a>
			</h1>
			<h2 class="page-title">
			<span tabindex="0">Home</span>
			</h2>
		</div>
		<nav class="sort-pages modify-pages" id="navigation">
			<h1>
			<span>Navigation</span>
			</h1>

			<div class="navigation-gradient">
			</div>

			<div class="search">
				<form action="https://myfsu.ferris.edu/web/home-community/1?p_p_auth=zfv5HZO0&amp;p_p_id=77&amp;p_p_lifecycle=0&amp;p_p_state=maximized&amp;p_p_mode=view&amp;_77_struts_action=%2Fjournal_content_search%2Fsearch" class="aui-form" method="post" name="_77_fm" onSubmit="submitForm(this); return false;">
					<span class="aui-field aui-field-text aui-field-inline lfr-search-keywords">
						<span class="aui-field-content">
							<span class="aui-field-element ">
								<input class="aui-field-input aui-field-input-text"  id="keywords"  name="keywords"    title="Search Web Content" type="text" value="Search&#x2e;&#x2e;&#x2e;&#x2e;&#x2e;"  onBlur="if (this.value == '') { this.value = '\u0053\u0065\u0061\u0072\u0063\u0068\u002e\u002e\u002e\u002e\u002e'; }" onFocus="if (this.value == '\u0053\u0065\u0061\u0072\u0063\u0068\u002e\u002e\u002e\u002e\u002e') { this.value = ''; }" size="30"  />
							</span>
						</span>
					</span>
					<span class="aui-field aui-field-text aui-field-inline lfr-search-button">
						<span class="aui-field-content">
							<span class="aui-field-element ">
								<input class="aui-field-input aui-field-input-text"  id="search"  name="search"     type="image"   alt="search" src="https://myfsu.ferris.edu/LP5-ellucian-theme/images/common/search.png"  />
							</span>
						</span>
					</span>
				</form>
			</div>

			<ul>
				<li class="selected">
					<a href="https://myfsu.ferris.edu/web/home-community/1" ><span tabindex="0">Home</span></a>
				</li>
				<li>
					<a href="https://myfsu.ferris.edu/web/home-community/student-hidden-" ><span tabindex="0">Student</span></a>
				</li>
				<li>
					<a href="https://myfsu.ferris.edu/web/home-community/forms" ><span tabindex="0">Forms</span></a>
				</li>
				<li>
					<a href="https://ferris.edu/library" target="_blank"><span tabindex="0">Library</span></a>
				</li>
				<li>
					<a href="https://myfsu.ferris.edu/web/home-community/new-evernt" ><span tabindex="0">Communities</span></a>
				</li>
			</ul>
		</nav>
	</header>
		
	<div class="content">
		<div class="info">
			<h1>Ferris State University MyDorm</h1>
			<p>Use the buttons below to control your dorm room's lights, heat, locks, and more.</p>
		</div>
		<div class="controls">
			<div class="row">
				<div class="lights col">
					<h2>Lights</h2>
					<a href="#" class="button">Turn Lights On</a>

					<a href="#" class="button">Turn Lights Off</a>
				</div>
				<div class="door col">
					<h2>Door</h2>
					<a href="#" class="button">Lock Door</a>

					<a href="#" class="button">Unlock Door</a>
				</div>
				<div class="window col">
					<h2>Window</h2>
					<a href="#" class="button">Open Window</a>

					<a href="#" class="button">Close Window</a>
				</div>
			</div>
		</div>
	</div>
</div>
  );
}

export default withAuthenticator(App);