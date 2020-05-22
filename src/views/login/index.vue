<!-- 登录页面 -->
<template>
	<div class="login_page" :style="{height: pageHeight + 'px','mine-height': '900px'}">
		<div class="login_box">
			<div class="login_title">
				LOGIN FORM
			</div>
			<div class="login_form_wrap">
				<el-form class="login_form" :model="form" :rules="rules" ref="loginForm" label-width="0px">
					<el-form-item label="" prop="user">
						<el-input v-model="form.user" size="small"     placeholder="请输入内容" prefix-icon="el-icon-user"></el-input>
					</el-form-item>
					<el-form-item class="mt10" label="" prop="pass">
						<el-input v-model="form.pass" show-password size="small" placeholder="请输入内容" prefix-icon="el-icon-lock"></el-input>
					</el-form-item>
				</el-form>
			</div>
		</div>
	</div>
</template>

<script>
	import {innerHeight} from '@/common/mixins/index.js';
	export default {
		mixins:[innerHeight],
		data() {
			return {
				form: {
					user: '',
					pass: '',
				},
				rules: {
					user: [
						{ required: true, message: '请输入用户名', trigger: ['blur', 'change'] },
					],
					pass: [
						{ required: true, message: '请输入密码', trigger: ['blur', 'change'] },
					]
				}
			}
		},
		computed:{
			pageHeight() {
				return this.innerHeight;
			}
		}
	}
</script>

<style lang="scss" scoped>
	.login_page {
		background-color: rgb(46, 58, 75);
		display: flex;
		align-items: center;
		justify-content: center;
		.login_box {
			width: 500px;
			height: 400px;
			border: 2px solid #F0F0F0;
			border-radius: 20px;
			padding-left: 20px;
			padding-right: 20px;
			.login_title {
				height: 90px;
				line-height: 90px;
				color: #FFFFFF;
				text-align: center;
				font-size: 23px;
				font-weight: 800;
			}
			.login_form {
				/deep/.el-form-item__label {
					color: #FFFFFF;
				}
				.el-input /deep/input{
					 // width: 390px;
					background-color: #2f3a4b40
				}
			}
		}
	}
</style>
