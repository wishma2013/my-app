/**
 * Created by eilir on 2020/2/25.
 */

import React, {Component} from 'react'
//import PropTypes from 'prop-types'

class Login extends Component {

    constructor(props){
        super(props)
        this.state = {
            'mystate' : 0
        }
        this.myCounter = this.myCounter.bind(this)
    }

    myCounter = () =>{
        var counter = this.state.mystate
        this.setState({
            'mystate':counter + 1
        });
    }

    componentDidMount = function(){
        console.log("Login didMount")
        this.inter = setInterval(this.myCounter, 1000)
    }
    componentWillUnmount() {
        clearInterval(this.inter)
    }

    componentDidUpdate(p,a){
        console.log(p,a)
    }

    shouldComponentUpdate(p, a){
        console.log(p, a)
        if(a.mystate === 5){
            clearInterval(this.inter)
        }
        return a.mystate < 5
    }


    static contextTypes = {
        //router : PropTypes.object.isRequired
    }

    onSubmitForm = function(event){
        event.preventDefault() //这句代码阻止了页面跳转！[F_37] # 2020-02-25 08:45:41
        //go to home page [F_39] # 2020-02-25 08:56:58
        //因为是post，需要调用route跳转。 [F_42] # 2020-02-25 10:07:39
        var email = document.querySelector("input[name='email']").value
        alert(1)
        return email===1;
    }

    handleSubmit = function() {

    }

    render() {
        //this.onSubmitForm.bind(this)
        return <section className="login-body">
                <h1>欢迎回家！{this.state.mystate}</h1>
                <div className="w3ls-login box">
                    <img src={process.env.PUBLIC_URL+"/logo192.png"} alt="logo_img" />
                    <form method="post" onSubmit={this.onSubmitForm}>
                        <div className="agile-field-txt">
                            <input type="email" name="email" placeholder="Your email" required="" />
                        </div>
                        <div className="agile-field-txt">
                            <input type="password" name="password" placeholder="password" required="" id="myInput" />
                            <div className="agile_label">
                                <input id="check3" name="check3" type="checkbox" value="show password"/>
                                <label className="check" htmlFor="check3">Remember me</label>
                            </div>
                        </div>
                        <div className="w3ls-bot">
                            <input type="submit" value="LOGIN"/>
                        </div>
                    </form>
                </div>
                <div className="copy-wthree">
                    <p>
                        Copyright &copy; 2020.MolyTech All rights reserved.
                        <a target="_blank" rel="noopener noreferrer" href="http://#">无敌魔女</a>
                    </p>
                </div>
        </section>
    }
}

export default Login
