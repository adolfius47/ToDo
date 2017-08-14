import React, {Component} from 'react';
import {connect} from 'react-redux';
class App extends Component {
    render() {
        let dropDown, access
        if (this.props.location.pathname == '/') {
            document.title = "Contact List";


            dropDown = <div className="row">
                <div className="col-lg-12">
                    <h3 className="page-title">
                        Contact List
                    </h3>

                    <div className="page-bar">
                        <ul className="page-breadcrumb breadcrumb">
                            <li>
                                <i className="fa fa-home">&nbsp;</i>
                                
                            </li>
                            <li><a >Show all</a>

                            </li>
                        </ul>
                    </div>
                </div>
            </div>



            
        } else if (this.props.location.pathname == '/create') {
            document.title = "Add new contact";

            dropDown = <div className="row">
                <div className="col-lg-12">
                    <h3 className="page-title">
                        Contact List
                        <small>&nbsp;Add new Contact</small>
                    </h3>

                    <div className="page-bar">
                        <ul className="page-breadcrumb breadcrumb">
                            <li>
                                <i className="fa fa-home">&nbsp;</i>
                                <a >Add</a>
                            </li>
                            
                        </ul>
                    </div>
                </div>
            </div>
        }  else if (this.props.location.pathname.indexOf('edit') + 1) {
            document.title = "Редагування державного тендеру";



            dropDown = <div className="row">
                <div className="col-lg-12">
                    <h3 className="page-title">
                        Державні тендери
                        <small>&nbsp;Редагування тендеру</small>
                    </h3>

                    <div className="page-bar">
                        <ul className="page-breadcrumb breadcrumb">
                            <li>
                                <i className="fa fa-home">&nbsp;</i>
                                <a >Робочий
                                    стіл</a>
                            </li>
                            <li><a >Державні
                                тендери</a>

                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        }

            access = this.props.children

        return <div>
            {dropDown}
            <div className="row">
                <div className="col-lg-12">
                    {access}


                </div>
            </div>
        </div>
    }
}
export default connect(store => store)(App);