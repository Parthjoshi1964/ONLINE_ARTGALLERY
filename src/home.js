import React from 'react'
import './home.css'
import logouticon from './logout.jpg'
import { callApi, errorResponse, getSession, setSession } from './main';
import menuicon from './menulogo.jpg';



const HS1 = {"padding-left" : "5px", "font-weight" : "bold"};
const HS2 = {"float" : "right", "padding-right" : "5px", "cursor" : "pointer"};
const HS3 = {"float" : "right", "height" : "16px", "margin-top" : "6px", "cursor" : "pointer"}
const HS4 = {"float" : "right", "padding-right" : "10px"}

export function loadMenu(res)
{
    var data = JSON.parse(res);
    var menuitems = "";
    for(var x in data)
    {
        menuitems += `<li>
                        <label id='${data[x].mid}L' >${data[x].mtitle}</label>
                        <div id='${data[x].mid}' class='smenu'></div>
                      </li>`;
    }
    var mlist = document.getElementById('mlist');
    mlist.innerHTML = menuitems;

    for(x in data)
    {
        document.getElementById(`${data[x].mid}L`).addEventListener("click", showSMenu.bind(null, data[x].mid));
    }
}

export function showSMenu(mid){
    var surl = "http://localhost:5000/home/menus"; 
    var ipdata = JSON.stringify({
        mid : mid
    });
    callApi("POST", surl, ipdata, loadSMenu, errorResponse);
        
    var smenu = document.getElementById(mid);
    if(smenu.style.display === "block")
        smenu.style.display = "none";
    else
        smenu.style.display = "block";
}

export function loadSMenu(res)
{
    var data = JSON.parse(res);
    var smenuitems = "";
    for(var x in data)
    {
        smenuitems += `<label id='${data[x].smid}'>${data[x].smtitle}</label>`;
    }
    var smenu = document.getElementById(`${data[x].mid}`);
    smenu.innerHTML = smenuitems;

    for(x in data)
    {
        document.getElementById(`${data[x].smid}`).addEventListener("click", loadModule.bind(null, data[x].smid));
    }
}

export function loadModule(smid)
{
   var titlebar = document.getElementById('titlebar');
   var module = document.getElementById('module');
   switch(smid)
   {
        case "M10101":
            module.src = "/myprofile";
            titlebar.innerText = "My Profile";
            break;
        case "M10102":
            module.src = "/changepassword";
            titlebar.innerText = "Change Password";
            break;
        case "M00101":
                module.src = "/NewArrivalNotification";
                titlebar.innerText = "NewArrivalNotification";
                break;

        case "M00102":
                    module.src = "./FeedbackModule";
                    titlebar.innerText = "FeedbackModule";
                    break; 

        case "M00104":
                        module.src = "./ArtworkCard";
                        titlebar.innerText = "items";
                        break;    
        case "M00105":
                        module.src = "./PaymentDetails";
                        titlebar.innerText = "paymentdetails";
                        break;         

        default:
            module.src = "";
            titlebar.innerText = "";
   }
}

class Home extends React.Component
{
    constructor()
    {
        super();
        this.sid = getSession("sid");
        //alert(this.sid);
        if(this.sid === "")
            window.location.replace("/");

        var url = "http://localhost:5000/home/uname";
        var data = JSON.stringify({
            emailid : this.sid
        });
        callApi("POST", url, data, this.loadUname, errorResponse);

        url = "http://localhost:5000/home/menu";
        callApi("POST", url, "", loadMenu, errorResponse);
    }

    loadUname(res)
    {
        var data = JSON.parse(res);
        var HL1 = document.getElementById("HL1");
        HL1.innerText = `${data[0].firstname} ${data[0].lastname}`
    }

    logout()
    {
        setSession("sid", "", -1);
        window.location.replace("/");
    }

    render()
    {
        return(
            <div className='full-height'>
                <div className='header'>
                    <label style={HS1}>ARTISTA</label>
                    <label style={HS2} onClick={this.logout}>Logout</label>
                    <img src={logouticon} alt='' style={HS3} onClick={this.logout} />
                    <label id='HL1' style={HS4}></label>
                </div>
                <div className='content'>
                    <div className='menubar'>
                        <div className='menuheader'>
                            <img src={menuicon} alt='' />
                            <label>MENU</label>
                        </div>
                        <div className='menu'>
                            <nav><ul id='mlist' className='mlist'></ul></nav>
                        </div>
                    </div>
                    <div className='outlet'>
                        <div id='titlebar'></div>
                        <iframe id='module' src="" title='module' ></iframe>
                    </div>
                </div>
                <div className='footer'>
                    Copyright @ ARTISTA. All rights reserved.
                </div>
            </div>
        );
    }
}

export default Home;