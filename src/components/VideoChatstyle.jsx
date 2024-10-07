import React from 'react';
import './VideoChat.css';
 // Import your CSS file

function VideoChat() {
    // const [activeUser, setActiveUser] = useState("Khalid Charif"); // State to track active user

    // Function to handle user item click
    // const handleUserItemClick = (userName) => {
    //     setActiveUser(userName);
    //     // Implement your logic to load chat with the selected user
    //     console.log('Clicked on user: ' + userName);
    // };

    // Function to send a message
    // const sendMessage = () => {
    //     // Implement message sending logic here
    //     console.log('Message sent');
    // };

    return (
        <div className="container-fluid h-100">
            <div className="row justify-content-center h-100">
                <div className="col-md-4 col-xl-3 chat">
                    <div className="card mb-sm-3 mb-md-0 contacts_card">
                        <div className="card-header">
                            <div className="input-group">
                                <input type="text" placeholder="Search..." name="" className="form-control search" />
                                <div className="input-group-prepend">
                                    <span className="input-group-text search_btn"><i className="fas fa-search"></i></span>
                                </div>
                            </div>
                        </div>
                        <div className="card-body contacts_body">
                            <ul className="contacts">
                                 <li> 
                                    <div className="d-flex bd-highlight">
                                        <div className="img_cont">
                                            <img src="https://static.turbosquid.com/Preview/001292/481/WV/_D.jpg" className="rounded-circle user_img" />
                                            <span className="online_icon"></span>
                                        </div>
                                        <div className="user_info">
                                            <span>Khalid Charif</span>
                                            <p>Online</p>
                                        </div>
                                    </div>
                                </li>
                                {/* Add more user items as needed */}
                            </ul>
                        </div>
                        <div className="card-footer"></div>
                    </div>
                </div>
                <div className="col-md-8 col-xl-6 chat">
                    <div className="card">
                        {/* Chat messages and input field */}
                        <div class="card">
						<div class="card-header msg_head" style={{backgroundColor:" rgb(247, 240, 240)"}}>
							<div class="d-flex bd-highlight" >
								<div class="img_cont">
									{/* <img src="https://static.turbosquid.com/Preview/001292/481/WV/_D.jpg" class="rounded-circle user_img"> */}
									<span class="online_icon"></span>
								</div>
								<div class="user_info">
									<span style={{color:" black"}}>khalid Charif</span>
									<p style={{color:" black"}}>1767 Messages</p>
								</div>
								<div class="video_cam">
									<span><i class="fas fa-video" style={{color: "black"}}></i></span>
									<span><i class="fas fa-phone" style={{color:" black"}}></i></span>
								</div>
							</div>
							<span id="action_menu_btn" style={{color: "black"}}><i class="fas fa-ellipsis-v"></i></span>
							<div class="action_menu">
								<ul>
									<li><i class="fas fa-user-circle"></i> View profile</li>
									<li><i class="fas fa-users"></i> Add to close friends</li>
									<li><i class="fas fa-plus"></i> Add to group</li>
									<li><i class="fas fa-ban"></i> Block</li>
								</ul>
							</div>
						</div>
						<div class="card-body msg_card_body" style={{backgroundColor:" white"}}>
							<div class="d-flex justify-content-start mb-4">
								<div class="img_cont_msg">
									{/* <img src="https://static.turbosquid.com/Preview/001292/481/WV/_D.jpg" class="rounded-circle user_img_msg"> */}
								</div>
								<div class="msg_cotainer">
									Hi, how are you samim?
									<span class="msg_time">8:40 AM, Today</span>
								</div>
							</div>
							<div class="d-flex justify-content-end mb-4">
								<div class="msg_cotainer_send">
									Hi Khalid i am good tnx how about you?
									<span class="msg_time_send">8:55 AM, Today</span>
								</div>
								<div class="img_cont_msg">
							{/* <img src="https://avatars.hsoubcdn.com/ed57f9e6329993084a436b89498b6088?s=256" class="rounded-circle user_img_msg">
								</div> */}
							</div>
							<div class="d-flex justify-content-start mb-4">
								<div class="img_cont_msg">
									{/* <img src="https://static.turbosquid.com/Preview/001292/481/WV/_D.jpg" class="rounded-circle user_img_msg"> */}
								</div>
								<div class="msg_cotainer">
									I am good too, thank you for your chat template
									<span class="msg_time">9:00 AM, Today</span>
								</div>
							</div>
							<div class="d-flex justify-content-end mb-4">
								<div class="msg_cotainer_send">
									You are welcome
									<span class="msg_time_send">9:05 AM, Today</span>
								</div>
								<div class="img_cont_msg">
							{/* <img src="https://avatars.hsoubcdn.com/ed57f9e6329993084a436b89498b6088?s=256" class="rounded-circle user_img_msg"> */}
								</div>
							</div>
							<div class="d-flex justify-content-start mb-4">
								<div class="img_cont_msg">
									{/* <img src="https://static.turbosquid.com/Preview/001292/481/WV/_D.jpg" class="rounded-circle user_img_msg"> */}
								</div>
								<div class="msg_cotainer">
									I am looking for your next templates
									<span class="msg_time">9:07 AM, Today</span>
								</div>
							</div>
							<div class="d-flex justify-content-end mb-4">
								<div class="msg_cotainer_send">
									Ok, thank you have a good day
									<span class="msg_time_send">9:10 AM, Today</span>
								</div>
								<div class="img_cont_msg">
						{/* <img src="https://avatars.hsoubcdn.com/ed57f9e6329993084a436b89498b6088?s=256" class="rounded-circle user_img_msg"> */}
								</div>
							</div>
							<div class="d-flex justify-content-start mb-4">
								<div class="img_cont_msg">
									{/* <img src="https://static.turbosquid.com/Preview/001292/481/WV/_D.jpg" class="rounded-circle user_img_msg"> */}
								</div>
								<div class="msg_cotainer">
									Bye, see you
									<span class="msg_time">9:12 AM, Today</span>
								</div>
							</div>
						</div>
						<div class="card-footer" style={{backgroundColor:" white"}}>
							<div class="input-group" style={{backgroundColor: "white",
                            color: "black"}}>
								<div class="input-group-append">
									<span class="input-group-text attach_btn"><i class="fas fa-paperclip"></i></span>
								</div>
								<textarea name="" class="form-control type_msg" placeholder="Type your message..."></textarea>
								<div class="input-group-append">
									<span class="input-group-text send_btn"><i class="fas fa-location-arrow"></i></span>
								</div>
							</div>
						</div>
					</div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
}

export default VideoChat;
