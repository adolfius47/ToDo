	"use strict";
	import React, {Component} from "react";
	import {connect} from "react-redux";
	import Spinner from "./Spinner";
	import moment from 'moment'
	import {Link} from 'react-router'
	class ToDo extends Component {
		constructor(props){
			super(props)
			this.createNewTask=this.createNewTask.bind(this)
			this.changeNewTask=this.changeNewTask.bind(this)
			this.addNewTask=this.addNewTask.bind(this)
			this.editTask=this.editTask.bind(this)
			this.editTaskWithId=this.editTaskWithId.bind(this)
			this.saveEditTask=this.saveEditTask.bind(this)

			this.state={
				dropDown:false,
				addNewTask:'',
				allTasks:[],
				edit:false,
				idEdit:null,
				editTaskWithIdValue:'',

			}
		}
		editTask(e,value){
			this.setState({
				edit:true,
				idEdit:e,
				editTaskWithIdValue:value
			})
		}
		changeNewTask(e){
				this.setState({addNewTask:e.target.value})
		}
		addNewTask(){
			if(this.state.addNewTask.length>3){
				let State
				State=this.state.allTasks.concat({id:this.state.addNewTask,name:this.state.addNewTask})
			this.setState({allTasks:State,
				dropDown:false,
				addNewTask:''})
			}
		}
		createNewTask(){
			if(this.state.dropDown===false){
				this.setState({dropDown:true})
			}else{
				this.setState({dropDown:false})

			}
		}
		editTaskWithId(e){
			this.setState({
				editTaskWithIdValue:e.target.value
			})
		}
		saveEditTask(){
			if(this.state.editTaskWithIdValue.length>3){
				let newState = this.state.allTasks.map(item=>{
					if(item.id===this.state.idEdit){
						return {id:this.state.editTaskWithIdValue,name:this.state.editTaskWithIdValue}
					}else{
						return item
					}
				})
				this.setState({
					allTasks:newState,
					edit:false
				})
			}
		}
		render() {
			console.log(this.state.allTasks)

			let dropDown
			if(this.state.dropDown){
					dropDown=<div className="col-md-12 col-lg-12 col-sm-12 col-xs-12 text-right">
									<div className="input-group">

										<input type="text" className="form-control" onChange={this.changeNewTask} placeholder="Search for..."/>
	      									<span className="input-group-btn">
	        									<button className="btn btn-default" onClick={this.addNewTask} type="button">Ok!</button>
	      									</span>
	      							</div>
							</div>
			}else{
				dropDown=null
			}
			return <div className="row">
						<div className="col-md-12 col-sm-12 col-xs-12 col-lg-12">
							<div className="row">

								<div className="col-md-6 col-sm-6 col-xs-6 col-lg-6 text-left">
									<button className="btn btn-primary green" onClick={this.createNewTask}>Создать новый лист</button>
									<button className="btn btn-primary red">Удалить все</button>

								</div>

								<div className="col-md-6 col-sm-6 col-xs-6 col-lg-6 text-right">
			
    								<div className="input-group">
      									<input type="text" className="form-control" placeholder="Search for..."/>
      										<span className="input-group-btn">
        										<button className="btn btn-default" type="button">Go!</button>
      										</span>
    								</div>
  
								</div>
							</div>
						{dropDown}
						{this.state.allTasks.length!==0?
							<div className="row">

								<div className="col-md-12 col-sm-12 col-xs-12 col-lg-12">
									<div className="table-scrollable">
										<table className="table table-bordered table-hover table-striped">
											<tbody>
												{this.state.allTasks?this.state.allTasks.map((item,key)=>{
													if(this.state.edit===true&&item.id===this.state.idEdit){
														return <tr key={key}>
															<td><input value={this.state.editTaskWithIdValue} 
															onChange={this.editTaskWithId} className="form-control"/> <button 
															onClick={this.editTask}
															className="btn btn-default green" onClick={this.saveEditTask}>
															Сохранить</button>
															<button className="btn btn-default red">Отмена</button></td>
															</tr>
													}else{
													return <tr key={key}>
															<td>{item.name}<button 
															onClick={this.editTask.bind(this,item.id,item.name)}
															className="btn btn-default yellow">
															Редактировать</button>
															<button className="btn btn-default red">Удалить</button></td>
															</tr>
														}
														})
												:null}
											</tbody>
										</table>
									</div>
								</div>
							</div>:null}
						</div>
					</div>

		}
	}

	export default connect(store => store)(ToDo);